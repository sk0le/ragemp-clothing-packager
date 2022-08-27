export const getMaleTraining = (name: string) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<ShopPedApparel>
	<pedName>mp_m_freemode_01</pedName>
	<dlcName>mp_m_${name}</dlcName>
	<fullDlcName>mp_m_freemode_01_mp_m_${name}</fullDlcName>
	<eCharacter>SCR_CHAR_MULTIPLAYER</eCharacter>
	<creatureMetaData/>
	
	<pedOutfits/>
	
	<pedComponents/>
	
	<pedProps/>
	
</ShopPedApparel>`;
};

export const getFemaleTraining = (name: string) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<ShopPedApparel>
	<pedName>mp_f_freemode_01</pedName>
	<dlcName>mp_f_${name}</dlcName>
	<fullDlcName>mp_f_freemode_01_mp_f_${name}</fullDlcName>
	<eCharacter>SCR_CHAR_MULTIPLAYER_F</eCharacter>
	<creatureMetaData/>
	
	<pedOutfits/>
	
	<pedComponents/>
	
	<pedProps/>
	
</ShopPedApparel>`;
};
