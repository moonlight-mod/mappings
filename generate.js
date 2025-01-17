const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

const mappedTypes = {
  "discord/actions/ContextMenuActionCreators": "ContextMenuActionCreators",
  "discord/actions/UserSettingsModalActionCreators":
    "UserSettingsModalActionCreators",
  "discord/components/common/Alerts": "Alerts",
  "discord/components/common/BaseHeaderBar": "BaseHeaderBar",
  "discord/components/common/FileUpload": "FileUpload",
  "discord/components/common/FormSwitch.css": "FormSwitchCSS",
  "discord/components/common/HeaderBar.css": "HeaderBarCSS",
  "discord/components/common/HelpMessage.css": "HelpMessageCSS",
  "discord/components/common/index": "Components",
  "discord/components/common/PanelButton": "PanelButton",
  "discord/components/common/Scroller.css": "ScrollerCSS",
  "discord/components/modals/ConfirmModal": "ConfirmModal",
  "discord/Constants": "Constants",
  "discord/Dispatcher": "_Dispatcher", // "Dispatcher" may be reserved in some scenarios
  "discord/lib/BaseRecord": "BaseRecord",
  "discord/lib/web/Storage": "Storage",
  "discord/modules/build_overrides/web/BuildOverride.css": "BuildOverrideCSS",
  "discord/modules/discovery/web/Discovery.css": "DiscoveryCSS",
  "discord/modules/forums/web/Forums.css": "ForumsCSS",
  "discord/modules/forums/web/Header.css": "ForumHeaderCSS",
  "discord/modules/forums/web/SortMenu.css": "ForumSortMenuCSS",
  "discord/modules/forums/web/Tag": "ForumTag",
  "discord/modules/guild_settings/IntegrationCard.css": "IntegrationCardCSS",
  "discord/modules/guild_settings/roles/web/GuildSettingsRoleEdit.css":
    "GuildSettingsRoleEditCSS",
  "discord/modules/guild_settings/web/AppCard.css": "AppCardCSS",
  "discord/modules/guild_settings/web/AppCardItem.css": "AppCardItemCSS",
  "discord/modules/guild_settings/web/SearchSection.css":
    "GuildSettingsSearchSectionCSS",
  "discord/modules/markup/MarkupUtils": "MarkupUtils",
  "discord/modules/menus/web/Menu": "Menu",
  "discord/modules/oauth2/index": "Oauth2",
  "discord/modules/messages/web/Markup.css": "MarkupCSS",
  "discord/modules/messages/web/Message.css": "MessageCSS",
  "discord/modules/people/web/PeoplePage.css": "PeoplePageCSS",
  "discord/modules/user_profile/web/BiteSizeActivity.css":
    "ByteSizeActivityCSS",
  "discord/packages/flux": "Flux",
  "discord/utils/ClipboardUtils": "ClipboardUtils",
  "discord/utils/HTTPUtils": "HTTPUtils",
  "discord/utils/NativeUtils": "NativeUtils",
  "discord/styles/shared/Margins.css": "MarginsCSS",
  "discord/uikit/Flex": "Flex",
  "chroma-js": "ChromaJS",
  "dependency-graph": "DependencyGraph",
  "highlight.js": "HighlightJS",
  "highlight.js/lib/core": "HighlightJSCore",
  lodash: "lodash",
  murmurhash: "murmurhash",
  "platform.js": "PlatformJS",
  react: "React",
  "uuid/v4": "UUID"
};

const write = process.argv.includes("--write");

function getPaths() {
  const paths = fs.readdirSync("src/mappings", { recursive: true });
  const out = [];

  for (const filePath of paths) {
    if (!filePath.endsWith(".ts")) continue;
    if (path.basename(filePath).startsWith("_")) continue;
    out.push(filePath.replace(".ts", "").replaceAll("\\", "/"));
  }

  return out.sort();
}

function generateImports() {
  let str = "// auto-generated\n";

  for (const path of getPaths()) {
    str += `import "./mappings/${path}";\n`;
  }

  if (write) {
    fs.writeFileSync("src/modules.ts", str);
  } else {
    console.log(str);
  }
}

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

    let sourcePath = "./src/mappings/" + path + ".ts";
    if (!fs.existsSync(sourcePath))
      sourcePath = "./src/mappings/" + path + "/index.ts";
    const program = ts.createProgram([sourcePath], {
      target: ts.ScriptTarget.ES2022,
      module: ts.ScriptTarget.ES2022,
      noEmit: true
    });
    const source = program.getSourceFile(sourcePath);
    const typeChecker = program.getTypeChecker();
    const alias = source.statements.find(
      (s) =>
        ts.isTypeAliasDeclaration(s) && s.name.getText(source) === "Exports"
    );
    const type = typeChecker.getTypeAtLocation(alias);
    const properties = type.getProperties().map((p) => p.getName());

    if (properties.some((s) => s === "__mappings_exportEquals")) {
      str += `  const _: Omit<MappedModules["${path}"], "__mappings_exportEquals">;\n`;
      str += `  export = _;\n`;
    } else {
      for (const name of properties) {
        if (name === "default") {
          str += `  const _default: MappedModules["${path}"]["default"];\n`;
          str += `  export default _default;\n`;
        } else {
          // :(
          if (name.includes("-")) continue;

          str += `  export const ${name}: MappedModules["${path}"]["${name}"];\n`;
        }
      }
    }

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
