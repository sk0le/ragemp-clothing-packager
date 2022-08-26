const fs = require("fs/promises");
const path = require("path");

const getFilesFromDirectory = async (directoryPath: string) => {
  const filesInDirectory = await fs.readdir(directoryPath);
  const files = await Promise.all(
    filesInDirectory.map(async (file: File) => {
      const filePath = path.join(directoryPath, file);
      const stats = await fs.stat(filePath);

      if (stats.isDirectory()) {
        return getFilesFromDirectory(filePath);
      } else {
        return filePath;
      }
    })
  );
  return files.filter((file) => file.length); // return with empty arrays removed
};

export default getFilesFromDirectory;
