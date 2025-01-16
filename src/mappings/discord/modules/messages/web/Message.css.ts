import register from "../../../../../registry";

register((moonmap) => {
  const name = "discord/modules/messages/web/Message.css";
  moonmap.register({
    name,
    find: ["messageContent:", "edited:"],
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
