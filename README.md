# mappings

WIP mappings for the Discord client, powered by [moonmap](https://github.com/moonlight-mod/moonmap) and [LunAST](https://github.com/moonlight-mod/lunast).

## Embedding into client mods

After setting up moonmap and LunAST, call the load function before Webpack initializes:

```ts
import loadMappings from "@moonlight-mod/mappings";
loadMappings(moonmap, lunast);
```

## When adding types to a mapping

- Add its path and a name to `generate.js`
  - Name should be the last part of the path except in cases where it breaks syntax (e.g. `highlight.js` -> `HighlightJS`)
    - Mappings for CSS class names should replace `.css` with `CSS`
- `node generate.js types --write`
- `node generate.js declares "@moonlight-mod/wp/" > ../moonlight/packages/types/src/mappings.d.ts` to update import statements in moonlight
