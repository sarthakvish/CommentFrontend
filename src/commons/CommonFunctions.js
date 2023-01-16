import axios from "axios";
import { BASE_URL } from "../constants/apiurl";

export function getHeaders() {
  return {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("x-access-token"),
  };
}
// Functions for API calling
export async function apiGetCallRequest(url, header) {
  return await axios.get(BASE_URL + url, {
    headers: {
      "Content-Type": `${header.Content_type}`,
      // Authorization: `Bearer ${header.Authorization}`,
    },
  });
}

export async function apiDeleteCallRequest(url, header) {
  return await axios.delete(BASE_URL + url, {
    headers: {
      "Content-Type": `${header.Content_type}`,
    },
  });
}

export async function apiPostCallRequest(url, comment, config) {
  console.log("post ca;;", comment);
  return await axios.post(BASE_URL + url , comment, config);
}

