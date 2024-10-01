import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../../../registry";

register((moonmap) => {
  const name = "discord/modules/user_profile/web/PastActivityExperiment";
  moonmap.register({
    name,
    find: '"2024-07_user_profile_past_activity"',
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
