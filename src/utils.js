import pako from "pako";

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
    return dev / N;
}

export function getStatistics({values, columns}) {
    let result = {};
    columns.forEach((dimension, i) => {
        result[dimension] = {};
        const std = deviation(values, row => row[i]);
        result[dimension].std = std;
        const [min, max] = extent(values, row => row[i]);
        result[dimension].min = min;
        result[dimension].max = max;
    })
    return result;
}

async function get_fetch() {
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

const headers = {
    credential: "include",
    cache: "force-cache",
    mode: "cors"
};

export async function fetch_data(URL) {
    const fetch = await get_fetch();
    const response = await fetch(URL, headers);
    let data = await response.arrayBuffer();
    data = pako.inflate(data)
    return data;
}

export async function fetch_csv(URL, {delimiter = ";"}) {
    const fetch = await get_fetch();
    const response = await fetch(URL, headers);
    const data = await response.text();
    return data.split('\n').map(line => line.split(delimiter).map(entry => entry.trim().replaceAll('"', '')));
}