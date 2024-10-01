// auto-generated
import _Dispatcher from "./mappings/discord/Dispatcher";
import Flux from "./mappings/discord/packages/flux";
import React from "./mappings/discord/packages/react";

export type MappedModules = {
  "discord/Dispatcher": _Dispatcher;
  "discord/packages/flux": Flux;
  "discord/packages/react": React;
};

export declare function WebpackRequire<T extends keyof MappedModules>(
  module: T
): MappedModules[T];
