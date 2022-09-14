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

export function deleteComment(vacayId, commentId) {
  return sendRequest(`${BASE_URL}/${vacayId}/comments/${commentId}`, "DELETE");
}

export function updateComment(data, vacayId, commentId) {
  return sendRequest(
    `${BASE_URL}/${vacayId}/comments/${commentId}`,
    "PUT",
    data
  );
}
