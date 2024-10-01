import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../registry";

register((moonmap) => {
  const name = "discord/uikit/Flex";
  moonmap.register({
    name,
    find: ".flexChild,style",
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
