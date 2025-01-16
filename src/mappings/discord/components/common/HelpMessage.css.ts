import register from "../../../../registry";

type Exports = {
  container: string;
  icon: string;
  iconDiv: string;
  text: string;
  positive: string;
  warning: string;
  info: string;
  error: string;
};
export default Exports;

register((moonmap) => {
  const name = "discord/components/common/HelpMessage.css";
  moonmap.register({
    name,
    find: ["positive:", "iconDiv:"],
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
