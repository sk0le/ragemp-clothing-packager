import * as fsExtra from "fs-extra";

import { updateDlcName, updateOrder } from "./state";

import { buildRpf } from "./rpf/buildRpf";
import buildXmlFiles from "./xml/buildXmlFiles";
import { buildYmtFiles } from "./xml/buildYmtFiles";
import checkAndGetFiles from "./files";
import { cleanUp } from "./utils/cleanup";
import { copyFiles } from "./files/copyFiles";
import { joaat } from "./utils/joaat";
import printAscii from "./utils/prints/printAscii";
import prompts from "prompts";

// print always header
printAscii("Clothing Packager");

const main = async () => {
  const a = await prompts({
    type: "confirm",
    name: "value",
    message:
      "Do you want to delete all other dlcs in output folder (this is in case of overlaping)?",
    initial: true,
  });

  if (a.value) {
    fsExtra.emptyDir(`${process.cwd()}\\output\\`);
  }

  const response = await prompts({
    type: "text",
    name: "name",
    message: "Name of dlc pack? (don't make it 'dlc' and make it unique)",
  });

  // update global dlc name
  updateDlcName(response.name);

  const order = await prompts({
    type: "number",
    name: "number",
    initial: 0,
    min: 0,
    max: 1000,
    message:
      "Order of DLC pack, default 0, if you have multiple DLC packs, that this is really important",
  });

  updateOrder(order.number);

  // get files in 'input', check for file types etc...
  const fileExtensionValid: boolean = await checkAndGetFiles();

  if (fileExtensionValid) {
    const cleaned: boolean = await cleanUp();

    if (!cleaned) return;

    const xmlFilesBuilt = buildXmlFiles();
    if (xmlFilesBuilt) {
      const ymtFilesBuilt = await buildYmtFiles();
      if (ymtFilesBuilt) {
        copyFiles();
        buildRpf();
      }
    }
  }
};

main();
