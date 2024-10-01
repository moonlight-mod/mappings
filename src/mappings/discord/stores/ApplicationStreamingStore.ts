import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../registry";

register((moonmap) => {
  const name = "discord/stores/ApplicationStreamingStore";
  moonmap.register({
    name,
    find: '"ApplicationStreamingStore"',
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
