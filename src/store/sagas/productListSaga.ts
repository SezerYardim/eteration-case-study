import { call, put, takeLatest } from "redux-saga/effects";
import { getProductList } from "../../api/products/product";
import {
  IProductFilter,
  IProductListItem,
} from "../../api/products/products.interface";
import {
  getProductListRequest,
  getProductListRequestError,
  getProductListRequestSuccess,
} from "../slices/productListSlice";
import { PayloadAction } from "@reduxjs/toolkit";

export function* productListSaga({
  payload: queryParams,
}: PayloadAction<IProductFilter>) {
  try {
    const productList: IProductListItem[] = yield call(
      getProductList,
      queryParams
    );
    yield put(getProductListRequestSuccess(productList));
  } catch (error) {
    yield put(getProductListRequestError(error as string));
  }
}

export function* watchProductListSaga() {
  yield takeLatest(getProductListRequest.type, productListSaga);
}
