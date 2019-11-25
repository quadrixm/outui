import {combineReducers} from "redux";
import employees from "./employee";
import surveys from "./survey";

const app = combineReducers({
    employees,
    surveys
});

export default app
