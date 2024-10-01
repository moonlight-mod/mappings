import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../../registry";

register((moonmap) => {
  const name = "discord/modules/replies/PendingReplyStore";
  moonmap.register({
    name,
    find: '"PendingReplyStore"',
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
