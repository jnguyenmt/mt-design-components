import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import sourceMaps from "rollup-plugin-sourcemaps";
import typescript from "rollup-plugin-typescript2";

// tslint:disable-next-line: no-var-requires
const pkg = require("./package.json");

const index = "index.ts";

export default {
  input: `src/${index}`,
  output: [
    { file: pkg.main, name: index, format: "umd", sourcemap: true },
    { file: pkg.module, format: "es", sourcemap: true }
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [],
  watch: {
    include: "src/**"
  },
  plugins: [
    // Allow json resolution
    json(),
    // Compile TypeScript files
    typescript({ useTsconfigDeclarationDir: true }),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(
      {
        include: "node_modules/**",
        namedExports: {
          "node_modules/react/index.js": ["createElement", "cloneElement", "isValidElement", "Children"],
          "node_modules/react-is/index.js": ["isElement", "isValidElementType", "ForwardRef"]
        }

      }
    ),
    postcss({
      extensions: [".css", ".sss", ".pcss"]
    }),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve(),

    // Resolve source maps to the original source
    sourceMaps()
  ]
};
