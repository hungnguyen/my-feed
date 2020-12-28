import {
  SOURCE_GETTING,
  SOURCE_GET_SUCCESS,
  SOURCE_GET_FAIL,
} from "./actionTypes";

export const getSources = () => ({
  type: SOURCE_GETTING,
});
export const getSourcesSuccess = (data) => ({
  type: SOURCE_GET_SUCCESS,
  data,
});
export const getSourcesFail = (data) => ({
  type: SOURCE_GET_FAIL,
  data,
});
