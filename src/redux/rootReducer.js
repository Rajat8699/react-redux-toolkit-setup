import { combineReducers } from "redux";
import testsReducer from "./test/testSlice";
const rootReducer = combineReducers({
	testsReducer,
});

export default rootReducer;
