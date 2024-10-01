import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../../../registry";

register((moonmap) => {
  const name = "discord/modules/guild_settings/web/AppCardItem.css";
  moonmap.register({
    name,
    find: ["statusContainer:", "identifier:"],
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
