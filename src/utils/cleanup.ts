import * as fsExtra from "fs-extra";

import { printError, printInfo, printSuccess } from "./prints/prints";

import { DlcName } from "../state";

export const cleanUp = async () => {
  try {
    printInfo("Cleaning up all the files");
    const workingFolder = `${process.cwd()}\\working-folder`;

    await fsExtra.remove(`${workingFolder}\\content.xml`);
    await fsExtra.remove(`${workingFolder}\\setup2.xml`);

    await fsExtra.emptyDir(`${workingFolder}\\common\\data`);

    await fsExtra.emptyDir(`${workingFolder}\\x64\\models\\cdimages\\`);

    return true;
  } catch (error) {
    console.error(error);
    printError("Error with cleaning files");
    return false;
  }
};
