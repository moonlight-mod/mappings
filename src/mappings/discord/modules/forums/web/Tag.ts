import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../../../registry";
import type { ComponentType } from "react";

export type Tag = {
  id: string;
  name: string;
  emojiId?: string; // Snowflake
  emojiName?: string;
};

export enum TagSize {
  SMALL,
  MEDIUM
}

export type TagProps = {
  tag: Tag;
  size?: TagSize;
  disabled?: boolean;
  className?: string;
  onClick?: (event: MouseEvent) => void;
  onRemove?: (tag: Tag) => void;
  selected?: boolean;
  ariaLabel?: string;
};

register((moonmap) => {
  const name = "discord/modules/forums/web/Tag";
  moonmap.register({
    name,
    find: ['"forum-tag-"'],
    process({ id }) {
      moonmap.addModule(id, name);

      moonmap.addExport(name, "TagBar", {
        type: ModuleExportType.Function,
        find: "let{tags:"
      });

      return true;
    }
  });
});

type TagComponent = ComponentType<TagProps> & { Sizes: TagSize };
export default TagComponent;
