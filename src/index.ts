import getFilesFromDirectory from "./files/getInputFiles";
import printAscii from "./utils/prints/printAscii";
import { printInfo } from "./utils/prints/prints";
import prompts from "prompts";

// print always header
printAscii("Clothing Packager");

const main = async () => {
  const response = await prompts({
    type: "text",
    name: "name",
    message: "Name of dlc pack? (don't make it 'dlc')",
  });

  console.log(response.name);
  // const inputFolder = `${process.cwd()}\\input`;

  // printInfo(`Loading models/textures from ${inputFolder}`);
  // const files = await getFilesFromDirectory(inputFolder);
  // console.log(files);
};

main();
