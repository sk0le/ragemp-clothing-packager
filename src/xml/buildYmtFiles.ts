import { printInfo, printSuccess } from "../utils/prints/prints";

import { DlcName } from "../state";
import { PowerShell } from "node-powershell";
import fs from "fs/promises";
import { generateYmt } from "./ymt/male_ymt";
import { getComponents } from "../files/getComponent";

const spawn = require("await-spawn");

export const buildYmtFiles = async () => {
  try {
    printInfo("Making ymt files");

    const male: any = getComponents(true);
    const female: any = getComponents(true);

    printInfo("Generated xml files, writing...");

    await generateYmt(true, male.componentModels, male.componentTextures);
    await generateYmt(false, female.componentModels, female.componentTextures);

    printInfo("Wrote XML files, generating YMT");

    const makeYmt = await spawn("powershell.exe", [
      `.\\MakeYMT.ps1 ${DlcName}`,
    ]);

    const dir = `${process.cwd}\\working-folder\\x64\\models\\cdimages`;

    await fs.rm(
      `${dir}\\${DlcName}_male.rpf\\mp_m_freemode_01_mp_m_${DlcName}.ymt.xml`
    );
    await fs.rm(
      `${dir}\\${DlcName}_female.rpf\\mp_f_freemode_01_mp_f_${DlcName}.ymt.xml`
    );

    printSuccess("Made all of the YMT");
    console.log();

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
