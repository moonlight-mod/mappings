import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../../registry";

import type { DebouncedFunc } from "lodash";
import type { BasePayload } from "./_shared";
import type { Store } from "./Store";
import type { ActionHandler, Dispatcher } from "./Dispatcher";

export type ClearAll = {
  omit: string[];
  type: "all" | "user-data-only";
};

type Callback = () => void;

export declare abstract class PersistedStore<T extends BasePayload> extends Store<T> {
  _version: number;
  callback: (callback: Callback) => void;
  throttledCallback: DebouncedFunc<Callback>;

  allPersistKeys: Set<string>;
  userAgnosticPersistKeys: Set<string>;
  _writePromises: Map<string, Promise<void>>;
  _writeResolvers: Map<string, [callback: Callback, idleCallbackId: number]>;
  _clearAllPromise?: Promise<void>;
  disableWrites: boolean;
  persistKey?: string;
  disableWrite: boolean;
  throttleDelay: number;
  migrations?: unknown;

  /**
   * Returns `this.constructor`
   */
  getClass(): (dispatcher: typeof Dispatcher, actionHandlers?: Record<T["type"], ActionHandler<T>>) => this;
  static clearAll(toClear: ClearAll): Promise<void> | null | undefined;
  static shouldClear(toClear: ClearAll, store: string): boolean;
  static clearPersistQueue(store: string): void;
  static getAllStates(): Record<string, any>;
  static initializeAll(state: BasePayload): void;
  initializeFromState(state: T): void;
  static destroy(): void;
  initializeIfNeeded(): void;
  static migrateAndReadStoreState(store: string, migrators: (() => any)[]): { state?: any; requiresPersist: boolean };
  asyncPersist(): Promise<void>;
  persist(): void;
  clear(): void;

  initialize(state?: T): void;
  getState(): T;

  constructor(dispatcher: typeof Dispatcher, actionHandlers?: Record<T["type"], ActionHandler<T>>);
}

declare abstract class UserAgnosticStore<T extends BasePayload> extends PersistedStore<T> {
  initializeFromState(state: T): void;
  initializeIfNeeded(): void;
  getState(): T;
}

export declare abstract class DeviceSettingsStore<T extends BasePayload> extends UserAgnosticStore<T> {}
export declare abstract class OfflineCacheStore<T extends BasePayload> extends UserAgnosticStore<T> {}

export type Exports = {
  PersistedStore: typeof PersistedStore;
};
export default Exports;

register((moonmap) => {
  const name = "discord/packages/flux/PersistedStore";
  moonmap.register({
    name,
    find: " initialized without a `persistKey`. Add one so we know where to save your stuff!",
    process({ id }) {
      moonmap.addModule(id, name);

      moonmap.addExport(name, "PersistedStore", {
        type: ModuleExportType.Function,
        find: " initialized without a `persistKey`. Add one so we know where to save your stuff!"
      });

      return true;
    }
  });
});
