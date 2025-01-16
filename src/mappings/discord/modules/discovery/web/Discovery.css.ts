import register from "../../../../../registry";

type Exports = {
  header: string;
  headerImage: string;
  headerImageSimple: string;
  headerImageBG: string;
  searchTitle: string;
  searchSubtitle: string;
  headerContentWrapper: string;
  headerContent: string;
  headerContentSmall: string;
  searchBox: string;
  searchBoxInput: string;
  closeIcon: string;
  searchIcon: string;
  tabBar: string;
  tabBarItem: string;
  sectionHeader: string;
};
export default Exports;

register((moonmap) => {
  const name = "discord/modules/discovery/web/Discovery.css";
  moonmap.register({
    name,
    find: ["tabBar:", "tabBarItem:", "headerContentWrapper:"],
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
