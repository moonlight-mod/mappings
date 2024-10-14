// auto-generated
import _Dispatcher from "./mappings/discord/Dispatcher";
import ContextMenuActionCreators from "./mappings/discord/actions/ContextMenuActionCreators";
import Components from "./mappings/discord/components/common/index";
import IntegrationCardCSS from "./mappings/discord/modules/guild_settings/IntegrationCard.css";
import MarkupUtils from "./mappings/discord/modules/markup/MarkupUtils";
import OpenUserSettings from "./mappings/discord/modules/user_settings/web/openUserSettings";
import Flux from "./mappings/discord/packages/flux";
import Flex from "./mappings/discord/uikit/Flex";
import ClipboardUtils from "./mappings/discord/utils/ClipboardUtils";
import HTTPUtils from "./mappings/discord/utils/HTTPUtils";
import NativeUtils from "./mappings/discord/utils/NativeUtils";
import React from "./mappings/react";

export type MappedModules = {
  "discord/Dispatcher": _Dispatcher;
  "discord/actions/ContextMenuActionCreators": ContextMenuActionCreators;
  "discord/components/common/index": Components;
  "discord/modules/guild_settings/IntegrationCard.css": IntegrationCardCSS;
  "discord/modules/markup/MarkupUtils": MarkupUtils;
  "discord/modules/user_settings/web/openUserSettings": OpenUserSettings;
  "discord/packages/flux": Flux;
  "discord/uikit/Flex": Flex;
  "discord/utils/ClipboardUtils": ClipboardUtils;
  "discord/utils/HTTPUtils": HTTPUtils;
  "discord/utils/NativeUtils": NativeUtils;
  "react": React;
};

export declare function WebpackRequire<T extends keyof MappedModules>(
  module: T
): MappedModules[T];
