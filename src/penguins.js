import { getStatistics } from "./utils.js";
import PENGUINS_RAW from "../dataset/penguins.json" with { type: "json" };

/**
 * Returns the Palmers Penguins dataset.
 *
 * @param {{removeMissingValues?: false | "all" | "values"}} [parameters={}]
 *   removeMissingValues: `"all"` removes rows with any null (default),
 *   `"values"` removes rows only when feature values contain nulls,
 *   `false` keeps all rows.
 * @returns {import("./utils.js").MistleDataset & {
 *     sex: string[];
 *     year: number[];
 *     island: string[];
 * }} The final penguins dataset.
 */
export default function penguins({ removeMissingValues = "all" } = {}) {
    const { columns } = PENGUINS_RAW;
    /** @type {number[][]} */
    let values = /** @type {any} */ (PENGUINS_RAW.values);
    /** @type {string[]} */
    let labels = /** @type {any} */ (PENGUINS_RAW.labels);
    /** @type {string[]} */
    let sex = /** @type {any} */ (PENGUINS_RAW.sex);
    /** @type {number[]} */
    let year = /** @type {any} */ (PENGUINS_RAW.year);
    /** @type {string[]} */
    let island = /** @type {any} */ (PENGUINS_RAW.island);

    if (removeMissingValues == "all" || removeMissingValues == "values") {
        const N = values.length;
        let valid_indices = [];
        let result = true;

        for (let i = 0; i < N; ++i) {
            result = true;
            if (removeMissingValues == "all") {
                if (!year[i] || !sex[i] || !labels[i] || !island[i]) {
                    result = result && false;
                }
            }
            if (
                removeMissingValues == "all" ||
                removeMissingValues == "values"
            ) {
                for (const value of values[i]) {
                    result = result && !Number.isNaN(value);
                }
            }
            if (result == true) valid_indices.push(i);
        }

        values = filter(values, valid_indices);
        labels = filter(labels, valid_indices);
        sex = filter(sex, valid_indices);
        year = filter(year, valid_indices);
        island = filter(island, valid_indices);
    }
    // rollup removes columns from this function call
    // const statistics = getStatistics(values, PENGUINS_RAW.columns);
    return {
        values,
        columns,
        labels,
        sex,
        year,
        island,
        statistics: getStatistics({ values, columns }),
    };
}

/**
 * @template T
 * @param {T[]} values
 * @param {number[]} indices
 * @returns {T[]}
 */
function filter(values, indices) {
    return indices.map((i) => values[i]);
}

export const PENGUINS = penguins();
