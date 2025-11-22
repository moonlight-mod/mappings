import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../../../registry";

export enum ItemType {
  ROOT,
  SECTION,
  SIDEBAR_ITEM,
  PANEL,
  PANE,
  SPLIT,
  CATEGORY,
  ACCORDION,
  LIST,
  FIELD_SET,
  STATIC,
  BUTTON,
  TOGGLE,
  SLIDER,
  SELECT,
  RADIO,
  CHECKBOX,
  NAVIGATOR,
  CUSTOM
}

export enum TrailingType {
  POPOVER,
  BADGE_NEW,
  BADGE_COUNT,
  STRONGLY_DISCOURAGED_CUSTOM
}

export enum NoticeType {
  INLINE_NOTICE,
  STRONGLY_DISCOURAGED_CUSTOM
}

type Exports = {
  ItemType: ItemType;
  TrailingType: TrailingType;
  NoticeType: NoticeType;
  hasLayout: (item: any) => boolean;
};
export default Exports;

register((moonmap, lunast) => {
  const name = "discord/modules/user_settings/redesign/SettingsItemConstants";

  lunast.register({
    name,
    find: '"STRONGLY_DISCOURAGED_CUSTOM"',
    process({ id, ast }) {
      moonmap.addModule(id, name);

      moonmap.addExport(name, "ItemType", {
        type: ModuleExportType.Key,
        find: "ROOT"
      });
      moonmap.addExport(name, "TrailingType", {
        type: ModuleExportType.Key,
        find: "BADGE_NEW"
      });
      moonmap.addExport(name, "NoticeType", {
        type: ModuleExportType.Key,
        find: "INLINE_NOTICE"
      });
      moonmap.addExport(name, "hasLayout", {
        type: ModuleExportType.Function,
        find: '"layout"'
      });

      return true;
    }
  });
});
