import axios from "axios";
import { URL } from "./URL";

export const getRegions = () => {
  return axios
    .get(`${URL}`)
    .then((response) => response.data.data)
    .catch((err) => console.log(err));
};
