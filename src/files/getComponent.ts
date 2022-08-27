import { femaleFiles, maleFiles } from ".";

export const getComponents = (male: boolean) => {
  let files = femaleFiles;
  if (male) files = maleFiles;

  const componentModels = {
    jbib: false,
    lowr: false,
    feet: false,
    accs: false,
  };
  const componentTextures = { jbib: 0, lowr: 0, feet: 0, accs: 0 };

  for (let i = 0; i < files.length; i++) {
    let a = "";
    for (let j = 0; j < files[i].length; j++) {
      if (files[i][j] === "_") break;
      a += files[i][j];
    }
    let ext = files[i].substring(files[i].length - 3, files[i].length);
    if (ext === "ydd") {
      const b = files[i][files[i].length - 5];
      componentModels[a as keyof typeof componentModels] =
        b === "r" ? true : false;
    }
    if (ext === "ytd") {
      componentTextures[a as keyof typeof componentTextures] =
        componentTextures[a as keyof typeof componentTextures] + 1;
    }
  }

  return { componentModels, componentTextures };
};
