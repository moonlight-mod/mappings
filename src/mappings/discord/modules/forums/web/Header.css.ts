import register from "../../../../../registry";

type Exports = {
  container: string;
  header: string;
  headerLeft: string;
  headerText: string;
  countContainer: string;
  countText: string;
  tagContainer: string;
  tag: string;
  clear: string;
  row: string;
  separator: string;
};
export default Exports;

register((moonmap) => {
  const name = "discord/modules/forums/web/Header.css";
  moonmap.register({
    name,
    find: ["countContainer:", "tagContainer:"],
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
