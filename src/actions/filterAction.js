import {
  UPDATE_KEYWORD,
  UPDATE_COUNTRY,
  UPDATE_SOURCE,
  UPDATE_CATEGORY,
} from "./actionTypes";

export const updateKeyword = (data) => ({
  type: UPDATE_KEYWORD,
  data,
});

export const updateCountry = (data) => ({
  type: UPDATE_COUNTRY,
  data,
});

export const updateSource = (data) => ({
  type: UPDATE_SOURCE,
  data,
});

export const updateCategory = (data) => ({
  type: UPDATE_CATEGORY,
  data,
});
