// auto-generated
import _Dispatcher from "./mappings/discord/Dispatcher";
import Components from "./mappings/discord/components/common/index";
import Flux from "./mappings/discord/packages/flux";
import React from "./mappings/discord/packages/react";

export type MappedModules = {
  "discord/Dispatcher": _Dispatcher;
  "discord/components/common/index": Components;
  "discord/packages/flux": Flux;
  "discord/packages/react": React;
};

export declare function WebpackRequire<T extends keyof MappedModules>(
  module: T
): MappedModules[T];
