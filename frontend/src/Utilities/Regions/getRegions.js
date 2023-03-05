import axios from "axios";
import { URL } from "./URL";

export const getRegions = () => {
  return axios
    .get(`${URL}`)
    .then((response) => response.data.data)
    .catch((err) => console.log(err));
};

export const getFishingLocations = (path) => {
  return axios
    .get(`${URL}/${path}`)
    .then((response) => response.data.data)
    .catch((err) => console.log(err));
};

export const getLocById = (_id, path) => {
  return axios
    .get(`${URL}/${path}/${_id}`)
    .then((response) => response.data.data)
    .catch((err) => console.log(err));
};

export const postNewData = (title, description) => {
  return axios
    .post("/user", {
      firstName: "Fred",
      lastName: "Flintstone",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
