import { combineReducers } from "redux";
import news from "./news";
import filter from "./filter";
import sources from "./sources";
import favorites from "./favorites";
import countries from "./countries";
import categories from "./categories";

const rootReducer = combineReducers({
  news,
  filter,
  sources,
  favorites,
  countries,
  categories,
});
export default rootReducer;
