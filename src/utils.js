import "cross-fetch/polyfill";
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


export async function fetch_data(URL) {
    const response = await fetch(URL, { cache: "force-cache", mode: "cors" })
    let data = await response.arrayBuffer();
    /* const data = await axios.get(URL, {
        responseType: "arraybuffer",        
    }) */
    data = pako.inflate(data)
    return data;
}