import { defineConfig } from "tsup"

export default defineConfig({
  entry: {
    index: "src/index.tsx",
    "components/index": "src/index.tsx",
  },
  format: ["esm"],
  dts: true,
  clean: true,
  sourcemap: true,
  external: ["preact", "preact/jsx-runtime", "@quartz-community/types", "@quartz-community/utils"],
})
