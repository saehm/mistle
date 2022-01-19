import { Randomizer } from "@saehrimnir/druidjs";
import { getStatistics, TAU } from "./utils.js";

/**
 * Creates a swissroll.
 * @param {Object} parameters 
 * @param {Number} parameters.N - Number of points.
 * @param {Float} parameters.alpha_start - Angle from which the swissroll starts.
 * @param {Float} parameters.alpha_end - Angle at which the swissroll ends.
 * @param {Float} parameters.noise - Add uniform noise to each point at each direction.
 * @param {Float} parameters.width - Width of the swissroll.
 * @param {Number} parameters.seed - Seed for the random number generator.
 * @param {Number} parameters.num_labels - Number of labels for the swissroll, partitions the swissroll in num_labels parts according to the angle.
 * @returns {{values: Array<Array>, labels: Array<String>, columns: Array<String>, statistics: Object}} - The final swissroll dataset.
 */
export default function swissroll({N = 400, alpha_start = 1, alpha_end = 2.5, noise = 0, width = 20, seed = 4711, num_labels = 8} = {}) {
    const R = new Randomizer(seed);
    let values = new Array(N);
    const labels = new Array(N);
    const columns = ["X", "Y", "Z"];
    for (let i = 0; i < N; ++i) {
        const alpha = (alpha_start + (i / N * (alpha_end - alpha_start))) * TAU;
        const x = alpha * Math.cos(alpha);
        const y = alpha * Math.sin(alpha);
        const z = width * R.random - width / 2;
        values[i] = [x, y, z];
        labels[i] = Math.floor(i / Math.floor(N / num_labels));
    }
    if (noise > 0) {
        values = values.map((row) => {
            return row.map(value => value + R.random * noise);
        })
    }
    
    return {values, labels, columns, statistics: getStatistics({values, labels, columns})};
}

export const SWISSROLL = swissroll();