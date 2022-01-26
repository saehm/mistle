import { getStatistics } from "./utils.js";
import * as PENGUINS_RAW from "../dataset/penguins.json";

/**
 * Returns the Palmers Penguins dataset.
 * @param {Object} parameters
 * @param {false|"all"|"values"} [removeMissingValues = "all"] - Remove missing values, if "all" then remove all rows if a null is in any column. If "values", then remove rows only if only the respective row in values contains a null. If false, then no missing value gets removed.
 * @returns {{values: Array<Array>, labels: Array<String>, columns: Array<String>, sex: Array<String>, year: Array<Number>, island: Array<String>, statistics: Object}} - The final penguins dataset.
 */
export default function penguins({removeMissingValues = "all"} = {}) {
    let {values, columns, labels, sex, year, island, statistics} = PENGUINS_RAW;
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
            if (removeMissingValues == "all" || removeMissingValues == "values") {
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
    return {values, columns, labels, sex, year, island, statistics: getStatistics(values, columns)};
}

function filter(values, indices) {
    return indices.map(i => values[i]);
}

export const PENGUINS = penguins();