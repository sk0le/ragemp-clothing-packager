import { DlcName } from "../../state";
import fs from "fs/promises";
import { joaat } from "../../utils/joaat";

export const getYmtMale = (a: string, b: string, c: string, d: string) => {
  return `<?xml version="1.0" encoding="utf-8"?>
<hash_16760659>
  <hash_49A0E46C value="false" />
  <hash_F3928A70 value="false" />
  <hash_364F037B value="false" />
  <hash_12CAF91F value="false" />
  <hash_B29BE228>255 255 255 255 0 255 1 255 2 255 255 3</hash_B29BE228>
  <hash_E2489C4F>
   ${a} 
   ${b}
   ${c}
   ${d}
  </hash_E2489C4F>
  <hash_7F049899 />
  <hash_23532A3B>
    <Item>
      <hash_2FD08CEF>none</hash_2FD08CEF>
      <hash_FC507D28>none</hash_FC507D28>
      <hash_07AE529D>0 0 0 0 0</hash_07AE529D>
      <flags value="0" />
      <hash_817AF4D5 />
      <exclusions />
      <hash_6032815C />
      <hash_7E103C8B value="0" />
      <hash_D12F579D value="4" />
      <hash_FA1F27BF value="0" />
    </Item>
    <Item>
      <hash_2FD08CEF>none</hash_2FD08CEF>
      <hash_FC507D28>none</hash_FC507D28>
      <hash_07AE529D>0 0 0 0 0</hash_07AE529D>
      <flags value="0" />
      <hash_817AF4D5 />
      <exclusions />
      <hash_6032815C />
      <hash_7E103C8B value="0" />
      <hash_D12F579D value="6" />
      <hash_FA1F27BF value="0" />
    </Item>
    <Item>
      <hash_2FD08CEF>none</hash_2FD08CEF>
      <hash_FC507D28>none</hash_FC507D28>
      <hash_07AE529D>0 0 0 0 0</hash_07AE529D>
      <flags value="0" />
      <hash_817AF4D5 />
      <exclusions />
      <hash_6032815C />
      <hash_7E103C8B value="0" />
      <hash_D12F579D value="8" />
      <hash_FA1F27BF value="0" />
    </Item>
    <Item>
      <hash_2FD08CEF>none</hash_2FD08CEF>
      <hash_FC507D28>none</hash_FC507D28>
      <hash_07AE529D>0 0 0 0 0</hash_07AE529D>
      <flags value="0" />
      <hash_817AF4D5 />
      <exclusions />
      <hash_6032815C />
      <hash_7E103C8B value="0" />
      <hash_D12F579D value="11" />
      <hash_FA1F27BF value="0" />
    </Item>
  </hash_23532A3B>
  <hash_8590ADD8>
    <hash_9AE1215F value="0" />
    <hash_E8A00D49 />
    <hash_09AD30FA />
  </hash_8590ADD8>
  <dlcName>hash_${joaat(`mp_m_${DlcName}`)}</dlcName>
</hash_16760659>`;
};

export const getYmtItem = (r: boolean, c: number) => {
  if (c === 0) {
    return `<Item>
      <hash_C8F5438B value="1" />
      <hash_68AC8351>
        <Item>
          <hash_AECFE243 value="1" />
          <hash_A7431FBA value="0" />
          <hash_4A92222A>
            <Item>
              <texId value="0" />
              <hash_36896D17 value="255" />
            </Item>
          </hash_4A92222A>
          <hash_92E68DB3>
            <hash_A893A361 value="false" />
          </hash_92E68DB3>
        </Item>
      </hash_68AC8351>
    </Item>`;
  }

  return `<Item>
      <hash_C8F5438B value="${c}" />
      <hash_68AC8351>
        <Item>
          <hash_AECFE243 value="${r ? "17" : "1"}" />
          <hash_A7431FBA value="0" />
          <hash_4A92222A>
            ${Array(c)
              .fill(0)
              .map(
                (value, index) =>
                  `<Item><texId value="${index}" /><hash_36896D17 value="255" /></Item>`
              )
              .join("")}
          </hash_4A92222A>
          <hash_92E68DB3>
            <hash_A893A361 value="false" />
          </hash_92E68DB3>
        </Item>
      </hash_68AC8351>
    </Item>`;
};

export const generateYmt = async (
  male: boolean,
  componentModels: any,
  componentTextures: any
) => {
  const lowrItems = getYmtItem(componentModels.lowr, componentTextures.lowr);
  const feetItems = getYmtItem(componentModels.feet, componentTextures.feet);
  const accsItems = getYmtItem(componentModels.accs, componentTextures.accs);
  const jbibItems = getYmtItem(componentModels.jbib, componentTextures.jbib);

  const dir = `${process.cwd()}\\working-folder\\x64\\models\\cdimages\\`;

  const dlc = `${dir}\\${DlcName}_${male ? "male" : "female"}.rpf`;
  await fs.mkdir(dlc);
  const finalMaleYmt = getYmtMale(lowrItems, feetItems, accsItems, jbibItems);
  await fs.writeFile(
    `${dlc}\\mp_${male ? "m" : "f"}_freemode_01_mp_${
      male ? "m" : "f"
    }_${DlcName}.ymt.xml`,
    finalMaleYmt,
    {}
  );
};
