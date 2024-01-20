import axios from "axios";

export const baseUrl = "";

export const localUrl = axios.create({
  baseURL: baseUrl,
});
