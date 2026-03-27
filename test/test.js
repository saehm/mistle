//const test = require("tape");
//const datasets = require("../dist/dataset.js");
import { test } from "tape";
import * as datasets from "../src/main.js";

["swissroll", "waves", "sshape", "moons"].forEach((dataset) => {
    test(dataset, (t) => {
        const { values, columns, labels } = datasets[dataset]();
        testValues(t, values, 400, 3);
        testColumns(t, columns, 3);
        testLabels(t, labels, 400);
        t.end();
    });
});

test("rays", (t) => {
    for (let D = 2; D < 10; ++D) {
        const { values, columns, labels } = datasets.rays({ D });
        testValues(t, values, Math.round(400 / D) * D, D);
        testColumns(t, columns, D);
        testLabels(t, labels, Math.round(400 / D) * D);
    }
    t.end();
});

if (false) {
    ["fetch_mnist", "fetch_fmnist", "fetch_kmnist"].forEach((dataset) => {
        test(dataset, async (t) => {
            const { values, columns, labels } = await datasets[dataset]({
                digits: [2, 3],
                items: [6, 7],
                big: false,
            });
            testValues(t, values, 400, 28 * 28);
            testColumns(t, columns, 28 * 28);
            testLabels(t, labels, 400);
            // draws some digits in the console
            for (let i = 0; i < 2; ++i) {
                const digit = values[i];
                let str = "";
                for (let j = 0; j < 28; ++j) {
                    for (let k = 0; k < 28; ++k) {
                        if (digit[j * 28 + k] == 0) {
                            str += ".";
                        } else if (digit[j * 28 + k] < 0.5) {
                            str += "+";
                        } else {
                            str += "#";
                        }
                    }
                    str += "\n";
                }
                console.log(str, "\n", labels[i]);
            }
            t.end();
        });
    });
}

const dataset_infos = {
    IRIS: {
        N: 150,
        D: 4,
    },
    SPOTIFY: {
        N: 308,
        D: 7,
    },
    OECD: {
        N: 38,
        D: 24,
    },
    SSHAPE: {
        N: 400,
        D: 3,
    },
    SWISSROLL: {
        N: 400,
        D: 3,
    },
    WAVES: {
        N: 400,
        D: 3,
    },
    WINE: {
        N: 178,
        D: 13,
    },
};

["IRIS", "SPOTIFY", "OECD", "SSHAPE", "SWISSROLL", "WAVES", "WINE"].forEach(
    (dataset) => {
        test(dataset, (t) => {
            const { N, D } = dataset_infos[dataset];
            const { values, columns, labels } = datasets[dataset];
            testValues(t, values, N, D);
            testColumns(t, columns, D);
            testLabels(t, labels, N);
            t.end();
        });
    },
);

test("blobs", (t) => {
    const { values, columns, labels } = datasets.blobs({
        N: 400,
        D: 2,
        centers: 6,
    });
    testValues(t, values, 400, 2);
    testColumns(t, columns, 2);
    testLabels(t, labels, 400);
    t.equals(new Set(labels).size, 6, "right number of distinct labels");
    t.end();
});

test("blobs errors", (t) => {
    t.throws(
        () => datasets.blobs({ centers: "invalid" }),
        /Error/,
        "throws for invalid centers type",
    );
    t.throws(
        () => datasets.blobs({ centers: [[0, 0], [1, 1]], deviations: [1, 2, 3] }),
        /Error/,
        "throws when deviations length mismatches centers",
    );
    t.end();
});

test("wine normalize", (t) => {
    const raw = datasets.wine();
    const normalized = datasets.wine({ normalize: true });
    t.equals(normalized.values.length, raw.values.length, "same number of rows");
    t.equals(normalized.columns.length, raw.columns.length, "same number of columns");
    let inRange = true;
    for (const row of normalized.values) {
        for (const v of row) {
            if (v < -1e-10 || v > 1 + 1e-10) inRange = false;
        }
    }
    t.ok(inRange, "all normalized values in [0, 1]");
    t.notDeepEquals(normalized.values[0], raw.values[0], "normalized values differ from raw");
    t.end();
});

test("statistics", (t) => {
    const datasets_with_statistics = [
        datasets.swissroll(),
        datasets.waves(),
        datasets.sshape(),
        datasets.moons(),
        datasets.blobs(),
        datasets.penguins(),
    ];
    for (const ds of datasets_with_statistics) {
        const stats = ds.statistics();
        t.ok(typeof stats === "object" && stats !== null, "statistics() returns an object");
        for (const col of ds.columns) {
            t.ok(col in stats, `statistics has key for column "${col}"`);
            const s = stats[col];
            t.ok(Number.isFinite(s.mean), `mean is finite for "${col}"`);
            t.ok(Number.isFinite(s.std) && s.std >= 0, `std is non-negative finite for "${col}"`);
            t.ok(Number.isFinite(s.min), `min is finite for "${col}"`);
            t.ok(Number.isFinite(s.max), `max is finite for "${col}"`);
            t.ok(s.min <= s.max, `min <= max for "${col}"`);
        }
        // std > 0 for any non-constant column proves the variance formula is correct
        const anyNonZeroStd = ds.columns.some((col) => stats[col].std > 0);
        t.ok(anyNonZeroStd, "at least one column has std > 0");
    }
    t.end();
});

function testLabels(t, labels, N) {
    t.equals(labels.length, N, "right amount of labels");
}

function testValues(t, values, N, D) {
    if (N) t.equals(values.length, N, "right number of rows");
    let all_numbers = true;
    for (const value of values.flat()) {
        all_numbers = all_numbers && !isNaN(value);
    }
    t.ok(all_numbers, "all numbers valid!");
}

function testColumns(t, columns, D) {
    t.equals(columns.length, D, "right amount of columns");
}

test("penguins", (t) => {
    const { values, columns, labels, sex, year, island } = datasets.penguins({
        removeMissingValues: "values",
    });
    const N = values.length;
    testValues(t, values);
    testLabels(t, labels, N);
    testLabels(t, sex, N);
    testLabels(t, year, N);
    testLabels(t, island, N);
    testColumns(t, columns, 4);
    t.end();
});
