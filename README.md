```sh
$ pnpm run dev

Error: The following environment options are incompatible with the Cloudflare Vite plugin:
        - "ssr" environment: `resolve.external`: ["telefunc"]
To resolve this issue, avoid setting `resolve.external` in your Cloudflare Worker environments.

    at validateWorkerEnvironmentOptions (file:///tmp/bati/node_modules/@cloudflare/vite-plugin/dist/index.js:17211:11)
    at BasicMinimalPluginContext.configResolved (file:///tmp/bati/node_modules/@cloudflare/vite-plugin/dist/index.js:17343:11)
    at file:///tmp/bati/node_modules/vite/dist/node/chunks/dep-M_KD0XSK.js:36396:87
    at Array.map (<anonymous>)
    at resolveConfig (file:///tmp/bati/node_modules/vite/dist/node/chunks/dep-M_KD0XSK.js:36396:68)
    at assertViteRoot2 (file:///tmp/bati/node_modules/vike/dist/esm/node/api/prepareViteApiCall.js:160:32)
    at resolveConfigs (file:///tmp/bati/node_modules/vike/dist/esm/node/api/prepareViteApiCall.js:34:36)
    at Module.dev (file:///tmp/bati/node_modules/vike/dist/esm/node/api/dev.js:10:44)
    at cmdDev (file:///tmp/bati/node_modules/vike/dist/esm/node/cli/entry.js:26:32)
    at cli (file:///tmp/bati/node_modules/vike/dist/esm/node/cli/entry.js:11:9)
```