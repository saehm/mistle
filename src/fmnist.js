import { Randomizer } from "@saehrimnir/druidjs";
import { getStatistics, parse_openml_mnist_data } from "./utils.js";
import { default as fetch_openml } from "./openml.js";

const FMNIST_LABELS_DICT = {
    0: "T-shirt/top",
    1: "Trouser",
    2: "Pullover",
    3: "Dress",
    4: "Coat",
    5: "Sandal",
    6: "Shirt",
    7: "Sneaker",
    8: "Bag",
    9: "Ankle boot",
};

/**
 * Downloads and samples the FMNIST dataset.
 *
 * @param {Object} parameters
 * @param {Number} [N=400] - Number of points. Default is `400`
 * @param {Number} [seed=4711] - Seed for the random number generator. Default
 *   is `4711`
 * @param {Number[]} [items=[0,1,2,3,4,5,6,7,8,9]] - Filter for which items end
 *   up in the final dataset. Default is `[0,1,2,3,4,5,6,7,8,9]`
 * @param {String} [api_key=null] - API key for OpenML. Default is `null`
 * @returns {{
 *     values: Array[];
 *     labels: String[];
 *     columns: String[];
 *     statistics: Object;
 * }}
 *   - The final FMNIST dataset sample.
 */
export default async function ({
    N = 400,
    seed = 4711,
    items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    api_key,
} = {}) {
    const R = new Randomizer(seed);
    const { raw_data, description } = await fetch_openml(40996, api_key);
    const { all_values, all_labels } = parse_openml_mnist_data(
        raw_data,
        (value) => +value / 255,
    );

    const n = Math.floor(N / items.length);
    const number_digits = Array.from({ length: items.length }, () => n);
    number_digits[0] += N - n * items.length;

    const indices = all_labels.map((_, i) => i);
    const filtered_indices = items.map((digit) =>
        indices.filter((i) => all_labels[i] == digit),
    );
    const selected_indices = number_digits
        .map((n, i) => R.choice(filtered_indices[i], n))
        .flat();
    const values = [];
    const labels = [];
    for (const i of selected_indices) {
        values.push(all_values[i]);
        labels.push(FMNIST_LABELS_DICT[all_labels[i]]);
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
