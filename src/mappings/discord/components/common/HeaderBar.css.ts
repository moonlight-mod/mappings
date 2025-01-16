import register from "../../../../registry";

type Exports = {
  caret: string;
  children: string;
  clickable: string;
  container: string;
  divider: string;
  dot: string;
  hamburger: string;
  icon: string;
  iconBadge: string;
  iconBadgeBottom: string;
  iconBadgeTop: string;
  iconWrapper: string;
  scrollable: string;
  selected: string;
  themed: string;
  themedMobile: string;
  title: string;
  titleWrapper: string;
  toolbar: string;
  transparent: string;
  upperContainer: string;
};
export default Exports;

register((moonmap) => {
  const name = "discord/components/common/HeaderBar.css";
  moonmap.register({
    name,
    find: "hamburger:",
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
