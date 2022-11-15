import { combineReducers } from "redux";
import { todoReducer } from "./TodoReducer";
const reducers = combineReducers({
  todo: todoReducer,
});

export type ReducerType = ReturnType<typeof reducers>;
export default reducers;
