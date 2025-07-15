import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../../registry";

register((moonmap) => {
  const name = "discord/uikit/search/SearchBar";
  moonmap.register({
    name,
    find: ["hideSearchIcon"],
    process({ id }) {
      moonmap.addModule(id, name);

      moonmap.addExport(name, "default", {
        type: ModuleExportType.Key,
        find: "defaultProps"
      });

      moonmap.addExport(name, "SearchIcon", {
        type: ModuleExportType.Function,
        find: ".iconContainer,"
      });

      return true;
    }
  });
});
