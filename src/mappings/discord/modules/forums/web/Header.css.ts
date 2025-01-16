import register from "../../../../../registry";

export type HeaderCSS = {
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

export default HeaderCSS;
