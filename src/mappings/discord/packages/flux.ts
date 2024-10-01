import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../registry";

import { DependencyList } from "react";
import { Store as FluxStore } from "flux/utils";
import { Dispatcher as FluxDispatcher } from "flux";
import { ComponentConstructor } from "flux/lib/FluxContainer";

/*
  It seems like Discord maintains their own version of Flux that doesn't match
  the types on NPM. This is a heavy work in progress - if you encounter rough
  edges, please contribute!
*/

export declare abstract class Store<T> extends FluxStore<T> {
  static getAll: () => Store<any>[];
  getName: () => string;
  emitChange: () => void;
}

interface ConnectStores {
  <T>(
    stores: Store<any>[],
    callback: T,
    context?: any
  ): ComponentConstructor<T>;
}

type Flux = {
  DeviceSettingsStore: any; // TODO
  Emitter: any; // @types/fbemitter
  OfflineCacheStore: any; // TODO
  PersistedStore: any; // TODO
  Store: typeof Store;
  Dispatcher: typeof FluxDispatcher;
  connectStores: ConnectStores;
  initialize: () => void;
  initialized: Promise<boolean>;
  destroy: () => void;
  useStateFromStores: UseStateFromStores;
  useStateFromStoresArray: UseStateFromStoresArray;
  useStateFromStoresObject: UseStateFromStoresObject;
};

interface UseStateFromStores {
  <T>(
    stores: Store<any>[],
    callback: () => T,
    deps?: DependencyList,
    shouldUpdate?: (oldState: T, newState: T) => boolean
  ): T;
}

interface UseStateFromStoresArray {
  <T>(stores: Store<any>[], callback: () => T, deps?: DependencyList): T;
}

interface UseStateFromStoresObject {
  <T>(stores: Store<any>[], callback: () => T, deps?: DependencyList): T;
}

register((moonmap) => {
  const name = "discord/packages/flux";
  moonmap.register({
    name,
    find: ",DeviceSettingsStore:",
    process({ id }) {
      moonmap.addModule(id, name);

      moonmap.addExport(name, "BatchedStoreListener", {
        type: ModuleExportType.Function,
        find: " tried to load a non-existent store."
      });
      moonmap.addExport(name, "Dispatcher", {
        type: ModuleExportType.Function,
        find: "_dispatchWithDevtools("
      });
      moonmap.addExport(name, "Store", {
        type: ModuleExportType.Function,
        find: "registerActionHandlers("
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

export default Flux;
