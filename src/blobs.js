import { Randomizer } from "@saehrimnir/druidjs";
import { getStatistics } from "./utils.js";

/**
 * Creates a dataset consisting of some gaussian blobs.
 * @param {Object} parameters 
 * @param {Number} [parameters.N = 400] - Number of points.
 * @param {Number} [parameters.D = 3] - Dimensionality of the dataset.
 * @param {Array<Array>|Number} [parameters.centers = 3] - Either number of blobs, or their centers.
 * @param {Array<Array>|Number} [parameters.deviations = 1] - If a number given the deviation of the blobs in each dimension, else an array consisting the deviations for all blobs for all directions.
 * @param {Number} [parameters.seed = 4711] - Seed for the random number generator.
 * @returns {{values: Array<Array>, labels: Array<String>, columns: Array<String>, statistics: Object}} - The final blobs dataset.
 */
export default function blobs({N = 400, D = 3, centers, deviations, seed = 4711} = {}) {
    const R = new Randomizer(seed);
    const values = [];
    const labels = [];
    const columns = Array.from({length: D}, (_, i) => `axis_${i}`);

    if (centers == null) {
        centers = 3
    }

    if (Number.isInteger(centers)) {
        centers = Array.from({length: centers}, () => {
            return Array.from({length: D}, () => R.random * 12 - 6);
        })
    }

    if (!Array.isArray(centers)) {
        throw "Centers needs to be an array, an integer, or null (defaults to centers = 3)!";
    }

    if (!deviations) {
        deviations = centers.map(center => center.map(() => 1));
    } else {
        if (Number.isFinite(deviations)) {
            deviations = centers.map(center => center.map(() => deviations));
        }
        if (Array.isArray(deviations) && deviations.length != centers.length) {
            throw "If deviations is given, then its value needs to be a number or an array of the same length as centers! (defaults to deviations = 1)";
        }
    }

    const number_of_points_per_blob = Math.floor(N / centers.length);
    const residuum = N - number_of_points_per_blob * centers.length;
    const ns = Array.from({length: centers.length}, () => number_of_points_per_blob);
    ns[0] += residuum
    for (let i = 0; i < centers.length; ++i) {
        const n = ns[i];
        let randoms = [];
        for (let d = 0; d < D; ++d) {
            randoms.push(randomNormal(R, centers[i][d], deviations[i][d]))
        }
        for (let j = 0; j < n; ++j) {
            values.push(randoms.map(r => r()));
            labels.push(`blob_${i + 1}`);
        }
    }
    
    return {values, labels, columns, statistics: getStatistics({values, columns})};
}

export const BLOBS = blobs();

// https://github.com/d3/d3-random/blob/588790e06454c27f7dae4e7cffeadf2c783d88c3/src/normal.js
function randomNormal(R, mu = 0, sigma = 1) {
    let x;
    let r;
    return function() {
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
        return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);
    }
}