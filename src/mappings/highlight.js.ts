import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../registry";

register((moonmap) => {
  const name = "highlight.js";
  moonmap.register({
    name,
    find: '.registerLanguage("1c",',
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
