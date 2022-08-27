import { DlcName, Order } from "../state";
import { getFemaleTraining, getMaleTraining } from "./objects/training";

import fs from "fs/promises";
import { getContentXml } from "./objects/content";
import { getSetup2Xml } from "./objects/setup2";
import { printSuccess } from "../utils/prints/prints";

export default function buildXmlFiles() {
  try {
    const content = getContentXml(DlcName);
    const setup2 = getSetup2Xml(DlcName, Order);

    const maleTraining = getMaleTraining(DlcName);
    const femaleTraining = getFemaleTraining(DlcName);

    fs.writeFile(`${process.cwd()}\\working-folder\\content.xml`, content, {});
    fs.writeFile(`${process.cwd()}\\working-folder\\setup2.xml`, setup2, {});

    printSuccess("Made content.xml | setup2.xml");

    fs.writeFile(
      `${process.cwd()}\\working-folder\\common\\data\\mp_m_freemode_01_${DlcName}_shop.meta`,
      maleTraining,
      {}
    );
    fs.writeFile(
      `${process.cwd()}\\working-folder\\common\\data\\mp_f_freemode_01_${DlcName}_shop.meta`,
      femaleTraining,
      {}
    );

    printSuccess(
      `Made mp_f_freemode_01_${DlcName}_shop.meta | mp_m_freemode_01_${DlcName}_shop.meta`
    );

    console.log("");

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
