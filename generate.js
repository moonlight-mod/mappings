const fs = require("fs");

/*const typeNames = {
  "chroma-js": "chroma",
  "discord/Dispatcher": "_Dispatcher", // "Dispatcher" may be reserved in some scenarios
  "discord/components/common/index": "Components",
  "discord/packages/flux": "Flux",
  "highlight.js": "HighlightJS",
  "highlight.js/lib/core": "HighlightJSCore",
  "platform.js": "platformjs",
  react: "React",
  "simple-markdown": "SimpleMarkdown",
  "uuid/v4": "UUIDv4"
};*/

const mappedTypes = {
  "discord/actions/ContextMenuActionCreators": "ContextMenuActionCreators",
  "discord/Dispatcher": "_Dispatcher", // "Dispatcher" may be reserved in some scenarios
  "discord/components/common/index": "Components",
  "discord/modules/guild_settings/IntegrationCard.css": "IntegrationCardCSS",
  "discord/modules/markup/MarkupUtils": "MarkupUtils",
  "discord/modules/user_settings/web/openUserSettings": "OpenUserSettings",
  "discord/packages/flux": "Flux",
  "discord/utils/ClipboardUtils": "ClipboardUtils",
  "discord/utils/HTTPUtils": "HTTPUtils",
  "discord/utils/NativeUtils": "NativeUtils",
  "discord/uikit/Flex": "Flex",
  react: "React"
};

const write = process.argv.includes("--write");

/*function getPaths() {
  const paths = fs.readdirSync("src/mappings", { recursive: true });
  const out = [];

  for (const path of paths) {
    if (!path.endsWith(".ts")) continue;

    out.push(path.replace(".ts", "").replaceAll("\\", "/"));
  }

  return out.sort();
}*/

/*function generateImports() {
  let str = "// auto-generated\n";

  for (const path of getPaths()) {
    str += `import "./mappings/${path}";\n`;
  }

  if (write) {
    fs.writeFileSync("src/modules.ts", str);
  } else {
    console.log(str);
  }
}*/

function generateTypes() {
  const paths = Object.keys(mappedTypes).sort();
  let str = "// auto-generated\n";

  for (const path of paths) {
    const type = mappedTypes[path];
    //?? path.substring(path.lastIndexOf("/") + 1).replace(".css", "CSS");
    str += `import ${type} from "./mappings/${path}";\n`;
  }

  str += "\n";

  str += "export type MappedModules = {\n";
  for (const path of paths) {
    const type = mappedTypes[path];
    //?? path.substring(path.lastIndexOf("/") + 1).replace(".css", "CSS");
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

  for (const path of Object.keys(mappedTypes).sort()) {
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
  // "do not use the imports argument that's for when we finish every type (imports file loads every single module to register them, right now it'd only register the ones with types and break 90% of it)"
  // "it should probably just be removed tbh, since we aren't gonna type every module"
  /*case "imports":
    generateImports();
    break;*/

  case "types":
    generateTypes();
    break;

  case "declares":
    generateDeclares(process.argv[3]);
    break;

  default:
    console.error(`Usage: node generate.js <types|declares>`);
    break;
}
