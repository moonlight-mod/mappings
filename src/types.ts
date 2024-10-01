// auto-generated
import _Dispatcher from "./mappings/discord/Dispatcher";
import Flux from "./mappings/discord/packages/flux";

export type MappedModules = {
  "discord/Dispatcher": _Dispatcher;
  "discord/packages/flux": Flux;
};

export declare function WebpackRequire<T extends keyof MappedModules>(
  module: T
): MappedModules[T];
