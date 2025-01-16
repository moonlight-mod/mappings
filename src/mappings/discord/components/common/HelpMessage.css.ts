import register from "../../../../registry";

type HelpMessageCSS = {
  container: string;
  icon: string;
  iconDiv: string;
  text: string;
  positive: string;
  warning: string;
  info: string;
  error: string;
};

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

export default HelpMessageCSS;
