import register from "../../../../registry";
import { ModuleExportType } from "@moonlight-mod/moonmap";

export type CardTypes = {
  PRIMARY: string;
  DANGER: string;
  WARNING: string;
  SUCCESS: string;
  BRAND: string;
  CUSTOM: string;
};

export type Card = React.ComponentType<
  React.PropsWithChildren<{
    editable?: boolean;
    outline?: boolean;
    type?: string;
    className?: string;
  }> &
    React.HTMLAttributes<HTMLDivElement>
> & {
  Types: CardTypes;
};

type Exports = {
  default: Card;
  Types: CardTypes;
};
export default Exports;

register((moonmap) => {
  const name = "discord/components/common/Card";
  moonmap.register({
    name,
    find: ".editable),",
    process({ id }) {
      moonmap.addModule(id, name);

      moonmap.addExport(name, "Types", {
        type: ModuleExportType.Key,
        find: "CUSTOM"
      });

      return true;
    }
  });
});
