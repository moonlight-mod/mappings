import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../registry";

register((moonmap) => {
  const name = "discord/Constants";
  moonmap.register({
    name,
    find: "/developers/docs/intro",
    process({ id }) {
      moonmap.addModule(id, name);

      moonmap.addExport(name, "ActivityFlags", {
        type: ModuleExportType.Key,
        find: "PARTY_PRIVACY_VOICE_CHANNEL"
      });
      moonmap.addExport(name, "ActivityTypes", {
        type: ModuleExportType.Key,
        find: "CUSTOM_STATUS"
      });
      moonmap.addExport(name, "AnalyticsLocations", {
        type: ModuleExportType.Key,
        find: "APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL"
      });
      moonmap.addExport(name, "ChannelLayouts", {
        type: ModuleExportType.Key,
        find: "NO_CHAT"
      });
      moonmap.addExport(name, "ChannelModes", {
        type: ModuleExportType.KeyValuePair,
        key: "VOICE",
        value: "voice"
      });
      moonmap.addExport(name, "ChannelStreamTypes", {
        type: ModuleExportType.Key,
        find: "FORUM_POST_ACTION_BAR"
      });
      moonmap.addExport(name, "ChannelTypes", {
        type: ModuleExportType.Key,
        find: "ANNOUNCEMENT_THREAD"
      });
      moonmap.addExport(name, "ComponentActions", {
        type: ModuleExportType.Key,
        find: "IFRAME_MOUNT"
      });
      moonmap.addExport(name, "DEFAULT_ROLE_COLOR", {
        type: ModuleExportType.Value,
        find: 10070709
      });
      moonmap.addExport(name, "Endpoints", {
        type: ModuleExportType.Value,
        find: "/channels"
      });
      moonmap.addExport(name, "MessageFlags", {
        type: ModuleExportType.Key,
        find: "CROSSPOSTED"
      });
      moonmap.addExport(name, "MessageTypes", {
        type: ModuleExportType.Key,
        find: "THREAD_STARTER_MESSAGE"
      });
      moonmap.addExport(name, "Permissions", {
        type: ModuleExportType.Key,
        find: "MANAGE_MESSAGES"
      });
      moonmap.addExport(name, "PlatformTypes", {
        type: ModuleExportType.Key,
        find: "LEAGUE_OF_LEGENDS"
      });
      moonmap.addExport(name, "RelationshipTypes", {
        type: ModuleExportType.Key,
        find: "BLOCKED"
      });
      moonmap.addExport(name, "Routes", {
        type: ModuleExportType.Key,
        find: "APPLICATION_LIBRARY_INVENTORY"
      });
      moonmap.addExport(name, "StatusTypes", {
        type: ModuleExportType.Key,
        find: "DND"
      });
      moonmap.addExport(name, "Themes", {
        type: ModuleExportType.KeyValuePair,
        key: "DARK",
        value: "dark"
      });
      moonmap.addExport(name, "UserSettingsSections", {
        type: ModuleExportType.Key,
        find: "CHANGE_LOG"
      });

      return true;
    }
  });
});
