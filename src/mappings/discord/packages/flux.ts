import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../registry";

import { DependencyList } from "react";
import { Store as FluxStore } from "flux/utils";
import { ComponentConstructor } from "flux/lib/FluxContainer";

/*
  It seems like Discord maintains their own version of Flux that doesn't match
  the types on NPM. This is a heavy work in progress - if you encounter rough
  edges, please contribute!
*/

export type BasePayload = {
  type: string;
};
export type Interceptor<T extends BasePayload> = (payload: T) => boolean;
export type Listener<T extends BasePayload> = (payload: T) => void;

export type ActionHandler = {
  name: string;
  band?: string;
  actionHandler: any;
  storeDidChange(): void;
};

// TODO: this should probably be moved elsewhere, just don't know where yet
export declare class DepGraph<T> {
  nodes: Record<string, T>;
  outgoingEdges: Record<string, T>;
  incomingEdges: Record<string, T>;
  circular: boolean;

  size(): number;
  addNode(id: string, node: T): void;
  removeNode(id: string): void;
  hasNode(id: string): boolean;
  getNodeData(id: string): T;
  setNodeData(id: string, node: T): void;
  addDependency(outgoing: T, incoming: T): boolean;
  removeDependency(outgoing: T, incoming: T): void;
  clone(): DepGraph<T>;
  dependenciesOf(node1: T, node2: T): T[];
  dependantsOf(node1: T, node2: T): T[];
  overallOrder(node: T): T[];

  constructor(toClone?: DepGraph<T>);
}

// TODO: move these to another file once we figure out path
export type LogTrace = {
  name: string;
  time: number;
};
export declare class Log {
  id: number;
  action: string;
  createdAt: Date;
  startTime: number;
  totalTime: number;
  traces: LogTrace[];
  error: Error | null;

  get name(): string;
  toJSON(): { actionType: string; created_at: Date; totalTime: number; traces: LogTrace[] };

  constructor(action: string);
}
export declare class ActionLogger extends EventEmitter {
  logs: Log[];
  persist: boolean;

  log(type: string, value: any): Log; // TODO: this function is a mess to decypher as its like a stack of 3 function calls for the parameter
  getSlowestActions(type: string): Log[];
  getLastActionMetrics(type: string): [traceName: string, name: string, time: number][];

  constructor(options: { persist: boolean });
}

export declare class ActionHandlers {
  _orderedActionHandlers: Record<string, ActionHandler[]>;
  _orderedCallbackTokens: any | null; // TODO
  _lastID: number;
  _dependencyGraph: DepGraph<ActionHandler>;

  getOrderedActionHandlers(type: string): Record<string, ActionHandler[]>;
  register(type: string, handlers: unknown, storeDidChange: () => void, band: number, token?: string): string;
  createToken(): string;
  addDependencies(type: string, dependencies: ActionHandler[]): void;
  _validateDependencies(type: string, dependencies: ActionHandler[]): void;
  _invalidateCaches(): void;
  _bandToken(band: number): string;
  _addToBand(type: string, band: number): void;
  _computeOrderedActionHandlers(type: string): ActionHandler[];
  _computeOrderedCallbackTokens(): ActionHandler[];
}

declare class Dispatcher<T extends BasePayload> {
  _defaultBand: number;
  _interceptors: Interceptor<T>[];
  _subscriptions: Record<string, Listener<T>>;
  _waitQueue: T[];
  _processingWaitQueue: boolean;
  _currentDispatchActionType: string | null;
  _actionHandlers: ActionHandlers;
  _sentryUtils: any | undefined;
  actionLogger: ActionLogger;
  functionCache: Record<string, (payload: T) => void>;

  isDispatching(): boolean;
  dispatch(payload: T): Promise<void>;
  flushWaitQueue(): void;
  _dispatchWithDevtools(payload: T): void;
  _dispatchWithLogging(payload: T): void;
  _dispatch(payload: T, callback: (key: string, callback: () => void) => void): void;
  addInterceptor(interceptor: Interceptor<T>): void;
  wait(payload: T): void;
  subscribe(type: string, listener: Listener<T>): void;
  unsubscribe(type: string, listener: Listener<T>): void;
  register(type: string, handlers: unknown, storeDidChange: () => void, band: number | null, token?: string): string;
  createToken(): string;
  addDependencies(type: string, dependencies: ActionHandler[]): void;

  constructor(band?: number, logger?: ActionLogger, unused?: unknown);
}

declare abstract class Store<T> extends FluxStore<T> {
  static getAll: () => Store<any>[];
  getName: () => string;
  emitChange: () => void;
  addChangeListener: (callback: () => void) => void;
  removeChangeListener: (callback: () => void) => void;
}

interface ConnectStores {
  <T>(stores: Store<any>[], callback: T, context?: any): ComponentConstructor<T>;
}

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

type Flux = {
  DeviceSettingsStore: any; // TODO
  Emitter: any; // @types/fbemitter
  OfflineCacheStore: any; // TODO
  PersistedStore: any; // TODO
  Store: typeof Store;
  Dispatcher: typeof Dispatcher;
  connectStores: ConnectStores;
  initialize: () => void;
  initialized: Promise<boolean>;
  destroy: () => void;
  useStateFromStores: UseStateFromStores;
  useStateFromStoresArray: UseStateFromStoresArray;
  useStateFromStoresObject: UseStateFromStoresObject;
};

declare class BatchedStoreListener {
  stores: Store<any>[];
  changeCallback(): void;
  storeVersionHandled: number;
  handleStoreChange(): void;

  attach(name: string): void;
  detatch(): void;

  constructor(stores: Store<any>[], changeCallback: () => void);
}

type Exports = {
  BatchedStoreListener: BatchedStoreListener;
  Dispatcher: typeof Dispatcher;
  Store: typeof Store;
  default: Flux;
  /**
   * This function always returns false.
   */
  statesWillNeverBeEqual(state1: any, state2: any): boolean;
};
export default Exports;

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
