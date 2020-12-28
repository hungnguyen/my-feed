import axios from "axios";
const apiKey = "e9e30730017645b7a893771bf1f2bc01";
export const get = () => {
  var url = `https://newsapi.org/v2/sources?apiKey=${apiKey}`;

  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
