import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../registry";

type ContextMenuActionCreators = {
  closeContextMenu: () => void;
  // TODO: these have some extra args
  openContextMenu: (event: Event, element: () => React.ReactNode) => void;
  openContextMenuLazy: Function;
};

register((moonmap) => {
  const name = "discord/actions/ContextMenuActionCreators";
  moonmap.register({
    name,
    find: '.dispatch({type:"CONTEXT_MENU_OPEN"',
    process({ id }) {
      moonmap.addModule(id, name);

      moonmap.addExport(name, "closeContextMenu", {
        type: ModuleExportType.Function,
        find: '"CONTEXT_MENU_CLOSE"'
      });
      moonmap.addExport(name, "openContextMenu", {
        type: ModuleExportType.Function,
        find: ".stopPropagation()"
      });
      moonmap.addExport(name, "openContextMenuLazy", {
        type: ModuleExportType.Function,
        find: /.\(.,void 0,.,.\)/
      });

      return true;
    }
  });
});

export default ContextMenuActionCreators;
