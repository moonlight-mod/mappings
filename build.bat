node generate.js types --write
node generate.js imports --write
prettier --write ./src

node generate.js declares "@moonlight-mod/wp/" > ..\moonlight\packages\types\src\mappings.d.ts
prettier --write ..\moonlight\packages\types\src\mappings.d.ts

pnpm run clean
pnpm run build
