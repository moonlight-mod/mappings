import register from "../../../../registry";

type Exports = {
  card: string;
  cardHeader: string;
};
export default Exports;

register((moonmap) => {
  const name = "discord/modules/guild_settings/IntegrationCard.css";
  moonmap.register({
    name,
    find: ["card:", "cardHeader:", "inModal:"],
    lazy: {
      find: "renderArtisanalHack",
      chunk: /\[(?:.\.e\("\d+?"\),?)+\][^}]+?webpackId:\d+,name:"GuildSettings"/
    },
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
