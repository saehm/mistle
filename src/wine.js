import WINE_RAW from "../dataset/wine.json" with { type: "json" };

export default function wine({ normalize = false } = {}) {
    if (normalize === false) {
        return WINE_RAW;
    } else {
        const values = WINE_RAW.values.map((row) => {
            return row.map(
                (v, i) =>
                    (v - WINE_RAW.statistics[WINE_RAW.columns[i]].min) /
                    (WINE_RAW.statistics[WINE_RAW.columns[i]].max -
                        WINE_RAW.statistics[WINE_RAW.columns[i]].min),
            );
        });
        return { ...WINE_RAW, values };
    }
}
