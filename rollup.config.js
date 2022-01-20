import { terser } from "rollup-plugin-terser";
import nodePolyfills from 'rollup-plugin-polyfill-node';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
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
        nodePolyfills(),
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
    external: ["cross-fetch/polyfill"],
    plugins: [
        json({compact: true}),
        resolve(),
        nodePolyfills({
            preferBuiltins: true,
            browser: true,
        }),
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
    external: ["cross-fetch/polyfill"],
    plugins: [
        resolve(),
        nodePolyfills({
            preferBuiltins: true,
            browser: true,
        }),
        commonjs(),
        json({compact: true}), 
        terser({format: {preamble: copyright}})
    ]
}]