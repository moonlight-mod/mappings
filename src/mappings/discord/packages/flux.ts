import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../registry";

register((moonmap) => {
  const name = "discord/packages/flux";
  moonmap.register({
    name,
    find: ",DeviceSettingsStore:",
    process({ id }) {
      moonmap.addModule(id, name);

      moonmap.addExport(name, "BatchedStoreListener", {
        type: ModuleExportType.Function,
        find: '" stores before error."'
      });
      moonmap.addExport(name, "Dispatcher", {
        type: ModuleExportType.Function,
        find: ".isDispatching="
      });
      moonmap.addExport(name, "Store", {
        type: ModuleExportType.Key,
        find: "getAll"
      });
      moonmap.addExport(name, "default", {
        type: ModuleExportType.Key,
        find: "Store"
      });
      moonmap.addExport(name, "statesWillNeverBeEqual", {
        type: ModuleExportType.Function,
        find: "{return!1}"
      });
      moonmap.addExport(name, "useStateFromStores", {
        type: ModuleExportType.Function,
        find: '.attach("useStateFromStores")'
      });
      moonmap.addExport(name, "useStateFromStoresArray", {
        type: ModuleExportType.Function,
        find: /return (.)\((.),(.),(.),(.)\.([^Z])\)/
      });
      moonmap.addExport(name, "useStateFromStoresObject", {
        type: ModuleExportType.Function,
        find: /return (.)\((.),(.),(.),(.)\.Z\)/
      });

      return true;
    }
  });
});
