import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../registry";

register((moonmap) => {
  const name = "discord/i18n";
  moonmap.register({
    name,
    find: ["getMessages:", "getLanguages:", ".getLocale()"],
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
