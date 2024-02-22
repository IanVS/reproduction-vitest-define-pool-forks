This demonstrates that an `undefined` value in the `define` vite config will have different results between `--pool=threads` (the default) and `--pool=forks` (throws an error).

To demonstrate, run `pnpm i`, then `pnpm run test`, which should fail.  If you edit `vite.config.ts` and remove `pool: 'forks'`, the test will pass.
