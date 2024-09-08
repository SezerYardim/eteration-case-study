import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeEvery } from "redux-saga/effects";
import { getProductDetails } from "../../api/products/product";
import { IProductItem } from "../../api/products/products.interface";
import {
  getProductDetailsRequest,
  getProductDetailsRequestError,
  getProductDetailsRequestSuccess,
} from "../slices/productDetailsSlice";

export function* productDetailsSaga({ payload: id }: PayloadAction<string>) {
  try {
    const productDetails: IProductItem = yield getProductDetails(id);
    yield put(getProductDetailsRequestSuccess(productDetails));
  } catch (error) {
    yield put(getProductDetailsRequestError(error as string));
  }
}

export function* watchProductDetailsSaga() {
  yield takeEvery(getProductDetailsRequest.type, productDetailsSaga);
}
