import { ADD_FAVORITE, DEL_FAVORITE } from "../actions/actionTypes";

const initState = {
  data: [],
};

const favorites = (state = initState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return { ...state, data: state.data.concat(action.data) };
    case DEL_FAVORITE:
      return {
        ...state,
        data: state.data.filter((item) => item.url !== action.data.ur),
      };
    default:
      return state;
  }
};

export default favorites;
