import { all } from "redux-saga/effects";
import { watchProductDetailsSaga } from "./productDetailsSaga";
import { watchProductListSaga } from "./productListSaga";
import { watchCartSaga } from "./cartSaga";
import { watchFilterSaga } from "./filterSaga";

export default function* rootSaga() {
  yield all([
    watchProductDetailsSaga(),
    watchProductListSaga(),
    watchCartSaga(),
    watchFilterSaga(),
  ]);
}

export interface StateType<T> {
  data: T | null;
  isLoading: boolean;
  errors: string;
}
