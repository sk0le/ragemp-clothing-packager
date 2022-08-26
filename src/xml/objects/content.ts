const getContentXml = (name: string) => {
  return {
    CDataFileMgr__ContentsOfDataFileXml: {
      disabledFiles: "",
      includedXmlFiles: "",
      includedDataFiles: "",
      dataFiles: {
        Item: [
          {
            filename: `dlc_${name}CRC:/common/data/mp_f_freemode_01_${name}_shop.meta`,
            fileType: "SHOP_PED_APPAREL_META_FILE",
            overlay: {
              _value: "false",
            },
            disabled: {
              _value: "true",
            },
            persistent: {
              _value: "false",
            },
          },
          {
            filename: `dlc_${name}CRC:/common/data/mp_m_freemode_01_${name}_shop.meta`,
            fileType: "SHOP_PED_APPAREL_META_FILE",
            overlay: {
              _value: "false",
            },
            disabled: {
              _value: "true",
            },
            persistent: {
              _value: "false",
            },
          },
          {
            filename: `dlc_${name}:/%PLATFORM%/models/cdimages/${name}_male.rpf`,
            fileType: "RPF_FILE",
            overlay: {
              _value: "true",
            },
            disabled: {
              _value: "true",
            },
            persistent: {
              _value: "true",
            },
          },
          {
            filename: `dlc_${name}:/%PLATFORM%/models/cdimages/${name}_female.rpf`,
            fileType: "RPF_FILE",
            overlay: {
              _value: "true",
            },
            disabled: {
              _value: "true",
            },
            persistent: {
              _value: "true",
            },
          },
          {
            filename: `dlc_${name}CRC:/common/data/pedalternatevariations.meta`,
            fileType: "ALTERNATE_VARIATIONS_FILE",
            overlay: {
              _value: "false",
            },
            disabled: {
              _value: "true",
            },
            persistent: {
              _value: "false",
            },
          },
        ],
      },
      contentChangeSets: {
        Item: {
          changeSetName: `${name}_AUTOGEN`,
          mapChangeSetData: "",
          filesToInvalidate: "",
          filesToDisable: "",
          filesToEnable: {
            Item: [
              `dlc_${name}CRC:/common/data/mp_f_freemode_01_${name}_shop.meta`,
              `dlc_${name}:/%PLATFORM%/models/cdimages/${name}_female.rpf`,
              `dlc_${name}CRC:/common/data/mp_m_freemode_01_${name}_shop.meta`,
              `dlc_${name}:/%PLATFORM%/models/cdimages/${name}_male.rpf`,
            ],
          },
          txdToLoad: "",
          txdToUnload: "",
          residentResources: "",
          unregisterResources: "",
          requiresLoadingScreen: {
            _value: "false",
          },
        },
      },
      patchFiles: "",
    },
  };
};
