import { Randomizer } from "@saehrimnir/druidjs";
import { getStatistics } from "./utils.js";

/**
 * Creates a rays dataset consisting of {@link parameters.D} rays.
 *
 * @param {Object} parameters
 * @param {number} [parameters.N=400] - Roughly the number of points, uses round(N / D) * D. Default is `400`
 * @param {number} [parameters.D=7] - Number of rays and dimensionality of the result. Default is `7`
 * @param {number} [parameters.noise=0] - Add uniform noise to each point at each direction. Default is `0`
 * @param {boolean} [parameters.touching=true] - Whether the rays touch each other at the origin. Default is `true`
 * @param {number} [parameters.length=12] - Length of each ray. Default is `12`
 * @param {number} [parameters.seed=4711] - Seed for the random number generator. Default is `4711`
 * @returns {import("./utils.js").MistleDataset} The final rays dataset.
 */
export default function rays({
    N = 400,
    D = 7,
    noise = 0,
    touching = true,
    length = 12,
    seed = 4711,
} = {}) {
    const R = new Randomizer(seed);
    const n = Math.round(N / D) * D;
    let values = [];
    const labels = [];
    const columns = Array.from({ length: D }, (_, i) => `axis_${i + 1}`);
    for (let i = 0; i < n; ++i) {
        let row = Array.from({ length: D }, (_, j) =>
            i % D != j ? 0 : (i / N) * length - length / 2,
        );
        if (!touching) {
            row = row.map((v, j) => v + (j - (i % D)));
        }
        values.push(row);
        labels.push(`ray_${(i % D) + 1}`);
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

export const RAYS = rays();
