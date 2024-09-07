import { put, takeEvery } from "redux-saga/effects";
import {
  getProductDetailsRequest,
  getProductDetailsRequestError,
  getProductDetailsRequestSuccess,
} from "../slices/productDetailsSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { IProductDetails } from "../../api/products/products.interface";
import { getProductDetails } from "../../api/products/product";

export function* productDetailsSaga({ payload: id }: PayloadAction<string>) {
  try {
    const productDetails: IProductDetails = yield getProductDetails(id);
    yield put(getProductDetailsRequestSuccess(productDetails));
  } catch (error) {
    yield put(getProductDetailsRequestError(error as string));
  }
}

export function* watchProductDetailsSaga() {
  yield takeEvery(getProductDetailsRequest.type, productDetailsSaga);
}
