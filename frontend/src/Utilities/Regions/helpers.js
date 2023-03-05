import axios from "axios";
import { URL } from "./URL";
import { patchImageUrl } from "./URL";

export const getRegions = async () => {
  return await axios
    .get(`${URL}`)
    .then((response) => response.data.data)
    .catch((err) => console.log(err));
};

export const getFishingLocations = async (locPath) => {
  return await axios
    .get(`${URL}/${locPath}`)
    .then((response) => response.data.data)
    .catch((err) => console.log(err));
};

export const getLocById = async (_id, locPath) => {
  return await axios
    .get(`${URL}/${locPath}/${_id}`)
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
  locPath
) => {
  return await axios
    .post(`${URL}/${locPath}`, {
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

export const postNewImage = async (data, locPath) => {
  return await axios
    .post(`${patchImageUrl}/${locPath}`, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const patchNewImage = async ({ image }, locPath, _id) => {
  return await axios
    .patch(`${patchImageUrl}/${locPath}/${_id}`, {
      image,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
