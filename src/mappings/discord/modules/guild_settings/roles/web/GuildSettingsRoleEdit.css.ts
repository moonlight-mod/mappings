import register from "../../../../../../registry";

type GuildSettingsRoleEditCSS = {
  addButton: string;
  container: string;
  emptyRowContainer: string;
  emptyRowText: string;
  headerContainer: string;
  list: string;
  memberDetails: string;
  memberRow: string;
  removeButton: string;
  removeButtonContainer: string;
  removeButtonDisabled: string;
  removeTip: string;
  searchContainer: string;
  searchWarning: string;
};

register((moonmap) => {
  const name =
    "discord/modules/guild_settings/roles/web/GuildSettingsRoleEdit.css";
  moonmap.register({
    name,
    find: "removeButtonContainer:",
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});

export default GuildSettingsRoleEditCSS;
