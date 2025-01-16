import register from "../../../../../registry";

export type SortMenuCSS = {
  container: string;
  clearText: string;
};

register((moonmap) => {
  const name = "discord/modules/forums/web/SortMenu.css";
  moonmap.register({
    name,
    find: ["container:", "clearText:"],
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});

export default SortMenuCSS;
