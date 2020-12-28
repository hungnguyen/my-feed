import { ADD_FAVORITE, DEL_FAVORITE } from "./actionTypes";

export const addFavorite = (data) => ({
  type: ADD_FAVORITE,
  data,
});

export const delFavorite = (data) => ({
  type: DEL_FAVORITE,
  data,
});
