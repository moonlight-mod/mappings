import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../../../registry";

register((moonmap) => {
  const name = "discord/modules/messages/web/Markup.css";
  moonmap.register({
    name,
    find: ["markup:", "timestampTooltip:"],
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
