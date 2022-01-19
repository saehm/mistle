import { terser } from "rollup-plugin-terser";
import nodePolyfills from 'rollup-plugin-polyfill-node';
import json from '@rollup/plugin-json';
import * as meta from "./package.json";

const copyright = `// ${meta.homepage} v${meta.version} Copyright ${(new Date).getFullYear()} ${meta.author.name}`;

export default [{
    input: "index.js",
    output: [
        {
            extend: true,
            file: "dist/dataset.umd.js",
            format: "umd",
            indent: false,
            name: "datasets"
        },
        {
            file: "dist/dataset.js",
            format: "cjs"
        },
        {
            file: "dist/dataset.es.js",
            format: "es"
        }
    ],
    plugins: [
        json(),
        nodePolyfills(),
    ]
}, {
    input: "index.js",
    output: {
        extend: true,
        file: "dist/dataset.min.js",
        format: "umd",
        indent: false,
        name: "datasets"
    },
    plugins: [
        json({compact: true}), 
        terser({format: {preamble: copyright}}),
        nodePolyfills()
    ]
}]