import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../../registry";

register((moonmap) => {
  const name = "discord/modules/user_settings/UserSettings";
  moonmap.register({
    name,
    find: '"textAndImages","messageDisplayCompact"',
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
