import { Randomizer } from "@saehrimnir/druidjs";
import { getStatistics } from "./utils.js";

/**
 * Creates a s-shape.
 * @param {Object} parameters 
 * @param {Number} parameters.N - Number of points.
 * @param {Float} parameters.noise - Add uniform noise to each point at each direction.
 * @param {Float} parameters.width - Width of the s-shape.
 * @param {Number} parameters.seed - Seed for the random number generator.
 * @param {Number} parameters.num_labels - Number of labels for the s-shape, partitions the s-shape in num_labels parts according to the angle.
 * @returns {{values: Array<Array>, labels: Array<String>, columns: Array<String>, statistics: Object}} - The final s-shape dataset.
 */
export default function sshape({N = 400, noise = 0, width = 20, seed = 4711, num_labels = 8} = {}) {
    const R = new Randomizer(seed);
    let values = new Array(N);
    const labels = new Array(N);
    const columns = ["X", "Y", "Z"];
    for (let i = 0; i < N; ++i) {
        const alpha = 3 * Math.PI * (i / N - .5)
        const x = -Math.sin(alpha);
        const y = Math.sign(alpha) * (Math.cos(alpha) - 1);
        const z = width * R.random - width / 2;
        values[i] = [x, y, z];
        labels[i] = Math.floor(i / (N / num_labels));
    }
    if (noise > 0) {
        values = values.map((row) => {
            return row.map(value => value + R.random * noise);
        })
    }
    
    return {values, labels, columns, statistics: getStatistics({values, columns})};
}

export const SSHAPE = sshape();