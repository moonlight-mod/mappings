import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../../registry";

register((moonmap) => {
  const name = "discord/lib/web/Storage";
  moonmap.register({
    name,
    find: "=window.localStorage}catch",
    process({ id }) {
      moonmap.addModule(id, name);

      moonmap.addExport(name, "ObjectStorage", {
        type: ModuleExportType.Function,
        find: "this.storage.hasOwnProperty"
      });
      moonmap.addExport(name, "impl", {
        type: ModuleExportType.Key,
        find: "asyncGetRaw"
      });

      return true;
    }
  });
});
