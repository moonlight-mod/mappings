import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../../registry";
import { ReactElement } from "react";

export type MarkupUtils = {
  parse: (text: string) => ReactElement;
};

export type MarkupUtilsExports = {
  MarkupUtils: MarkupUtils;
};

register((moonmap) => {
  const name = "discord/modules/markup/MarkupUtils";
  moonmap.register({
    name,
    find: "parseEmbedTitle:",
    process({ id }) {
      moonmap.addModule(id, name);

      moonmap.addExport(name, "MarkupUtils", {
        type: ModuleExportType.Constant,
        find: "Z"
      });

      return true;
    }
  });
});

export default MarkupUtilsExports;
