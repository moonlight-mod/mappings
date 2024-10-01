import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../../registry";

register((moonmap) => {
  const name = "discord/components/common/NoResults";
  moonmap.register({
    name,
    find: ".sadImage,",
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
