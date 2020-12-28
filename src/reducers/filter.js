import {
  UPDATE_KEYWORD,
  UPDATE_COUNTRY,
  UPDATE_SOURCE,
  UPDATE_CATEGORY,
} from "../actions/actionTypes";

const initState = {
  keyword: "",
  country: "us",
  source: "",
  category: "",
};

const filter = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_KEYWORD:
      return { ...initState, keyword: action.data };
    case UPDATE_COUNTRY:
      return { ...initState, country: action.data };
    case UPDATE_SOURCE:
      return { ...initState, source: action.data };
    case UPDATE_CATEGORY:
      return { ...initState, category: action.data };
    default:
      return state;
  }
};

export default filter;
