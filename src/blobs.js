//ts-check
import { Randomizer } from "@saehrimnir/druidjs";
import { getStatistics, randomNormal } from "./utils.js";

/**
 * Creates a dataset consisting of some gaussian blobs.
 *
 * @param {Object} parameters
 * @param {number} [parameters.N=400] - Number of points. Default is `400`
 * @param {number} [parameters.D=3] - Dimensionality of the dataset. Default is
 *   `3`
 * @param {number[][] | number} [parameters.centers=3] - Either number of blobs,
 *   or their centers. Default is `3`
 * @param {number[][] | number} [parameters.deviations=1] - If a number given
 *   the deviation of the blobs in each dimension, else an array consisting the
 *   deviations for all blobs for all directions. Default is `1`
 * @param {number} [parameters.seed=4711] - Seed for the random number
 *   generator. Default is `4711`
 * @returns {{
 *     values: number[][];
 *     labels: string[];
 *     columns: string[];
 *     statistics: () => Record<string, import("./utils.js").Statistics>;
 * }}
 *   - The final blobs dataset.
 */
export default function blobs({
    N = 400,
    D = 3,
    centers,
    deviations,
    seed = 4711,
} = {}) {
    const R = new Randomizer(seed);
    const values = [];
    const labels = [];
    const columns = Array.from({ length: D }, (_, i) => `axis_${i}`);

    if (centers == null) {
        centers = 3;
    }

    if (Number.isInteger(centers)) {
        centers = new Array(centers).fill(0).map(() => {
            return Array.from({ length: D }, () => R.random * 12 - 6);
        });
    }

    if (!Array.isArray(centers)) {
        throw "Centers needs to be an array, an integer, or null (defaults to centers = 3)!";
    }

    if (!deviations) {
        deviations = centers.map((center) => center.map(() => 1));
    } else {
        if (typeof deviations === "number") {
            deviations = /** @type {number[][]} */ (
                centers.map((center) => center.map(() => deviations))
            );
        }
        if (Array.isArray(deviations) && deviations.length != centers.length) {
            throw "If deviations is given, then its value needs to be a number or an array of the same length as centers! (defaults to deviations = 1)";
        }
    }

    const number_of_points_per_blob = Math.floor(N / centers.length);
    const residuum = N - number_of_points_per_blob * centers.length;
    const ns = Array.from(
        { length: centers.length },
        () => number_of_points_per_blob,
    );
    ns[0] += residuum;
    for (let i = 0; i < centers.length; ++i) {
        const n = ns[i];
        let randoms = [];
        for (let d = 0; d < D; ++d) {
            randoms.push(randomNormal(R, centers[i][d], deviations[i][d]));
        }
        for (let j = 0; j < n; ++j) {
            values.push(randoms.map((r) => r()));
            labels.push(`blob_${i + 1}`);
        }
    }

    return {
        values,
        labels,
        columns,
        statistics: getStatistics({ values, columns }),
    };
}

export const BLOBS = blobs();
