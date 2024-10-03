import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../../../registry";

// Lazy loaded by Integrations tab in server settings
register((moonmap) => {
  const name = "discord/modules/guild_settings/web/SearchSection.css";
  moonmap.register({
    name,
    find: ["removeButtonContainer:", "removeButtonDisabled:"],
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
