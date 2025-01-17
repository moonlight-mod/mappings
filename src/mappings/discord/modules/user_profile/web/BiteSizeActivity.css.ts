import register from "../../../../../registry";

type Exports = {
  header: string;
  headerTag: string;
  body: string;
  footer: string;
  backdrop: string;
  toast: string;
  activity: string;
  upsell: string;
};
export default Exports;

register((moonmap) => {
  const name = "discord/modules/user_profile/web/BiteSizeActivity.css";
  moonmap.register({
    name,
    find: ["activity:", "headerTag:"],
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
