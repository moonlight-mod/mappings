import register from "../../../../../registry";

type OpenUserSettings = {
  open: (section: string, index?: number, unk?: any) => void;
};

type Exports = {
  default: OpenUserSettings;
};
export default Exports;

register((moonmap) => {
  const name = "discord/modules/user_settings/web/openUserSettings";
  moonmap.register({
    name,
    find: 'dispatch({type:"USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION"',
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
