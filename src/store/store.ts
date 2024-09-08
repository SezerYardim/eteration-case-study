import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import productDetailsSlice from "./slices/productDetailsSlice";
import productListSlice from "./slices/productListSlice";
import cartSlice from "./slices/cartSlice";
import filterSlice from "./slices/filterSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    productList: productListSlice,
    productDetails: productDetailsSlice,
    cart: cartSlice,
    filter: filterSlice,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(sagaMiddleware);
  },
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
