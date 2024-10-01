import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../registry";

register((moonmap) => {
  const name = "discord/utils/ClipboardUtils";
  moonmap.register({
    name,
    find: 'document.queryCommandEnabled("copy")',
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
