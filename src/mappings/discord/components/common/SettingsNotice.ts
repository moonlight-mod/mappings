import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../../registry";

register((moonmap) => {
  const name = "discord/components/common/SettingsNotice";
  moonmap.register({
    name,
    find: ["onSaveButtonColor", ".Messages.SAVE_CHANGES"],
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
