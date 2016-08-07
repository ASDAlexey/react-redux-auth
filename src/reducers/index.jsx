import { combineReducers } from "redux";
import UsersReduces from "./users";

const rootReducer = combineReducers({
    users: UsersReduces,
});

export default rootReducer;
