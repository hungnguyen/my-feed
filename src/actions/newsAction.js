import { NEWS_GETTING, NEWS_GET_SUCCESS, NEWS_GET_FAIL } from "./actionTypes";

export const getNews = (data) => ({
  type: NEWS_GETTING,
  data,
});
export const getNewsSuccess = (data) => ({
  type: NEWS_GET_SUCCESS,
  data,
});
export const getNewsFail = (data) => ({
  type: NEWS_GET_FAIL,
  data,
});
