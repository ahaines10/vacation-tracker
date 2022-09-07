import sendRequest from "./send-request";
const BASE_URL = "/api/vacations";

export function newVacation(vacationData) {
  return sendRequest(`${BASE_URL}/new`, "POST", vacationData);
}
