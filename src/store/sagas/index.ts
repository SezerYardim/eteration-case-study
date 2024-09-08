import { all } from "redux-saga/effects";
import { watchProductDetailsSaga } from "./productDetailsSaga";
import { watchProductListSaga } from "./productListSaga";
import { watchCartSaga } from "./cartSaga";

export default function* rootSaga() {
  yield all([
    watchProductDetailsSaga(),
    watchProductListSaga(),
    watchCartSaga(),
  ]);
}

export interface StateType<T> {
  data: T | null;
  isLoading: boolean;
  errors: string;
}
