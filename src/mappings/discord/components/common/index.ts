import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../../registry";

register((moonmap) => {
  const name = "discord/components/common/index";
  moonmap.register({
    name,
    find: "MasonryList:function",
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
