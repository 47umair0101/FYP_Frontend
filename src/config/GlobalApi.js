import axios from "axios";

const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const API_KEY = "AIzaSyCpKrSe0E_wkadtvY0CNWsj5_njG8zRAOI";

const nearByPlace = (latitude, longitude, type) =>
  axios.get(
    BASE_URL +
      "/nearbysearch/json?" +
      "&location=" +
      latitude +
      "," +
      longitude +
      "&radius=1500&type=" +
      type +
      "&key=" +
      API_KEY
  );

export default {
  nearByPlace,
};
