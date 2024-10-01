import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../../registry";

register((moonmap) => {
  const name = "discord/styles/shared/Margins.css";
  moonmap.register({
    name,
    find: "marginCenterHorz:",
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
