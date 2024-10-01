import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../../../registry";

register((moonmap) => {
  const name = "discord/modules/messages/web/TimestampTooltip";
  moonmap.register({
    name,
    find: ".Messages.MESSAGE_EDITED_TIMESTAMP_A11Y_LABEL",
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
