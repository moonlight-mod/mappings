import { ModuleExportType } from "@moonlight-mod/moonmap";
import register from "../../../registry";

export type HTTPUtilsRequest = {
  url: string;
  query?: Record<string, string>;
  headers?: Record<string, string>;
  body?: string;
};

export type HTTPUtilsResponse = {
  headers?: Record<string, string>;
  ok: boolean;
  status: number;
  text?: string;
};

export type HTTPUtilsFunction = (
  data: HTTPUtilsRequest
) => Promise<HTTPUtilsResponse>;

type HTTPUtils = {
  get: HTTPUtilsFunction;
  post: HTTPUtilsFunction;
  put: HTTPUtilsFunction;
  patch: HTTPUtilsFunction;
  del: HTTPUtilsFunction;
};

register((moonmap) => {
  const name = "discord/utils/HTTPUtils";
  moonmap.register({
    name,
    find: '.set("X-Audit-Log-Reason",',
    process({ id }) {
      moonmap.addModule(id, name);

      moonmap.addExport(name, "HTTP", {
        type: ModuleExportType.Key,
        find: "patch"
      });

      return true;
    }
  });
});

export default HTTPUtils;
