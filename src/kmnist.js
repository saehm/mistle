import { Randomizer } from "@saehrimnir/druidjs";
import { getStatistics, parse_openml_mnist_data } from "./utils.js";
import { default as fetch_openml } from "./openml.js";

const KMNIST_LABELS_DICT = {
    0: "お",
    1: "き",
    2: "す",
    3: "つ",
    4: "な",
    5: "は",
    6: "ま",
    7: "や",
    8: "れ",
    9: "を"
}

/**
 * Downloads and samples the Kuzushiji-MNIST dataset.
 * @param {Object} parameters
 * @param {Number} [N = 400] - Number of points.
 * @param {Number} [seed = 4711] - Seed for the random number generator.
 * @param {Array<Number>} [items = [0,1,2,3,4,5,6,7,8,9]] - Filter for which items end up in the final dataset.
 * @param {String} [api_key = null] - API key for OpenML.
 * @returns {{values: Array<Array>, labels: Array<String>, columns: Array<String>, statistics: Object}} - The final Kuzushiji-MNIST dataset sample.
 * @see{@link{https://arxiv.org/abs/1812.01718}}
 */
export default async function({N = 400, seed = 4711, letters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], api_key} = {}) {
    const R = new Randomizer(seed);
    const { raw_data, description } = await fetch_openml(41982, api_key);
    const { all_values, all_labels } = parse_openml_mnist_data(raw_data, value => +value / 255);

    const n = Math.floor(N / letters.length);
    const number_digits = Array.from({length: letters.length}, () => n)
    number_digits[0] += (N - (n * letters.length));
    
    const indices = all_labels.map((_, i) => i);
    const filtered_indices = letters.map(digit => indices.filter(i => all_labels[i] == digit));
    const selected_indices = number_digits.map((n, i) => R.choice(filtered_indices[i], n)).flat();
    const values = [];
    const labels = []
    for (const i of selected_indices) {
        values.push(all_values[i]);
        labels.push(KMNIST_LABELS_DICT[all_labels[i]]);
    }
    const columns = Array.from({length: 28 * 28}, (_, i) => `pixel_at_${i % 28}_${Math.floor(i / 28)}`);
    return {values, labels, columns, statistics: getStatistics({values, columns}), description};
}
