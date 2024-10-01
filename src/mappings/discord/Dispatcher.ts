import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../registry";
import { Dispatcher as OrigDispatcher } from "flux";

type Dispatcher = OrigDispatcher<any> & {
  dispatch: (payload: any) => void;
  isDispatching: () => boolean;

  addInterceptor: (interceptor: (event: any) => boolean | undefined) => void;

  flushWaitQueue: () => void;
  wait: (callback: () => void) => void;

  subscribe: (eventType: string, callback: (event: any) => void) => void;
  unsubscribe: (eventType: string, callback: (event: any) => void) => void;

  register: (
    name: string,
    actionHandlers: Record<string, (event: any) => void>,
    storeDidChange: (event: any) => void,
    band: number,
    token: string
  ) => number;

  createToken: () => string;
  addDependencies: (id: string, deps: string[]) => void;
};

type DispatcherExports = {
  Dispatcher: Dispatcher;
};

register((moonmap) => {
  const name = "discord/Dispatcher";
  moonmap.register({
    name,
    find: '.Early=0]="Early",',
    process({ id }) {
      moonmap.addModule(id, name);

      moonmap.addExport(name, "Dispatcher", {
        type: ModuleExportType.Constant,
        find: "Z"
      });

      return true;
    }
  });
});

export default DispatcherExports;
