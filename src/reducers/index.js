import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import User from "./userReducer";
import Test from "./testReducer";
import Question from "./questionReducer";
import DoTest from "./doTestReducer";
import Result from "./resultReducer";

export default function RootReducer(history) {
    return combineReducers(
        { User: User, Test: Test, router: connectRouter(history), Question: Question, DoTest: DoTest, Result: Result }
    );
};