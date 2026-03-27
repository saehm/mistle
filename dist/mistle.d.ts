declare function wine({ normalize }?: {
    normalize?: boolean | undefined;
}): {
    values: number[][];
    labels: number[];
    columns: string[];
    statistics: {
        Alcohol: {
            count: number;
            mean: number;
            std: number;
            min: number;
            "25%": number;
            "50%": number;
            "75%": number;
            max: number;
        };
        "Malic acid": {
            count: number;
            mean: number;
            std: number;
            min: number;
            "25%": number;
            "50%": number;
            "75%": number;
            max: number;
        };
        Ash: {
            count: number;
            mean: number;
            std: number;
            min: number;
            "25%": number;
            "50%": number;
            "75%": number;
            max: number;
        };
        "Alcalinity of ash": {
            count: number;
            mean: number;
            std: number;
            min: number;
            "25%": number;
            "50%": number;
            "75%": number;
            max: number;
        };
        Magnesium: {
            count: number;
            mean: number;
            std: number;
            min: number;
            "25%": number;
            "50%": number;
            "75%": number;
            max: number;
        };
        "Total phenols": {
            count: number;
            mean: number;
            std: number;
            min: number;
            "25%": number;
            "50%": number;
            "75%": number;
            max: number;
        };
        Flavanoids: {
            count: number;
            mean: number;
            std: number;
            min: number;
            "25%": number;
            "50%": number;
            "75%": number;
            max: number;
        };
        "Nonflavanoid phenols": {
            count: number;
            mean: number;
            std: number;
            min: number;
            "25%": number;
            "50%": number;
            "75%": number;
            max: number;
        };
        Proanthocyanins: {
            count: number;
            mean: number;
            std: number;
            min: number;
            "25%": number;
            "50%": number;
            "75%": number;
            max: number;
        };
        "Color intensity": {
            count: number;
            mean: number;
            std: number;
            min: number;
            "25%": number;
            "50%": number;
            "75%": number;
            max: number;
        };
        Hue: {
            count: number;
            mean: number;
            std: number;
            min: number;
            "25%": number;
            "50%": number;
            "75%": number;
            max: number;
        };
        "OD280/OD315 of diluted wines": {
            count: number;
            mean: number;
            std: number;
            min: number;
            "25%": number;
            "50%": number;
            "75%": number;
            max: number;
        };
        Proline: {
            count: number;
            mean: number;
            std: number;
            min: number;
            "25%": number;
            "50%": number;
            "75%": number;
            max: number;
        };
    };
};

/**
 * Fetches data from openml.org
 *
 * @param {number} id - Data ID from openml.org
 * @param {string} [api_key] - Your api-key
 * @returns {Promise<{raw_data: string, description: object}>} Raw data as string, and the dataset description provided by openml.org.
 */
declare function fetch_openml(id: number, api_key?: string): Promise<{
    raw_data: string;
    description: object;
}>;

type Statistics = {
    min: number;
    max: number;
    mean: number;
    std: number;
};
type MistleDataset = {
    /**
     * - Array of feature vectors.
     */
    values: number[][];
    /**
     * - Class or group label for each row.
     */
    labels: (string | number)[];
    /**
     * - Feature names.
     */
    columns: string[];
    /**
     * - Lazily computed per-column statistics.
     */
    statistics: () => Record<string, Statistics>;
};

/**
 * Downloads and samples the MNIST dataset.
 *
 * @param {{N?: number, seed?: number, digits?: number[], api_key?: string}} [parameters={}]
 *   N: number of points (default 400), seed: RNG seed (default 4711),
 *   digits: which digits to include (default 0-9), api_key: OpenML API key.
 * @returns {Promise<import("./utils.js").MistleDataset & {description: object}>} The final MNIST dataset sample.
 */
declare function _default$2({ N, seed, digits, api_key, }?: {
    N?: number;
    seed?: number;
    digits?: number[];
    api_key?: string;
}): Promise<MistleDataset & {
    description: object;
}>;

/**
 * Downloads and samples the FMNIST dataset.
 *
 * @param {{N?: number, seed?: number, items?: number[], api_key?: string}} [parameters={}]
 *   N: number of points (default 400), seed: RNG seed (default 4711),
 *   items: which item classes to include (default 0-9), api_key: OpenML API key.
 * @returns {Promise<import("./utils.js").MistleDataset & {description: object}>} The final FMNIST dataset sample.
 */
declare function _default$1({ N, seed, items, api_key, }?: {
    N?: number;
    seed?: number;
    items?: number[];
    api_key?: string;
}): Promise<MistleDataset & {
    description: object;
}>;

/**
 * Downloads and samples the Kuzushiji-MNIST dataset.
 *
 * @param {{N?: number, seed?: number, letters?: number[], api_key?: string}} [parameters={}]
 *   N: number of points (default 400), seed: RNG seed (default 4711),
 *   letters: which kana classes to include (default 0-9), api_key: OpenML API key.
 * @returns {Promise<import("./utils.js").MistleDataset & {description: object}>} The final Kuzushiji-MNIST dataset sample.
 * @see {@link https://arxiv.org/abs/1812.01718}
 */
declare function _default({ N, seed, letters, api_key, }?: {
    N?: number;
    seed?: number;
    letters?: number[];
    api_key?: string;
}): Promise<MistleDataset & {
    description: object;
}>;

declare let names$d: string[];
declare let values$e: number[][];
declare let labels$e: string[];
declare let columns$e: string[];


declare const export_default$e: {
  names: typeof names$d;
  values: typeof values$e;
  labels: typeof labels$e;
  columns: typeof columns$e;
};

declare let names$c: string[];
declare let values$d: number[][];
declare let labels$d: string[];
declare let columns$d: string[];


declare const export_default$d: {
  names: typeof names$c;
  values: typeof values$d;
  labels: typeof labels$d;
  columns: typeof columns$d;
};

declare let names$b: string[];
declare let labels$c: string[];
declare let columns$c: string[];
declare let values$c: number[][];
declare namespace statistics$4 {
    let sepallength: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    let sepalwidth: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    let petallength: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    let petalwidth: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
}


declare const export_default$c: {
  names: typeof names$b;
  labels: typeof labels$c;
  columns: typeof columns$c;
  values: typeof values$c;
  statistics: typeof statistics$4;
};

declare let names$a: string[];
declare let values$b: number[][];
declare let labels$b: string[];
declare let columns$b: string[];


declare const export_default$b: {
  names: typeof names$a;
  values: typeof values$b;
  labels: typeof labels$b;
  columns: typeof columns$b;
};

declare let names$9: string[];
declare let values$a: number[][];
declare let labels$a: string[];
declare let columns$a: string[];


declare const export_default$a: {
  names: typeof names$9;
  values: typeof values$a;
  labels: typeof labels$a;
  columns: typeof columns$a;
};

declare let names$8: string[];
declare let labels$9: string[];
declare let columns$9: string[];
declare let values$9: number[][];
declare let statistics$3: {
    Dwellings_without_basic_facilities: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    Housing_expenditure: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    Rooms_per_person: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    Household_net_adjusted_disposable_income: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    Household_net_financial_wealth: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    Labour_market_insecurity: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    Employment_rate: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    "Long-term_unemployment_rate": {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    Personal_earnings: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    Quality_of_support_network: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    Educational_attainment: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    Student_skills: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    Years_in_education: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    Air_pollution: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    Water_quality: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    Stakeholder_engagement_for_developing_regulations: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    Voter_turnout: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    Life_expectancy: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    "Self-reported_health": {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    Life_satisfaction: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    Feeling_safe_walking_alone_at_night: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    Homicide_rate: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    Employees_working_very_long_hours: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    Time_devoted_to_leisure_and_personal_care: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
};


declare const export_default$9: {
  names: typeof names$8;
  labels: typeof labels$9;
  columns: typeof columns$9;
  values: typeof values$9;
  statistics: typeof statistics$3;
};

declare let names$7: string[];
declare let values$8: number[][];
declare let labels$8: string[];
declare let columns$8: string[];


declare const export_default$8: {
  names: typeof names$7;
  values: typeof values$8;
  labels: typeof labels$8;
  columns: typeof columns$8;
};

declare let names$6: string[];
declare let labels$7: string[];
declare let columns$7: string[];
declare let values$7: number[][];
declare namespace statistics$2 {
    let danceability: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    let popularity: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    let energy: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    let acousticness: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    let instrumentalness: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    let liveness: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    let valence: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
}


declare const export_default$7: {
  names: typeof names$6;
  labels: typeof labels$7;
  columns: typeof columns$7;
  values: typeof values$7;
  statistics: typeof statistics$2;
};

declare let names$5: string[];
declare let values$6: number[][];
declare let labels$6: string[];
declare let columns$6: string[];


declare const export_default$6: {
  names: typeof names$5;
  values: typeof values$6;
  labels: typeof labels$6;
  columns: typeof columns$6;
};

declare let names$4: number[];
declare let labels$5: number[];
declare let columns$5: string[];
declare let values$5: number[][];
declare namespace statistics$1 {
    let x: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    let y: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    let z: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
}


declare const export_default$5: {
  names: typeof names$4;
  labels: typeof labels$5;
  columns: typeof columns$5;
  values: typeof values$5;
  statistics: typeof statistics$1;
};

declare let names$3: string[];
declare let values$4: number[][];
declare let labels$4: string[];
declare let columns$4: string[];


declare const export_default$4: {
  names: typeof names$3;
  values: typeof values$4;
  labels: typeof labels$4;
  columns: typeof columns$4;
};

declare let values$3: number[][];
declare let labels$3: number[];
declare let columns$3: string[];
declare let statistics: {
    Alcohol: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    "Malic acid": {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    Ash: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    "Alcalinity of ash": {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    Magnesium: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    "Total phenols": {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    Flavanoids: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    "Nonflavanoid phenols": {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    Proanthocyanins: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    "Color intensity": {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    Hue: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    "OD280/OD315 of diluted wines": {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
    Proline: {
        count: number;
        mean: number;
        std: number;
        min: number;
        "25%": number;
        "50%": number;
        "75%": number;
        max: number;
    };
};


declare const export_default$3: {
  values: typeof values$3;
  labels: typeof labels$3;
  columns: typeof columns$3;
  statistics: typeof statistics;
};

declare let names$2: string[];
declare let values$2: number[][];
declare let labels$2: string[];
declare let columns$2: string[];


declare const export_default$2: {
  names: typeof names$2;
  values: typeof values$2;
  labels: typeof labels$2;
  columns: typeof columns$2;
};

declare let names$1: string[];
declare let values$1: number[][];
declare let labels$1: string[];
declare let columns$1: string[];


declare const export_default$1: {
  names: typeof names$1;
  values: typeof values$1;
  labels: typeof labels$1;
  columns: typeof columns$1;
};

declare let names: string[];
declare let values: number[][];
declare let labels: string[];
declare let columns: string[];


declare const export_default: {
  names: typeof names;
  values: typeof values;
  labels: typeof labels;
  columns: typeof columns;
};

/**
 * Creates a uniform grid in 2d and adds a third dimensions by sin(x *
 * {@link freq_x}) * cos(y * {@link freq_y}) * {@link amplitude}.
 *
 * @param {Object} parameters
 * @param {number} [parameters.N=400] - Number of points. Default is `400`
 * @param {number} [parameters.freq_x=1] - Multiplicator for sin in the x-direction. Default is `1`
 * @param {number} [parameters.freq_y=1] - Multiplicator for cos in the y-direction. Default is `1`
 * @param {number} [parameters.amplitude=2] - Amplitude for z-direction. Default is `2`
 * @param {number} [parameters.noise=0] - Add uniform noise to each point at each direction. Default is `0`
 * @param {number} [parameters.seed=4711] - Seed for the random number generator. Default is `4711`
 * @returns {import("./utils.js").MistleDataset} The final waves dataset.
 */
declare function waves({ N, freq_x, freq_y, amplitude, noise, seed, }?: {
    N?: number | undefined;
    freq_x?: number | undefined;
    freq_y?: number | undefined;
    amplitude?: number | undefined;
    noise?: number | undefined;
    seed?: number | undefined;
}): MistleDataset;
declare const WAVES: MistleDataset;

/**
 * Creates a swissroll.
 *
 * @param {Object} parameters
 * @param {number} [parameters.N=400] - Number of points.
 * @param {number} [parameters.alpha_start=1] - Angle from which the swissroll starts.
 * @param {number} [parameters.alpha_end=2.5] - Angle at which the swissroll ends.
 * @param {number} [parameters.noise=0] - Add uniform noise to each point at each direction.
 * @param {number} [parameters.width=20] - Width of the swissroll.
 * @param {number} [parameters.seed=4711] - Seed for the random number generator.
 * @param {number} [parameters.num_labels=8] - Number of labels for the swissroll,
 *   partitions the swissroll in num_labels parts according to the angle.
 * @returns {import("./utils.js").MistleDataset} The final swissroll dataset.
 */
declare function swissroll({ N, alpha_start, alpha_end, noise, width, seed, num_labels, }?: {
    N?: number | undefined;
    alpha_start?: number | undefined;
    alpha_end?: number | undefined;
    noise?: number | undefined;
    width?: number | undefined;
    seed?: number | undefined;
    num_labels?: number | undefined;
}): MistleDataset;
declare const SWISSROLL: MistleDataset;

/**
 * Creates a s-shape.
 *
 * @param {Object} parameters
 * @param {number} [parameters.N=400] - Number of points.
 * @param {number} [parameters.noise=0] - Add uniform noise to each point at each direction.
 * @param {number} [parameters.width=20] - Width of the s-shape.
 * @param {number} [parameters.seed=4711] - Seed for the random number generator.
 * @param {number} [parameters.num_labels=8] - Number of labels for the s-shape,
 *   partitions the s-shape in num_labels parts according to the angle.
 * @returns {import("./utils.js").MistleDataset} The final s-shape dataset.
 */
declare function sshape({ N, noise, width, seed, num_labels, }?: {
    N?: number | undefined;
    noise?: number | undefined;
    width?: number | undefined;
    seed?: number | undefined;
    num_labels?: number | undefined;
}): MistleDataset;
declare const SSHAPE: MistleDataset;

/**
 * Creates a rays dataset consisting of {@link parameters.D} rays.
 *
 * @param {Object} parameters
 * @param {number} [parameters.N=400] - Roughly the number of points, uses round(N / D) * D. Default is `400`
 * @param {number} [parameters.D=7] - Number of rays and dimensionality of the result. Default is `7`
 * @param {number} [parameters.noise=0] - Add uniform noise to each point at each direction. Default is `0`
 * @param {boolean} [parameters.touching=true] - Whether the rays touch each other at the origin. Default is `true`
 * @param {number} [parameters.length=12] - Length of each ray. Default is `12`
 * @param {number} [parameters.seed=4711] - Seed for the random number generator. Default is `4711`
 * @returns {import("./utils.js").MistleDataset} The final rays dataset.
 */
declare function rays({ N, D, noise, touching, length, seed, }?: {
    N?: number | undefined;
    D?: number | undefined;
    noise?: number | undefined;
    touching?: boolean | undefined;
    length?: number | undefined;
    seed?: number | undefined;
}): MistleDataset;
declare const RAYS: MistleDataset;

/**
 * Creates a 'moons' dataset consisting of two intersecting circles.
 *
 * @param {Object} parameters
 * @param {number} [parameters.N=400] - Number of points.
 * @param {number} [parameters.noise=0] - Add uniform noise to each point at each direction.
 * @param {number} [parameters.open=0.5] - How open the circles should be. Takes a value in
 *   [0, 1), where 0 creates two full circles, 0.5 creates two half circles.
 * @param {number} [parameters.seed=4711] - Seed for the random number generator.
 * @returns {import("./utils.js").MistleDataset} The final moons dataset.
 */
declare function moons({ N, noise, open, seed, }?: {
    N?: number | undefined;
    noise?: number | undefined;
    open?: number | undefined;
    seed?: number | undefined;
}): MistleDataset;
declare const MOONS: MistleDataset;

/**
 * Creates a dataset consisting of some gaussian blobs.
 *
 * @param {Object} parameters
 * @param {number} [parameters.N=400] - Number of points. Default is `400`
 * @param {number} [parameters.D=3] - Dimensionality of the dataset. Default is
 *   `3`
 * @param {number[][] | number} [parameters.centers=3] - Either number of blobs,
 *   or their centers. Default is `3`
 * @param {number[][] | number} [parameters.deviations=1] - If a number given
 *   the deviation of the blobs in each dimension, else an array consisting the
 *   deviations for all blobs for all directions. Default is `1`
 * @param {number} [parameters.seed=4711] - Seed for the random number
 *   generator. Default is `4711`
 * @returns {import("./utils.js").MistleDataset} The final blobs dataset.
 */
declare function blobs({ N, D, centers, deviations, seed, }?: {
    N?: number | undefined;
    D?: number | undefined;
    centers?: number | number[][] | undefined;
    deviations?: number | number[][] | undefined;
    seed?: number | undefined;
}): MistleDataset;
declare const BLOBS: MistleDataset;

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
declare function penguins({ removeMissingValues }?: {
    removeMissingValues?: false | "all" | "values";
}): MistleDataset & {
    sex: string[];
    year: number[];
    island: string[];
};
declare const PENGUINS: MistleDataset & {
    sex: string[];
    year: number[];
    island: string[];
};

declare const version: string;

export { BLOBS, export_default$e as ECOLI, export_default$d as ECOLI_CONT, export_default$b as GLASS, export_default$a as IONO, export_default$c as IRIS, export_default$5 as MAMMOTH, MOONS, export_default$9 as OECD, PENGUINS, RAYS, export_default$8 as SEGMENT, export_default$6 as SONAR, export_default$7 as SPOTIFY, SSHAPE, SWISSROLL, export_default$4 as THY, export_default$1 as VEHICLE, export_default as VOWELS, WAVES, export_default$3 as WINE, export_default$2 as YEAST, blobs, _default$1 as fetch_fmnist, _default as fetch_kmnist, _default$2 as fetch_mnist, fetch_openml, moons, penguins, rays, sshape, swissroll, version, waves, wine };
