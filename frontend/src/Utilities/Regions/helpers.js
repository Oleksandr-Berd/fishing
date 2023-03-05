import axios from "axios";
import { URL } from "./URL";

export const getRegions = async () => {
  return await axios
    .get(`${URL}`)
    .then((response) => response.data.data)
    .catch((err) => console.log(err));
};

export const getFishingLocations = async (path) => {
  return await axios
    .get(`${URL}/${path}`)
    .then((response) => response.data.data)
    .catch((err) => console.log(err));
};

export const getLocById = async (_id, path) => {
  return await axios
    .get(`${URL}/${path}/${_id}`)
    .then((response) => response.data.data)
    .catch((err) => console.log(err));
};

export const postNewData = async (
  {
    title,
    coordinates,
    adress,
    fishes,
    fishingConditions,
    description,
    allowedTime,
  },
  path
) => {
  return await axios
    .post(`${URL}/${path}`, {
      title,
      coordinates,
      adress,
      fishes,
      fishingConditions,
      description,
      allowedTime,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
