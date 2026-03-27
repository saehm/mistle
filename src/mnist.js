import { Randomizer } from "@saehrimnir/druidjs";
import { getStatistics, parse_openml_mnist_data } from "./utils.js";
import { default as fetch_openml } from "./openml.js";

/**
 * Downloads and samples the MNIST dataset.
 *
 * @param {{N?: number, seed?: number, digits?: number[], api_key?: string}} [parameters={}]
 * @param {number} [parameters.N=400] - Number of points. Default is `400`
 * @param {number} [parameters.seed=4711] - Seed for the random number generator. Default is `4711`
 * @param {number[]} [parameters.digits=[0,1,2,3,4,5,6,7,8,9]] - Filter for which digits
 *   end up in the final dataset. Default is `[0,1,2,3,4,5,6,7,8,9]`
 * @param {string} [parameters.api_key] - API key for OpenML.
 * @returns {Promise<import("./utils.js").MistleDataset & {description: object}>} The final MNIST dataset sample.
 */
export default async function ({
    N = 400,
    seed = 4711,
    digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    api_key,
} = {}) {
    const R = new Randomizer(seed);
    const { raw_data, description } = await fetch_openml(554, api_key);
    const { all_values, all_labels } = parse_openml_mnist_data(
        raw_data,
        (value) => +value / 255,
    );

    const n = Math.floor(N / digits.length);
    const number_digits = Array.from({ length: digits.length }, () => n);
    number_digits[0] += N - n * digits.length;

    const indices = all_labels.map((_, i) => i);
    const filtered_indices = digits.map((digit) =>
        indices.filter((i) => all_labels[i] == digit),
    );
    const selected_indices = number_digits
        .map((n, i) => R.choice(filtered_indices[i], n))
        .flat();
    const values = [];
    const labels = [];
    for (const i of selected_indices) {
        values.push(all_values[i]);
        labels.push(all_labels[i]);
    }
    const columns = Array.from(
        { length: 28 * 28 },
        (_, i) => `pixel_at_${i % 28}_${Math.floor(i / 28)}`,
    );
    return {
        values,
        labels,
        columns,
        statistics: getStatistics({ values, columns }),
        description,
    };
}
