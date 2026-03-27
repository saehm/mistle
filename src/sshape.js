import { Randomizer } from "@saehrimnir/druidjs";
import { getStatistics } from "./utils.js";

/**
 * Creates a s-shape.
 *
 * @param {Object} parameters
 * @param {number} [parameters.N=400] - Number of points.
 * @param {number} [parameters.noise=0] - Add uniform noise to each point at each direction.
 * @param {number} [parameters.width=20] - Width of the s-shape.
 * @param {number} [parameters.seed=4711] - Seed for the random number generator.
 * @param {number} [parameters.num_labels=8] - Number of labels for the s-shape,
 *   partitions the s-shape in num_labels parts according to the angle.
 * @returns {import("./utils.js").MistleDataset} The final s-shape dataset.
 */
export default function sshape({
    N = 400,
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
        const alpha = 3 * Math.PI * (i / N - 0.5);
        const x = -Math.sin(alpha);
        const y = Math.sign(alpha) * (Math.cos(alpha) - 1);
        const z = width * R.random - width / 2;
        values[i] = [x, y, z];
        labels[i] = Math.floor(i / (N / num_labels));
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

export const SSHAPE = sshape();
