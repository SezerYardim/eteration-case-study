import { put, takeEvery } from "redux-saga/effects";
import {
  addToCart,
  decrementCount,
  incrementCount,
  setCheckout,
} from "../slices/cartSlice";

export function* cartSaga() {
  yield put(setCheckout());
}

export function* watchCartSaga() {
  yield takeEvery(
    [incrementCount.type, decrementCount.type, addToCart.type],
    cartSaga
  );
}
