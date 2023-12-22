import { types as T, matches } from "../deps.ts";

const { shape, boolean } = matches;

const matchBitcoindConfig = shape({
    rpc: shape({
      enable: boolean,
    }),
  });

  export const dependencies: T.ExpectedExports.dependencies = {

    bitcoind: {
      // deno-lint-ignore require-await
      async check(_effects, configInput) {
        const config = matchBitcoindConfig.unsafeCast(configInput);
        if (!config.rpc.enable) {
          return { error: 'Must have RPC enabled' };
        }
        return { result: null };
      },
      // deno-lint-ignore require-await
      async autoConfigure(_effects, configInput) {
        const config = matchBitcoindConfig.unsafeCast(configInput);
        config.rpc.enable = true;
        return { result: config };
      },
    },
  };
  