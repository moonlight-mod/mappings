import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../registry";

register((moonmap) => {
  const name = "highlight.js/lib/core";
  moonmap.register({
    name,
    find: "Language definition for '{}' could not be registered.",
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
