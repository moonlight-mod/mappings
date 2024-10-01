import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../registry";

register((moonmap) => {
  const name = "lodash";
  moonmap.register({
    name,
    find: '"__lodash_hash_undefined__"',
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
