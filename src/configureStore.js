import { createStore,  applyMiddleware } from "redux";
import { createBrowserHistory } from 'history'
import {routerMiddleware} from "connected-react-router";
import logger from "redux-logger";
import thunk from "redux-thunk";
import RootReducer from "./reducers";

export const history = createBrowserHistory();

export default function configureStore(preloadedState){
    const store = createStore(
        RootReducer(history),
        applyMiddleware(
            routerMiddleware(history),logger,thunk,
        )
    );
    return store;
}