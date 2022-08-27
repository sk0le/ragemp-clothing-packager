import { printError, printInfo } from "../utils/prints/prints";

import { checkFilesFromDir } from "./checkFiles";
import getFilesFromDirectory from "./getInputFiles";

export const maleFiles: string[] = [];
export const femaleFiles: string[] = [];

export default async function checkAndGetFiles() {
  const inputFolder = `${process.cwd()}\\input`;

  console.log();
  printInfo(`Loading models/textures from ${inputFolder}`);
  console.log();

  const maleOriginalFiles = await getFilesFromDirectory(`${inputFolder}\\male`);
  const femaleOriginalFiles = await getFilesFromDirectory(
    `${inputFolder}\\female`
  );

  maleOriginalFiles.forEach((value: string) => {
    maleFiles.push(value.replace(`${inputFolder}\\male\\`, ""));
  });

  femaleOriginalFiles.forEach((value: string) => {
    femaleFiles.push(value.replace(`${inputFolder}\\female\\`, ""));
  });

  const check = checkFilesFromDir(maleFiles);
  const checkFemale = checkFilesFromDir(femaleFiles);

  if (!check || !checkFemale) {
    printError(
      "In 'male' or 'female' folder there were files with extension other than '.ytd' and '.ydd'"
    );
    return false;
  }

  printInfo("Checked all files, started building rpf");
  console.log();
  return true;
}
