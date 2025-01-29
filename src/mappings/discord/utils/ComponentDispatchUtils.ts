import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../registry";

register((moonmap) => {
  const name = "discord/utils/ComponentDispatchUtils";
  moonmap.register({
    name,
    find: "ComponentDispatchUtils",
    process({ id }) {
      moonmap.addModule(id, name);

      moonmap.addExport("discord/utils/ComponentDispatchUtils", "ComponentDispatcher", {
        type: ModuleExportType.Key,
        find: "emitter"
      });
      moonmap.addExport("discord/utils/ComponentDispatchUtils", "ComponentDispatch", {
        type: ModuleExportType.Function,
        find: "emitter"
      });

      return true;
    }
  });
});
