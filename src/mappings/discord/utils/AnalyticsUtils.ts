import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../registry";

register((moonmap) => {
  const name = "discord/utils/AnalyticsUtils";
  moonmap.register({
    name,
    find: "encodeProperties:",
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
