import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../../registry";

register((moonmap) => {
  const name = "discord/uikit/search/SearchBar";
  moonmap.register({
    name,
    find: ["hasContent:", "inputProps:"],
    process({ id }) {
      moonmap.addModule(id, name);

      moonmap.addExport(name, "default", {
        type: ModuleExportType.Key,
        find: "defaultProps"
      });

      return true;
    }
  });
});
