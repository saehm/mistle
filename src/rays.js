import { Randomizer } from "@saehrimnir/druidjs";
import { getStatistics } from "./utils.js";

/**
 * Creates a rays dataset consisting of {@link parameters.D} rays.
 *
 * @param {Object} parameters
 * @param {Number} [parameters.N=400] - Roughly the number of points, uses
 *   round(N / D) * D. Default is `400`
 * @param {Number} [parameters.D=7] - Number of rays, and number of the results
 *   dimensionality. Creates a ray per direction. Default is `7`
 * @param {Float} [parameters.noise=0] - Add uniform noise to each point at each
 *   direction. Default is `0`
 * @param {Boolean} [parameters.touching=false] - Defines if the rays touches
 *   each other at the origin. Default is `false`
 * @param {Float} [paramter.length=12] - Length of each ray. Default is `12`
 * @param {Number} [parameters.seed=4711] - Seed for the random number
 *   generator. Default is `4711`
 * @returns {{
 *     values: Array[];
 *     labels: String[];
 *     columns: String[];
 *     statistics: Object;
 * }}
 *   - The final rays dataset.
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
