import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../../registry";

register((moonmap) => {
  const name = "discord/modules/markup/MarkupUtils";
  moonmap.register({
    name,
    find: "parseEmbedTitle:",
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
