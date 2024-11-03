import register from "../../registry";

register((moonmap) => {
  const name = "discord/intl";
  moonmap.register({
    name,
    find: ["formatToPlainString:"],
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
