import register from "../../../registry";

register((moonmap) => {
  const name = "discord/uikit/OverflowTooltip";
  moonmap.register({
    name,
    find: ".overflow),ref:",
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
