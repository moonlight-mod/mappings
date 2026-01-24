import register from "../../../../../registry";
import { mapCssExport } from "../../../../../utils";

type Exports = {
  container: string;
  clearText: string;
};
export default Exports;

register((moonmap) => {
  const name = "discord/modules/forums/web/SortMenu.css";
  moonmap.register({
    name,
    find: ['"container_', '"clearText_'],
    process({ id }) {
      moonmap.addModule(id, name);

      mapCssExport(moonmap, name, "container");
      mapCssExport(moonmap, name, "clearText");

      return true;
    }
  });
});
