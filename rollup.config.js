import { terser } from "rollup-plugin-terser";
import json from '@rollup/plugin-json';
import * as meta from "./package.json";

const copyright = `// ${meta.homepage} v${meta.version} Copyright ${(new Date).getFullYear()} ${meta.author.name}`;

export default [{
    input: "index.js",
    output: {
        extend: true,
        file: "dist/dataset.js",
        format: "umd",
        indent: false,
        name: "datasets"
    },
    plugins: [
        json(),
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
        json({compact: true}), terser({format: {preamble: copyright}})
    ]
}]