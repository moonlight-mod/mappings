import "./modules";

import type Moonmap from "@moonlight-mod/moonmap";
import type LunAST from "@moonlight-mod/lunast";
import { cbs } from "./registry";

export default function load(moonmap: Moonmap, lunast: LunAST) {
  for (const cb of cbs) {
    cb(moonmap, lunast);
  }
}
