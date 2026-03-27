import WINE_RAW from "../dataset/wine.json" with { type: "json" };

export default function wine({ normalize = false } = {}) {
    if (normalize === false) {
        return WINE_RAW;
    } else {
        const stats = /** @type {Record<string, {min: number, max: number}>} */ (WINE_RAW.statistics);
        const values = WINE_RAW.values.map((row) => {
            return row.map(
                (v, i) =>
                    (v - stats[WINE_RAW.columns[i]].min) /
                    (stats[WINE_RAW.columns[i]].max -
                        stats[WINE_RAW.columns[i]].min),
            );
        });
        return { ...WINE_RAW, values };
    }
}
