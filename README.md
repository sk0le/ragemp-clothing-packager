# RageMP Clothing Packger

This tool will easily pack all clothing you have, and will output single folder, that you can drop in `/client_packages/game_resources/dlcpacks` and it will work.

## Installation

Make sure you are in root folder.
If you don't have `yarn` installed, just ran `npm i -g yarn`

```ps1
# building GTAUtil
GTAUtil/GTAUtil.exe buildcache

# install all of the dependencies
yarn

# build all of the files
yarn build

# start the script
yarn start
```

## Plan

- Make tool read from `input/` folder and check for `.ytd` and `.ydd`
- Generate `.ymt` file, idk how yet, but I need to figure it out
- Using GTAUtil create .rpf with those files
