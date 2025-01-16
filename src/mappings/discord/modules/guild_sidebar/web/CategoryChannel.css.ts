import register from "../../../../../registry";

register((moonmap) => {
  const name = "discord/modules/guild_sidebar/web/CategoryChannel.css";
  moonmap.register({
    name,
    find: "voiceChannelsToggleIcon:",
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
