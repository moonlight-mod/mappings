const fs = require("fs");

const types = {
  "discord/packages/flux": "Flux",
  "discord/Dispatcher": "_Dispatcher" // "Dispatcher" may be reserved in some scenarios
};

const write = process.argv.includes("--write");

function generateImports() {
  let str = "// auto-generated\n";

  for (const path of Object.keys(types).sort()) {
    str += `import "./mappings/${path}";\n`;
  }

  if (write) {
    fs.writeFileSync("src/modules.ts", str);
  } else {
    console.log(str);
  }
}

function generateTypes() {
  let str = "// auto-generated\n";

  for (const path of Object.keys(types).sort()) {
    const type = types[path];
    str += `import ${type} from "./mappings/${path}";\n`;
  }

  str += "\n";

  str += "export type MappedModules = {\n";
  for (const path of Object.keys(types).sort()) {
    const type = types[path];
    str += `  "${path}": ${type};\n`;
  }
  str += "};\n\n";

  str +=
    "export declare function WebpackRequire<T extends keyof MappedModules>(\n  module: T\n): MappedModules[T];\n";

  if (write) {
    fs.writeFileSync("src/types.ts", str);
  } else {
    console.log(str);
  }
}

function generateDeclares(prefix) {
  let str = "// auto-generated\n";

  for (const path of Object.keys(types).sort()) {
    str += `declare module "${prefix}${path}" {\n`;
    str += `  import { MappedModules } from "@moonlight-mod/mappings";\n`;
    str += `  const _: MappedModules["${path}"];\n`;
    str += `  export = _;\n`;
    str += `}\n\n`;
  }

  console.log(str);
}

const command = process.argv.length > 2 ? process.argv[2] : null;

switch (command) {
  case "imports":
    generateImports();
    break;

  case "types":
    generateTypes();
    break;

  case "declares":
    generateDeclares(process.argv[3]);
    break;

  default:
    console.error(`Usage: node generate.js <imports|types|declares>`);
    break;
}
