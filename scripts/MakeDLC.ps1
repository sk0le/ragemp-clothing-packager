$name = $args[0]
$outputPath = '.\output\' + $name

mkdir $outputPath
.\GTAUtil\GTAUtil.exe createarchive --input .\working-folder --name dlc --output $outputPath 