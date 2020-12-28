import {
  NEWS_GETTING,
  NEWS_GET_SUCCESS,
  NEWS_GET_FAIL,
} from "../actions/actionTypes";

const initState = {
  isLoading: false,
  data: [],
  error: "",
};

const news = (state = initState, action) => {
  switch (action.type) {
    case NEWS_GETTING:
      return { ...state, isLoading: true };
    case NEWS_GET_SUCCESS:
      return { ...state, isLoading: false, data: action.data };
    case NEWS_GET_FAIL:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default news;
