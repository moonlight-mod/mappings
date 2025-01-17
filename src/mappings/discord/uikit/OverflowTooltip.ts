import register from "../../../registry";

register((moonmap) => {
  const name = "discord/uikit/OverflowTooltip";
  moonmap.register({
    name,
    find: [".overflow),", ".Tooltip,{"],
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
