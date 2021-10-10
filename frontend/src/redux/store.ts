import { applyMiddleware, createStore } from "redux";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./root-saga";
import { createLogger } from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
const logger = (createLogger as any)();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
