import { get_fetch } from "./utils.js";
const openml_main_api = "https://www.openml.org/api/v1/json/";
const openml_file_api = "https://www.openml.org/data/v1/get_csv/";

// MNIST = 554
// FMNIST = 40996
// KNNIST = 41982

/**
 * Fetches data from openml.org
 * @param {Number} id - Data ID from openml.org
 * @param {String} api_key - Your api-key
 * @returns {Object} - Raw data as string, and the dataset description provided by openml.org.
 */
export default async function fetch_openml(id, api_key) {
    let fetch = await get_fetch();

    let url = encodeURI(`${openml_main_api}data/${id}`);
    if (api_key) {
        url += `?api_key=${api_key}`;
    }
    // Fetching for file id.
    const main_response = await fetch(url);
    
    if (!main_response.ok) {
        throw Error(`${main_response.status} ${main_response.statusText}`);
    }
    const description = await main_response.json();

    // fetching the file.
    const file_response = await fetch(openml_file_api + description.data_set_description.file_id);
    if (!file_response.ok) {
        throw Error(`${file_response.status} ${file_response.statusText}`);
    }
    const raw_data = await file_response.text();


    return { raw_data, description: {} };
}