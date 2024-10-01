# mappings

WIP mappings for the Discord client, powered by [moonmap](https://github.com/moonlight-mod/moonmap) and [LunAST](https://github.com/moonlight-mod/lunast).

## Embedding into client mods

After setting up moonmap and LunAST, call the load function before Webpack initializes:

```ts
import loadMappings from "@moonlight-mod/mappings";
loadMappings(moonmap, lunast);
```

## TODO

- [x] Publish
- [ ] Export types with Webpack require
- [ ] Export types with import statements
- [ ] Release to NPM
