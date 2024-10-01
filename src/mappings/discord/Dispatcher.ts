import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../registry";

register((moonmap) => {
  const name = "discord/Dispatcher";
  moonmap.register({
    name,
    find: '.Early=0]="Early",',
    process({ id }) {
      moonmap.addModule(id, name);

      return true;
    }
  });
});
