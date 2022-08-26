import kleur from "kleur";

export const printSuccess = (text: string) => {
  // process.stdout.write(kleur.green(text));
  console.log(kleur.bold(kleur.green("[+]")), text);
};

export const printError = (text: string) => {
  console.log(kleur.bold(kleur.red("[-]")), text);
};

export const printInfo = (text: string) => {
  console.log(kleur.bold(kleur.blue("[!]")), text);
};
