import figlet from "figlet";
import kleur from "kleur";

const printAscii = (text: string) => {
  console.log("");
  console.log(kleur.yellow(figlet.textSync(text, "Ogre")));
  console.log("");
};

export default printAscii;
