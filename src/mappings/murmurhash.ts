import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../registry";

register((moonmap) => {
  const name = "murmurhash";
  moonmap.register({
    name,
    find: ".murmur;",
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
