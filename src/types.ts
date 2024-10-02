// auto-generated
import _Dispatcher from "./mappings/discord/Dispatcher";
import Components from "./mappings/discord/components/common/index";
import IntegrationCardCSS from "./mappings/discord/modules/guild_settings/IntegrationCard.css";
import MarkupUtils from "./mappings/discord/modules/markup/MarkupUtils";
import Flux from "./mappings/discord/packages/flux";
import React from "./mappings/discord/packages/react";
import Flex from "./mappings/discord/uikit/Flex";

export type MappedModules = {
  "discord/Dispatcher": _Dispatcher;
  "discord/components/common/index": Components;
  "discord/modules/guild_settings/IntegrationCard.css": IntegrationCardCSS;
  "discord/modules/markup/MarkupUtils": MarkupUtils;
  "discord/packages/flux": Flux;
  "discord/packages/react": React;
  "discord/uikit/Flex": Flex;
};

export declare function WebpackRequire<T extends keyof MappedModules>(
  module: T
): MappedModules[T];
