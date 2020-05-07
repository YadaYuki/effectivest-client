import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import User from "./userReducer";
import Test from "./testReducer";
export default function RootReducer(history) {
    return combineReducers(
        { User: User, Test: Test, router: connectRouter(history) }
    );
};