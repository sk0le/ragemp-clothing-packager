export const getContentXml = (name: string) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<CDataFileMgr__ContentsOfDataFileXml>
  <disabledFiles />
  <includedXmlFiles />
  <includedDataFiles />
  <dataFiles>
    <Item>
      <filename>dlc_${name}CRC:/common/data/mp_f_freemode_01_${name}_shop.meta</filename>
      <fileType>SHOP_PED_APPAREL_META_FILE</fileType>
      <overlay value="false" />
      <disabled value="true" />
      <persistent value="false" />
    </Item>
	<Item>
      <filename>dlc_${name}CRC:/common/data/mp_m_freemode_01_${name}_shop.meta</filename>
      <fileType>SHOP_PED_APPAREL_META_FILE</fileType>
      <overlay value="false" />
      <disabled value="true" />
      <persistent value="false" />
    </Item>
    <Item>
      <filename>dlc_${name}:/%PLATFORM%/models/cdimages/${name}_male.rpf</filename>
      <fileType>RPF_FILE</fileType>
      <overlay value="true" />
      <disabled value="true" />
      <persistent value="true" />
    </Item>
    <Item>
      <filename>dlc_${name}:/%PLATFORM%/models/cdimages/${name}_female.rpf</filename>
      <fileType>RPF_FILE</fileType>
      <overlay value="true" />
      <disabled value="true" />
      <persistent value="true" />
    </Item>
    <Item>
      <filename>dlc_${name}CRC:/common/data/pedalternatevariations.meta</filename>
      <fileType>ALTERNATE_VARIATIONS_FILE</fileType>
      <overlay value="false" />
      <disabled value="true" />
      <persistent value="false" />
    </Item>
  </dataFiles>
  <contentChangeSets>
    <Item>
      <changeSetName>${name}_AUTOGEN</changeSetName>
      <mapChangeSetData />
      <filesToInvalidate />
      <filesToDisable />
	  <filesToEnable>
		<Item>dlc_${name}CRC:/common/data/mp_f_freemode_01_${name}_shop.meta</Item>
        <Item>dlc_${name}:/%PLATFORM%/models/cdimages/${name}_female.rpf</Item>
		<Item>dlc_${name}CRC:/common/data/mp_m_freemode_01_${name}_shop.meta</Item>
        <Item>dlc_${name}:/%PLATFORM%/models/cdimages/${name}_male.rpf</Item>
	  </filesToEnable>
      <txdToLoad />
      <txdToUnload />
      <residentResources />
      <unregisterResources />
      <requiresLoadingScreen value="false" />
    </Item>		
  </contentChangeSets>
  <patchFiles />
</CDataFileMgr__ContentsOfDataFileXml>`;
};
