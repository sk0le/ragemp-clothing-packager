$name = $args[0]
$male = '.\working-folder\x64\models\cdimages\' + $name + '_male.rpf\mp_m_freemode_01_mp_m_' + $name + '.ymt.xml' 
$maleOutput = '.\working-folder\x64\models\cdimages\' + $name + '_male.rpf\mp_m_freemode_01_mp_m_' + $name + '.ymt' 
$female = '.\working-folder\x64\models\cdimages\' + $name + '_female.rpf\mp_f_freemode_01_mp_f_' + $name + '.ymt.xml'  
$femaleOutput = '.\working-folder\x64\models\cdimages\' + $name + '_female.rpf\mp_f_freemode_01_mp_f_' + $name + '.ymt'  

# .\MetaToolkit\MetaTool.exe $male
# .\MetaToolkit\MetaTool.exe $female 
.\GTAUtil\GTAUtil.exe importmeta --input $male --output $maleOutput
.\GTAUtil\GTAUtil.exe importmeta --input $female --output $femaleOutput