import { all } from "redux-saga/effects";
import { watchProductDetailsSaga } from "./productDetailsSaga";
import { watchProductListSaga } from "./productListSaga";

export default function* rootSaga() {
  yield all([watchProductDetailsSaga(), watchProductListSaga()]);
}

export interface StateType<T> {
  data: T | null;
  isLoading: boolean;
  errors: string;
}
