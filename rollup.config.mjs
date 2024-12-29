import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import preserveDirectives from "rollup-preserve-directives";

const plugins = [
  typescript(),
  json(),
  image(),
  postcss({
    extensions: [".css"],
    modules: true,
    use: {
      sass: {
        silenceDeprecations: ["legacy-js-api"],
      },
    },
  }),
  nodeResolve({
    extensions: [".js"],
    browser: true,
  }),
  preserveDirectives(),
  replace({
    preventAssignment: true,
    "process.env.NODE_ENV": JSON.stringify("production"),
  }),
  babel({
    babelHelpers: "bundled",
    presets: ["@babel/preset-react"],
  }),
  commonjs(),
  terser(),
];

export default [
  {
    input: "src/index.ts",
    output: {
      file: `dist/index.js`,
      format: "umd",
      name: "DanSukuMizu",
    },
    plugins: plugins,
  },
  {
    input: "src/Root.tsx",
    output: {
      file: `dist/main.js`,
      format: "umd",
      name: "DanSukuMizu",
    },
    plugins: plugins,
  },
  {
    input: "src/popup/popup.ts",
    output: {
      file: `dist/popup/popup.js`,
      format: "umd",
      name: "DanSukuMizu",
    },
    plugins: plugins,
  },
];
