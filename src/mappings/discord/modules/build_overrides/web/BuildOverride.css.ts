import register from "../../../../../registry";

type Exports = {
  wrapper: string;
  titleRegion: string;
  title: string;
  infoIcon: string;
  copyLink: string;
  copied: string;
  copyLinkIcon: string;
  content: string;
  infoLink: string;
  buildInfo: string;
  button: string;
  buttonSize: string;
  subHead: string;
  icon: string;
  buildDetails: string;
  barLoader: string;
  barTitle: string;
  buttonLoader: string;
  disabledButtonOverride: string;
};
export default Exports;

register((moonmap) => {
  const name = "discord/modules/build_overrides/web/BuildOverride.css";
  moonmap.register({
    name,
    find: ["disabledButtonOverride:", "buttonLoader:"],
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
