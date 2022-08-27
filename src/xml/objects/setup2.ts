export const getSetup2Xml = (name: string, order: number) => {
  return `?xml version="1.0" encoding="UTF-8"?>
<SSetupData>
  <deviceName>dlc_${name}</deviceName>
  <datFile>content.xml</datFile>
  <timeStamp>06/07/2020 13:49:00</timeStamp>
  <nameHash>${name}</nameHash>
  <contentChangeSets />
  <contentChangeSetGroups>
    <Item>
      <NameHash>GROUP_STARTUP</NameHash>
      <ContentChangeSets>
        <Item>${name}_AUTOGEN</Item>
      </ContentChangeSets>
    </Item>
  </contentChangeSetGroups>
  <startupScript />
  <scriptCallstackSize value="0" />
  <type>EXTRACONTENT_COMPAT_PACK</type>
  <order value="${100 + order}" />
  <minorOrder value="0" />
  <isLevelPack value="false" />
  <dependencyPackHash />
  <requiredVersion />
  <subPackCount value="0" />
</SSetupData>`;
};
