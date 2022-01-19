const test = require("tape");
const datasets = require("../dist/dataset.min.js");

["swissroll", "waves", "sshape","moons"].forEach(dataset => {
    test(dataset, (t) => {
        const {values, columns, labels} = datasets[dataset]();
        testValues(t, values, 400, 3);
        testColumns(t, columns, 3);
        testLabels(t, labels, 400)
        t.end();
    })
});

test("rays", (t) => {
    for (let D = 2; D < 10; ++D) {
        const {values, columns, labels} = datasets.rays({D});
        testValues(t, values, Math.round(400 / D) * D, D);
        testColumns(t, columns, D);
        testLabels(t, labels, Math.round(400 / D) * D);
    }
    t.end();
});

["fetch_mnist", "fetch_fmnist"].forEach(dataset => {
    test(dataset, async (t) => {
        const {values, columns, labels} = await datasets[dataset]({digits: [2, 3], items: [6, 7], big: false});
        testValues(t, values, 400, 28 * 28);
        testColumns(t, columns, 28 * 28);
        testLabels(t, labels, 400);
        // draws some digits in the console
        for (let i = 0; i < 2; ++i) {
            const digit = values[i]
            let str = ""
            for (let j = 0; j < 28; ++j) {
                
                for (let k = 0; k < 28; ++k) {
                    if (digit[j * 28 + k] == 0) {
                        str += "."
                    } else if (digit[j * 28 + k] < 0.5) {
                        str += "+"
                    } else {
                        str += "#"
                    }
                }
                str += '\n'
            }
            console.log(str, '\n', labels[i])
        }
        t.end()
    })
})


const dataset_infos = {
    "IRIS": {
        N: 150, 
        D: 4,
    },
    "SPOTIFY": {
        N: 308,
        D: 7,
    },
    "OECD": {
        N: 38,
        D: 24,
    },
    "SSHAPE": {
        N: 400,
        D: 3,
    },
    "SWISSROLL": {
        N: 400,
        D: 3,
    },
    "WAVES": {
        N: 400,
        D: 3,
    }
};

["IRIS", "SPOTIFY", "OECD", "SSHAPE", "SWISSROLL", "WAVES"].forEach(dataset => {
    test(dataset, (t) => {
        const {N, D} = dataset_infos[dataset];
        const {values, columns, labels} = datasets[dataset];
        testValues(t, values, N, D);
        testColumns(t, columns, D);
        testLabels(t, labels, N);
        t.end();  
    })
});

function testLabels(t, labels, N) {
    t.equals(labels.length, N);
}

function testValues(t, values, N, D) {
    t.equals(values.length, N);
    let all_numbers = true;
    for (const value of values.flat()) {
        all_numbers = all_numbers && !isNaN(value);
    }
    t.ok(all_numbers, "all numbers valid!")
}

function testColumns(t, columns, D) {
    t.equals(columns.length, D)
}

