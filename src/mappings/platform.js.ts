import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../registry";

register((moonmap) => {
  const name = "platform.js";
  moonmap.register({
    name,
    find: '"ScriptBridgingProxyObject"',
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
