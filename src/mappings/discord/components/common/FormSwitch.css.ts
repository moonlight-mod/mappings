import register from "../../../../registry";

type FormSwitchCSS = {
  container: string;
  labelRow: string;
  control: string;
  disabled: string;
  title: string;
  note: string;
  disabledText: string;
  dividerDefault: string;
};

register((moonmap) => {
  const name = "discord/components/common/FormSwitch.css";
  moonmap.register({
    name,
    find: "dividerDefault:",
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});

export default FormSwitchCSS;
