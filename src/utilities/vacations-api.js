import sendRequest from "./send-request";
const BASE_URL = "/api/vacations";

export function newVacation(vacationData) {
  console.log(vacationData);
  return sendRequest(`${BASE_URL}/new`, "POST", vacationData);
}

export function getVacation() {
  console.log("getVacations");
  return sendRequest(`${BASE_URL}/`);
}

export function newComment(data, id) {
  return sendRequest(`${BASE_URL}/${id}`, "POST", data);
}
