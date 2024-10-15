import register from "../../registry";

register((moonmap) => {
  const name = "discord/i18n";
  moonmap.register({
    name,
    find: ["getMessages:", "getLanguages:", "initialLocale", "document.cookie"],
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
