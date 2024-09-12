import { combineReducers } from "redux";
import Increment from "./increment";
const reducers = combineReducers({
  Increment: Increment,
});
export default reducers;
