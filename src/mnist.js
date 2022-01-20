import { Randomizer } from "@saehrimnir/druidjs";
import { getStatistics, fetch_data } from "./utils.js";

const MNIST_TRAIN_VALUES_URL = "https://storage.googleapis.com/cvdf-datasets/mnist/train-images-idx3-ubyte.gz" // "http://yann.lecun.com/exdb/mnist/train-images-idx3-ubyte.gz"
const MNIST_TRAIN_LABELS_URL = "https://storage.googleapis.com/cvdf-datasets/mnist/train-labels-idx1-ubyte.gz" // "http://yann.lecun.com/exdb/mnist/train-labels-idx1-ubyte.gz"
const MNIST_TEST_VALUES_URL = "https://storage.googleapis.com/cvdf-datasets/mnist/t10k-images-idx3-ubyte.gz";
const MNIST_TEST_LABELS_URL = "https://storage.googleapis.com/cvdf-datasets/mnist/t10k-labels-idx1-ubyte.gz";

/**
 * Downloads and samples the MNIST dataset.
 * @param {Object} parameters
 * @param {Number} [N = 400] - Number of points.
 * @param {Number} [seed = 4711] - Seed for the random number generator.
 * @param {Array<Number>} [digits = [0,1,2,3,4,5,6,7,8,9]] - Filter for which digits end up in the final dataset.
 * @param {Boolean} [big = false] - If big is false, then it downloads the test dataset, if big is true, then it downloads the training dataset.
 * @returns {{values: Array<Array>, labels: Array<String>, columns: Array<String>, statistics: Object}} - The final MNIST dataset sample.
 */
export default async function({N = 400, seed = 4711, digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], big = false} = {}) {
    const R = new Randomizer(seed);
    const raw_values = await fetch_data(big ? MNIST_TRAIN_VALUES_URL : MNIST_TEST_VALUES_URL);
    const raw_labels = await fetch_data(big ? MNIST_TRAIN_LABELS_URL : MNIST_TEST_LABELS_URL);

    let all_labels = []
    for (let i = 0; i < (big ? 60000 : 10000); ++i) {
        all_labels[i] = raw_labels[8 + i];
    }

    const n = Math.floor(N / digits.length);
    const number_digits = Array.from({length: digits.length}, () => n)
    number_digits[0] += (N - (n * digits.length));
    
    const indices = Array.from({length: (big ? 60000 : 10000)}, (_, i) => i);
    const filtered_indices = digits.map(digit => indices.filter(i => all_labels[i] == digit));
    const selected_indices = number_digits.map((n, i) => R.choice(filtered_indices[i], n)).flat();
    const values = [];
    const labels = []
    for (const i of selected_indices) {
        const data_row = new Array(28 * 28);
        for (let j = 0; j < 28 * 28; ++j) {
            data_row[j] = (raw_values[16 + i * (28 * 28) + j]) / 255;
        }
        values.push(data_row);
        labels.push(raw_labels[8 + i]);
    }
    const columns = Array.from({length: 28 * 28}, (_, i) => `pixel_at_${i % 28}_${Math.floor(i / 28)}`);
    return {values, labels, columns, statistics: getStatistics({values, columns})};
}