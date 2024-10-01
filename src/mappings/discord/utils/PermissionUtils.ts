import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../registry";

register((moonmap) => {
  const name = "discord/utils/PermissionUtils";
  moonmap.register({
    name,
    find: ".computeLurkerPermissionsAllowList())&&void 0",
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
