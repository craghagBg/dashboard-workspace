import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/pairs";

export function getCharts() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
