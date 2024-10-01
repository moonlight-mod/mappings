import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../registry";

register((moonmap) => {
  const name = "discord/utils/HTTPUtils";
  moonmap.register({
    name,
    find: '.set("X-Audit-Log-Reason",',
    process({ id }) {
      moonmap.addModule(id, name);

      moonmap.addExport(name, "HTTP", {
        type: ModuleExportType.Key,
        find: "patch"
      });

      return true;
    }
  });
});
