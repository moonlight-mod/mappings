// auto-generated
import _Dispatcher from "./mappings/discord/Dispatcher";
import Components from "./mappings/discord/components/common/index";
import IntegrationCardCSS from "./mappings/discord/modules/guild_settings/IntegrationCard.css";
import MarkupUtils from "./mappings/discord/modules/markup/MarkupUtils";
import Flux from "./mappings/discord/packages/flux";
import Flex from "./mappings/discord/uikit/Flex";
import React from "./mappings/react";

export type MappedModules = {
  "discord/Dispatcher": _Dispatcher;
  "discord/components/common/index": Components;
  "discord/modules/guild_settings/IntegrationCard.css": IntegrationCardCSS;
  "discord/modules/markup/MarkupUtils": MarkupUtils;
  "discord/packages/flux": Flux;
  "discord/uikit/Flex": Flex;
  "react": React;
};

export declare function WebpackRequire<T extends keyof MappedModules>(
  module: T
): MappedModules[T];
