import register from "../../../../registry";

register((moonmap) => {
  const name = "discord/uikit/legacy/LegacyText";
  moonmap.register({
    name,
    find: ".colorInteractiveNormal,ALWAYS_WHITE",
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
