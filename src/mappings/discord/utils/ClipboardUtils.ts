import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../registry";

type Exports = {
  SUPPORTS_COPY: boolean;
  copy: (text: string) => boolean;
};
export default Exports;

register((moonmap, lunast) => {
  const name = "discord/utils/ClipboardUtils";
  const find = 'document.queryCommandEnabled("copy")';

  lunast.register({
    name,
    find,
    process({ id, ast }) {
      moonmap.addModule(id, name);

      const { getPropertyGetters, is } = lunast.utils;
      const propertyGetters = getPropertyGetters(ast);

      for (const [exportName, binding] of Object.entries(propertyGetters)) {
        if (!is.identifier(binding.expression)) continue;
        const definition = binding.scope.getOwnBinding(binding.expression.name);

        if (definition?.path.type === "FunctionDeclaration") {
          moonmap.addExport(name, "copy", {
            type: ModuleExportType.Constant,
            find: exportName
          });
        } else {
          moonmap.addExport(name, "SUPPORTS_COPY", {
            type: ModuleExportType.Constant,
            find: exportName
          });
        }
      }

      return true;
    }
  });
});
