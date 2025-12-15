import { default as ECOLI } from "../dataset/ecoli.json" with { type: "json" };
import { default as ECOLI_CONT } from "../dataset/ecoli_cont.json" with { type: "json" };
import { default as IRIS } from "../dataset/iris.json" with { type: "json" };
import { default as GLASS } from "../dataset/glass.json" with { type: "json" };
import { default as IONO } from "../dataset/iono.json" with { type: "json" };
import { default as OECD } from "../dataset/oecd.json" with { type: "json" };
import { default as SEGMENT } from "../dataset/segment.json" with { type: "json" };
import { default as SPOTIFY } from "../dataset/spotify.json" with { type: "json" };
import { default as SONAR } from "../dataset/sonar.json" with { type: "json" };
import { default as MAMMOTH } from "../dataset/mammoth.json" with { type: "json" };
import { default as THY } from "../dataset/thy.json" with { type: "json" };
import { default as WINE } from "../dataset/wine.json" with { type: "json" };
import { default as YEAST } from "../dataset/yeast.json" with { type: "json" };
import { default as VEHICLE } from "../dataset/vehicles.json" with { type: "json" };
import { default as VOWELS } from "../dataset/vowels.json" with { type: "json" };

export {
    ECOLI,
    ECOLI_CONT,
    IRIS,
    GLASS,
    IONO,
    OECD,
    SEGMENT,
    SPOTIFY,
    SONAR,
    MAMMOTH,
    THY,
    WINE,
    YEAST,
    VEHICLE,
    VOWELS,
};

export { default as waves, WAVES } from "./waves.js";
export { default as swissroll, SWISSROLL } from "./swissroll.js";
export { default as sshape, SSHAPE } from "./sshape.js";
export { default as rays, RAYS } from "./rays.js";
export { default as moons, MOONS } from "./moons.js";
export { default as blobs, BLOBS } from "./blobs.js";
export { default as penguins, PENGUINS } from "./penguins.js";
export { default as wine } from "./wine.js";

export { default as fetch_openml } from "./openml.js";
export { default as fetch_mnist } from "./mnist.js";
export { default as fetch_fmnist } from "./fmnist.js";
export { default as fetch_kmnist } from "./kmnist.js";

import meta from "../package.json" with { type: "json" };
const version = meta.version;
export { version };
