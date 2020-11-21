import beersListReducer from "components/beers/beersListReducer";
import searchReducer from "components/search/searchReducer";
import { combineReducers, createStore } from "redux";

export default function store() {
  return createStore(
    combineReducers({
      beers: beersListReducer,
      search: searchReducer,
    })
  );
}
