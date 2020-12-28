import axios from "axios";
const apiKey = "e9e30730017645b7a893771bf1f2bc01";
export const get = (data) => {
  var date = new Date();
  var url = "";
  if (data.keyword !== "")
    url = `http://newsapi.org/v2/everything?q=${
      data.keyword
    }&from=${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}&sortBy=popularity&apiKey=${apiKey}`;
  else if (data.source !== "")
    url = `https://newsapi.org/v2/top-headlines?sources=${data.source}&apiKey=${apiKey}`;
  else if (data.category !== "")
    url = `https://newsapi.org/v2/top-headlines?category=${data.category}&apiKey=${apiKey}`;
  else
    url = `https://newsapi.org/v2/top-headlines?country=${data.country}&apiKey=${apiKey}`;

  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
