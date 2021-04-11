import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { movieReducer } from "./reducers";

const reducers = combineReducers({
  movieReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
