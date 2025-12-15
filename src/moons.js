import { Randomizer } from "@saehrimnir/druidjs";
import { TAU, scaleLinear, getStatistics } from "./utils.js";

/**
 * Creates a 'moons' dataset consisting of two intersecting circles.
 *
 * @param {Object} parameters
 * @param {Number} parameters.N - Number of points.
 * @param {Float} parameters.noise - Add uniform noise to each point at each
 *   direction.
 * @param {Float} parameters.open - How open the circles should be. Takes a
 *   value in [0 and 1), where 0 creates two full circles, 0.5 create two half
 *   circles.
 * @param {Number} parameters.seed - Seed for the random number generator.
 * @returns {{
 *     values: Array[];
 *     labels: String[];
 *     columns: String[];
 *     statistics: Object;
 * }}
 *   - The final moons dataset.
 */
export default function moons({
    N = 400,
    noise = 0,
    open = 0.5,
    seed = 4711,
} = {}) {
    const R = new Randomizer(seed);
    const N_alpha = Math.floor(N / 2);
    const N_beta = N - N_alpha;

    const scale = scaleLinear([0, 1], [open / 2, 1 - open / 2]);
    let values = new Array(N);
    const labels = new Array(N);
    const columns = ["moon_X", "moon_Y", "moon_Z"];
    for (let i = 0; i < N_alpha; ++i) {
        const alpha = TAU * scale(i / N_alpha) - TAU / 4;
        const x = Math.sin(alpha) - 0.5;
        const y = Math.cos(alpha);
        const z = 0;
        values[i] = [x, y, z];
        labels[i] = "α";
    }
    for (let i = 0; i < N_beta; ++i) {
        const alpha = TAU * scale(i / N_beta) - TAU / 4;
        const x = 1 - Math.sin(alpha) - 0.5;
        const y = 0;
        const z = 1 - Math.cos(alpha) - 1;
        values[i + N_alpha] = [x, y, z];
        labels[i + N_alpha] = "β";
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

export const MOONS = moons();
