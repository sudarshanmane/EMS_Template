import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { RootReducer } from "./Reducer/RootReducer";
import { RootSaga } from "./saga/RootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: RootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(RootSaga);

export default store;
