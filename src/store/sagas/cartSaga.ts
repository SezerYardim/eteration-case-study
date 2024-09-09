import { put, select, takeEvery } from "redux-saga/effects";
import {
  addToCart,
  decrementCount,
  ICartSliceState,
  incrementCount,
  setCart,
  setCheckout,
} from "../slices/cartSlice";
import { saveLocalStorage } from "../../helpers/helpers";
import { PayloadAction } from "@reduxjs/toolkit";

export function* cartSaga() {
  yield put(setCheckout());
  const state: ICartSliceState = yield select((state) => state.cart);
  saveLocalStorage("cart", state);
}

export function* cartLocalStorageSaga({
  payload: cart,
}: PayloadAction<ICartSliceState>) {
  yield saveLocalStorage("cart", cart);
}

export function* watchCartSaga() {
  yield takeEvery(
    [incrementCount.type, decrementCount.type, addToCart.type],
    cartSaga
  );
  yield takeEvery(setCart.type, cartLocalStorageSaga);
}
