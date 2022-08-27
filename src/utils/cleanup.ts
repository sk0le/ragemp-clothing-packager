import { printInfo, printSuccess } from "./prints/prints";

import { DlcName } from "../state";
import fs from "fs/promises";
import rimraf from "rimraf";

export const cleanUp = async () => {
  printInfo("Cleaning up all the files");
  const workingFolder = `${process.cwd()}\\working-folder`;

  fs.rm(`${workingFolder}\\content.xml`);
  fs.rm(`${workingFolder}\\setup2.xml`);

  fs.rm(
    `${workingFolder}\\common\\data\\mp_f_freemode_01_${DlcName}_shop.meta\\`
  );
  fs.rm(
    `${workingFolder}\\common\\data\\mp_m_freemode_01_${DlcName}_shop.meta\\`
  );

  const rpfDir = `${workingFolder}\\x64\\models\\cdimages\\`;

  // rimraf(`${rpfDir}\\${DlcName}_male.rpf`, () => {});
  // rimraf(`${rpfDir}\\${DlcName}_female.rpf`, () => {});

  printSuccess(
    "Successfully cleaned all of the files, you can go play some GTA V now"
  );
};
