// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_middleware.tsx";
import * as $1 from "./routes/auth/[provider]/callback.tsx";
import * as $2 from "./routes/auth/[provider]/index.tsx";
import * as $3 from "./routes/index.tsx";
import * as $4 from "./routes/m/[movie].tsx";
import * as $$0 from "./islands/Counter.tsx";

const manifest = {
  routes: {
    "./routes/_middleware.tsx": $0,
    "./routes/auth/[provider]/callback.tsx": $1,
    "./routes/auth/[provider]/index.tsx": $2,
    "./routes/index.tsx": $3,
    "./routes/m/[movie].tsx": $4,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
