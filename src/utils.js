//ts-check
export const TAU = Math.PI * 2;

/**
 * @param {[number, number]} domain
 * @param {[number, number]} range
 * @returns {(d: number) => number}
 */
export function scaleLinear([min, max], [from, to]) {
    const domain_span = max - min;
    const range_span = to - from;
    return (value) => ((value - min) / domain_span) * range_span + from;
}

/**
 * @param {Iterable<T>} array
 * @param {(d: T) => number} acc
 * @returns {[number, number]}
 */
export function extent(array, acc = (d) => d) {
    let min = Infinity;
    let max = -Infinity;
    for (const entry of array) {
        min = Math.min(acc(entry), min);
        max = Math.max(acc(entry), max);
    }
    return [min, max];
}

/**
 * @param {Iterable<T>} array
 * @param {(d: T) => number} acc
 * @returns {[number, number]}
 */
export function deviation(array, acc = (d) => d) {
    const N = array.length;
    let mean = 0;
    for (const entry of array) {
        mean += acc(entry);
    }
    mean /= N;
    let dev = 0;
    for (const entry of array) {
        dev += acc(entry) - mean;
    }
    return [mean, dev / N];
}

/**
 * @typedef Statistics
 * @property {number} min
 * @property {number} max
 * @property {number} mean
 * @property {number} std
 */

/**
 * @param {object} mistle_data
 * @param {number[][]} mistle_data.values
 * @param {string[]} mistle_data.columns
 * @returns {() => Record<string, Statistics>}
 */
export function getStatistics({ values, columns }) {
    return function () {
        let result = {};
        columns.forEach((dimension, i) => {
            /** @type {Record<string, Statistics>} */
            result[dimension] = {};
            const [mean, std] = deviation(values, (row) => row[i]);
            result[dimension].std = std;
            result[dimension].mean = mean;
            const [min, max] = extent(values, (row) => row[i]);
            result[dimension].min = min;
            result[dimension].max = max;
        });
        return result;
    };
}

export async function get_fetch() {
    let fetch;
    try {
        if (
            process &&
            typeof process !== undefined &&
            process.release.name === "node"
        ) {
            fetch = (await import("cross-fetch")).fetch;
        }
    } catch {
        fetch = window.fetch;
    }
    return fetch;
}

/**
 * @param {string} raw_data
 * @param {(d: string) => number} fn_apply_to_value
 * @returns {{
 *     all_columns: string[];
 *     all_values: number[][];
 *     all_labels: string[];
 * }}
 */
export function parse_openml_mnist_data(
    raw_data,
    fn_apply_to_value = (v) => +v,
) {
    const [all_columns, ...values_tmp] = raw_data
        .split(/\r?\n|\r/)
        .map((row) => row.split(","));
    /** @type {string[]} */
    const all_labels = [];
    /** @type {number[][]} */
    const all_values = [];
    values_tmp.forEach((row) => {
        all_values.push(row.slice(0, -1).map(fn_apply_to_value));
        all_labels.push(row.slice(-1)[0]);
    });
    return { all_columns, all_values, all_labels };
}

/**
 * @param {import("@saehrimnir/druidjs").Randomizer} R
 * @param {number} [mu=0] Default is `0`
 * @param {number} [sigma=1] Default is `1`
 * @returns
 * @see https://github.com/d3/d3-random/blob/588790e06454c27f7dae4e7cffeadf2c783d88c3/src/normal.js
 */

export function randomNormal(R, mu = 0, sigma = 1) {
    /** @type {number | null} */
    let x;
    /** @type {number} */
    let r;
    return function () {
        let y;
        if (x != null) {
            y = x;
            x = null;
        } else {
            do {
                x = R.random * 2 - 1;
                y = R.random * 2 - 1;
                r = x * x + y * y;
            } while (!r || r > 1);
        }
        return mu + sigma * y * Math.sqrt((-2 * Math.log(r)) / r);
    };
}
