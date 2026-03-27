import { Randomizer } from "@saehrimnir/druidjs";
import { getStatistics, TAU } from "./utils.js";

/**
 * Creates a swissroll.
 *
 * @param {Object} parameters
 * @param {number} [parameters.N=400] - Number of points.
 * @param {number} [parameters.alpha_start=1] - Angle from which the swissroll starts.
 * @param {number} [parameters.alpha_end=2.5] - Angle at which the swissroll ends.
 * @param {number} [parameters.noise=0] - Add uniform noise to each point at each direction.
 * @param {number} [parameters.width=20] - Width of the swissroll.
 * @param {number} [parameters.seed=4711] - Seed for the random number generator.
 * @param {number} [parameters.num_labels=8] - Number of labels for the swissroll,
 *   partitions the swissroll in num_labels parts according to the angle.
 * @returns {import("./utils.js").MistleDataset} The final swissroll dataset.
 */
export default function swissroll({
    N = 400,
    alpha_start = 1,
    alpha_end = 2.5,
    noise = 0,
    width = 20,
    seed = 4711,
    num_labels = 8,
} = {}) {
    const R = new Randomizer(seed);
    /** @type {number[][]} */
    let values = new Array(N);
    const labels = new Array(N);
    const columns = ["X", "Y", "Z"];
    for (let i = 0; i < N; ++i) {
        const alpha = (alpha_start + (i / N) * (alpha_end - alpha_start)) * TAU;
        const x = alpha * Math.cos(alpha);
        const y = alpha * Math.sin(alpha);
        const z = width * R.random - width / 2;
        values[i] = [x, y, z];
        labels[i] = Math.floor(i / Math.floor(N / num_labels));
    }
    if (noise > 0) {
        values = values.map((row) => {
            return row.map((value) => value + R.random * noise);
        });
    }

    return {
        values,
        labels,
        columns,
        statistics: getStatistics({ values, columns }),
    };
}

export const SWISSROLL = swissroll();
