import register from "../registry";

register((moonmap) => {
  const name = "chroma-js";
  moonmap.register({
    name,
    find: '"unknown hex color: "',
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
