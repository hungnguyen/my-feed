import {
  SOURCE_GETTING,
  SOURCE_GET_SUCCESS,
  SOURCE_GET_FAIL,
} from "../actions/actionTypes";

const initState = {
  isLoading: false,
  data: [],
  error: "",
};

const sources = (state = initState, action) => {
  switch (action.type) {
    case SOURCE_GETTING:
      return { ...state, isLoading: true };
    case SOURCE_GET_SUCCESS:
      return { ...state, isLoading: false, data: action.data };
    case SOURCE_GET_FAIL:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default sources;
