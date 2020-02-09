import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import { ordersReducer } from "./reducers";

import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({});

export const store = createStore(
    combineReducers({
        orderState: ordersReducer
    }),
    composeEnhancers(
        applyMiddleware(sagaMiddleware),
    )
);

sagaMiddleware.run(sagas);