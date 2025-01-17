import register from "../../../../../registry";

type Exports = {
  container: string;
  clearText: string;
};
export default Exports;

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
