import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { getProductList } from "../../api/products/product";
import {
  IProductFilter,
  IProductItem,
} from "../../api/products/products.interface";
import {
  changeCurrentPage,
  getProductListRequest,
  getProductListRequestError,
  getProductListRequestSuccess,
} from "../slices/productListSlice";

export function* productListSaga({
  payload: queryParams,
}: PayloadAction<IProductFilter>) {
  try {
    const productList: IProductItem[] = yield call(
      getProductList,
      queryParams
    );
    yield put(getProductListRequestSuccess(productList));
  } catch (error) {
    yield put(getProductListRequestError((error as unknown as Error).message));
  }
}

export function* filterSaga() {
  const filter: IProductFilter = yield select(
    (state) => state.productList.filter
  );
  try {
    const productList: IProductItem[] = yield call(getProductList, filter);
    yield put(getProductListRequestSuccess(productList));
  } catch (error) {
    yield put(getProductListRequestError((error as unknown as Error).message));
  }
}

export function* watchProductListSaga() {
  yield takeLatest(getProductListRequest.type, productListSaga);
  yield takeLatest(changeCurrentPage.type, filterSaga);
}
