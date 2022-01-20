import { terser } from "rollup-plugin-terser";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import replace from "@rollup/plugin-replace";
import json from '@rollup/plugin-json';
import * as meta from "./package.json";

const copyright = `// ${meta.homepage} v${meta.version} Copyright ${(new Date).getFullYear()} ${meta.author.name}`;

export default [{
    input: "index.js",
    output: [
        {file: "dist/dataset.js", format: "cjs", sourcemap: true},
        {file: "dist/dataset.es.js", format: "es", sourcemap: true}
    ],
    plugins: [
        json({compact: true}),
    ]
}, {
    input: "index.js",
    output: {
        extend: true,
        file: "dist/dataset.umd.js",
        format: "umd",
        indent: false,
        name: "datasets",
        sourcemap: true
    },
    external: ["cross-fetch", "cross-fetch/polyfill"],
    plugins: [
        json({compact: true}),
        replace({
            'import fetch from "cross-fetch";': "",
            preventAssignment: true
        }),
        nodePolyfills({browser: true}),
        resolve(),
        commonjs()
    ]
}, {
    input: "index.js",
    output: {
        extend: true,
        file: "dist/dataset.min.js",
        format: "umd",
        indent: false,
        name: "datasets",
        sourcemap: true
    },
    external: ["cross-fetch", "cross-fetch/polyfill"],
    plugins: [
        json({compact: true}), 
        replace({
            'import fetch from "cross-fetch";': '',
            preventAssignment: true
        }),
        nodePolyfills({browser: true}),
        resolve(),
        commonjs(),
        terser({format: {preamble: copyright}}),
    ]
}]