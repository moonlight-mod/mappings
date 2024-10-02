import register from "../../../../registry";
import { ReactElement } from "react";

export type MarkupUtils = {
  parse: (text: string) => ReactElement;
};

register((moonmap) => {
  const name = "discord/modules/markup/MarkupUtils";
  moonmap.register({
    name,
    find: "parseEmbedTitle:",
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});

export default MarkupUtils;
