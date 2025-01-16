import register from "../../../../../registry";

register((moonmap) => {
  const name = "discord/modules/guild_settings/web/AppCard.css";
  moonmap.register({
    name,
    find: ["cardHeader:", "inModal:"],
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
