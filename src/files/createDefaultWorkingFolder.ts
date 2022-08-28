import * as fsExtra from "fs-extra";

import { cleanUp } from "../utils/cleanup";

export const createDefaultWorkingFolder = async () => {
  const dir = `${process.cwd()}\\working-folder`;
  const folderCreated = await fsExtra.pathExists(dir);
  if (!folderCreated) {
    await fsExtra.mkdir(dir);
    await fsExtra.mkdir(`${dir}\\common`);
    await fsExtra.mkdir(`${dir}\\common\\data`);
    await fsExtra.mkdir(`${dir}\\x64`);
    await fsExtra.mkdir(`${dir}\\x64\\models`);
    await fsExtra.mkdir(`${dir}\\x64\\models\\cdimages`);
  } else {
    await cleanUp();
  }
};
