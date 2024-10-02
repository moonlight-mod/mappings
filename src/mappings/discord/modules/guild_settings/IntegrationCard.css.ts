import register from "../../../../registry";

export type IntegrationCardCSS = {
  card: string;
  cardHeader: string;
};

register((moonmap) => {
  const name = "discord/modules/guild_settings/IntegrationCard.css";
  moonmap.register({
    name,
    find: [
      "renderArtisanalHack",
      /\[(?:.\.e\("\d+?"\),?)+\][^}]+?webpackId:\d+,name:"ChannelSettings"/,
      /webpackId:(\d+),name:"ChannelSettings"/
    ],
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});

export default IntegrationCardCSS;
