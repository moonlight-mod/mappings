import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../registry";

register((moonmap) => {
  const name = "discord/uikit/ListSectionItem";
  moonmap.register({
    name,
    find: ["let{className:", '.container),"aria-label":'],
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
