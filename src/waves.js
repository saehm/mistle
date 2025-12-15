import { Randomizer } from "@saehrimnir/druidjs";
import { getStatistics } from "./utils.js";

/**
 * Creates a uniform grid in 2d and adds a third dimensions by sin(x *
 * {@link freq_x}) * cos(y * {@link freq_y}) * {@link amplitude}.
 *
 * @param {Object} parameters
 * @param {Number} [parameters.N=400] - Number of points. Default is `400`
 * @param {number} [parameters.freq_x=1] - Multiplicator for sin in the
 *   x-direction. Default is `1`
 * @param {Float} [parameters.freq_y=1] - Multiplicator for cos in the
 *   y-direction. Default is `1`
 * @param {Float} [parameters.amplitude=2] - Amplitutde for z-direction. Default
 *   is `2`
 * @param {Float} [parameters.noise=0] - Add uniform noise to each point at each
 *   direction. Default is `0`
 * @param {Number} [parameters.seed=4711] - Seed for the random number
 *   generator. Default is `4711`
 * @returns {{
 *     values: Array[];
 *     labels: String[];
 *     columns: String[];
 *     statistics: Object;
 * }}
 *   - The final waves dataset.
 */
export default function waves({
    N = 400,
    freq_x = 1,
    freq_y = 1,
    amplitude = 2,
    noise = 0,
    seed = 4711,
} = {}) {
    const R = new Randomizer(seed);
    const a = Math.ceil(Math.sqrt(N));
    let values = [];
    const labels = [];
    const columns = ["axis_1", "axis_2", "axis_3"];
    for (let i = 0; i < N; ++i) {
        let y = (i % a) / a - 0.5;
        let x = Math.floor(i / a) / a - 0.5;
        let z = Math.sin(x * freq_x) * Math.cos(y * freq_y) * amplitude;
        values.push([x, y, z]);
        labels.push(Math.floor((i / N) * 8));
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

export const WAVES = waves();
