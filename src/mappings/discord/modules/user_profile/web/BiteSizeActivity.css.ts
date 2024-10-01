import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../../../registry";

register((moonmap) => {
  const name = "discord/modules/user_profile/web/BiteSizeActivity.css";
  moonmap.register({
    name,
    find: ["activity:", "headerTag:"],
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
