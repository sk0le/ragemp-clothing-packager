export const checkFilesFromDir = (files: string[]) => {
  for (let i = 0; i < files.length; i++) {
    const fileExt = files[i].slice(files[i].length - 3, files[i].length);

    if (fileExt !== "ytd" && fileExt !== "ydd") {
      return false;
    }
  }

  return true;
};
