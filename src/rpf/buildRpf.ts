import { printInfo, printSuccess } from "../utils/prints/prints";

import { DlcName } from "../state";

const spawn = require("await-spawn");

export const buildRpf = async () => {
  printInfo("Starting to build rpf");

  await spawn("powershell.exe", [`.\\scripts\\MakeDLC.ps1 ${DlcName}`]);

  printSuccess(
    `Successfully made dlc.rpf in 'output/${DlcName}' folder, thank you for using this tool, leave a star!`
  );
  console.log("");
};
