import { printInfo, printSuccess } from "../utils/prints/prints";

import { DlcName } from "../state";
import { ncp } from "ncp";

export const copyFiles = () => {
  printInfo("Started copying models and textures");
  const inputDir = `${process.cwd()}\\input`;
  const outputDir = `${process.cwd()}\\working-folder\\x64\\models\\cdimages`;

  // male
  ncp(
    `${inputDir}\\male`,
    `${outputDir}\\${DlcName}_male.rpf\\mp_m_freemode_01_mp_m_${DlcName}`,
    () => {}
  );

  ncp(
    `${inputDir}\\female`,
    `${outputDir}\\${DlcName}_female.rpf\\mp_f_freemode_01_mp_f_${DlcName}`,
    () => {}
  );

  printSuccess("Successfully copied all of the textures and models");
  console.log("");
};
