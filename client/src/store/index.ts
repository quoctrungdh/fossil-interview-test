import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { ordersReducer } from "./reducers";

import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    ordersReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);