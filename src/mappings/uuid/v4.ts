import register from "../../registry";

register((moonmap) => {
  const name = "uuid/v4";
  moonmap.register({
    name,
    find: ".randomUUID();",
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
