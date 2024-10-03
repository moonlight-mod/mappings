import register from "../../../../registry";

export type IntegrationCardCSS = {
  card: string;
  cardHeader: string;
};

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

export default IntegrationCardCSS;
