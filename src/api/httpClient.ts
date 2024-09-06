import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://5fc9346b2af77700165ae514.mockapi.io",
  timeout: 3000,
});
