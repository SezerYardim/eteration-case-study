import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import productDetailsSlice from "./slices/productDetailsSlice";
import productListSlice from "./slices/productListSlice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    productList: productListSlice,
    productDetails: productDetailsSlice,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(sagaMiddleware);
  },
});

sagaMiddleware.run(rootSaga);