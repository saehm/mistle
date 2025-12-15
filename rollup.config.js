import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import nodePolyfills from "rollup-plugin-node-polyfills";
import json from "@rollup/plugin-json";
import meta from "./package.json" with { type: "json" };

const copyright = `// ${meta.homepage} v${meta.version} Copyright ${new Date().getFullYear()} ${meta.author.name}`;

export default [
    {
        input: "src/main.js",
        output: [
            { file: "dist/mistle.js", format: "cjs", sourcemap: true },
            { file: "dist/mistle.es.js", format: "es", sourcemap: true },
        ],
        plugins: [json({ compact: true })],
    },
    {
        input: "src/main.js",
        output: {
            extend: true,
            file: "dist/mistle.umd.js",
            format: "umd",
            indent: false,
            name: "datasets",
            sourcemap: true,
        },
        external: ["cross-fetch", "cross-fetch/polyfill"],
        plugins: [
            json({ compact: true }),
            nodePolyfills({ browser: true }),
            resolve(),
            commonjs(),
        ],
    },
];
