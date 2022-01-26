export const TAU = Math.PI * 2;

export function scaleLinear([min, max], [from, to]) {
    const domain_span = max - min;
    const range_span = to - from;
    return (value) => (value - min) / domain_span * range_span + from;
}

export function extent(array, acc = d => d) {
    let min = Infinity;
    let max = -Infinity;
    for (const entry of array) {
        min = Math.min(acc(entry), min);
        max = Math.max(acc(entry), max);
    }
    return [min, max];
}

export function deviation(array, acc = d => d) {
    const N = array.length;
    let mean = 0;
    for (const entry of array) {
        mean += acc(entry);
    }
    mean /= N;
    let dev = 0;
    for (const entry of array) {
        dev += (acc(entry) - mean);
    }
    return [mean, dev / N];
}

export function getStatistics({values, columns}) {
    return function() {
        let result = {};
        columns.forEach((dimension, i) => {
            result[dimension] = {};
            const [mean, std] = deviation(values, row => row[i]);
            result[dimension].std = std;
            result[dimension].mean = mean;
            const [min, max] = extent(values, row => row[i]);
            result[dimension].min = min;
            result[dimension].max = max;
        })
        return result;
    }
}

export async function get_fetch() {
    let fetch;
    try {
        if (process && typeof process !== undefined && process.release.name === "node") {
            fetch = (await import("cross-fetch")).fetch;
        }
    } catch {
        fetch = window.fetch;
    }
    return fetch;
}

export function parse_openml_mnist_data(raw_data, fn_apply_to_value = (v) => v) {
    const [all_columns, ...values_tmp] = raw_data.split(/\r?\n|\r/).map(row => row.split(","));
    const all_labels = [];
    const all_values = [];
    values_tmp.forEach((row) => {
        all_values.push(row.slice(0, -1).map(fn_apply_to_value));
        all_labels.push(row.slice(-1)[0]);
    });
    return { all_columns, all_values, all_labels };
}