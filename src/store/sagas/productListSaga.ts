import { put, takeLatest } from "redux-saga/effects";
import { getProductList } from "../../api/products/product";
import { IProductListItem } from "../../api/products/products.interface";
import {
  getProductListRequest,
  getProductListRequestError,
  getProductListRequestSuccess,
} from "../slices/productListSlice";

export function* productListSaga() {
  try {
    const productList: IProductListItem[] = yield getProductList();
    yield put(getProductListRequestSuccess(productList));
  } catch (error) {
    yield put(getProductListRequestError(error as string));
  }
}

export function* watchProductListSaga() {
  yield takeLatest(getProductListRequest.type, productListSaga);
}
