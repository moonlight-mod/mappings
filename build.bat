node generate.js types --write
node generate.js imports --write
call prettier --write ./src

node generate.js declares "@moonlight-mod/wp/" > ..\moonlight\packages\types\src\mappings.d.ts
call prettier --write ..\moonlight\packages\types\src\mappings.d.ts

call pnpm run clean
call pnpm run build
