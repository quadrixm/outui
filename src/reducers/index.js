import {combineReducers} from "redux";
import employee from "./employee";
import survey from "./survey";

const app = combineReducers({
    employee,
    survey
});

export default app
