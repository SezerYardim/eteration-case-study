import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { getProductList } from "../../api/products/product";
import { IProductItem } from "../../api/products/products.interface";
import {
  BrandFilter,
  changeCurrentPage,
  setBrandsRequest,
  setBrandsSuccess,
  setFilter,
  setModels,
  setSelectedBrand,
  setSelectedModel,
  setSortByFilter,
} from "../slices/filterSlice";
import { getProductListRequest } from "../slices/productListSlice";

export function* filterSaga() {
  yield put(getProductListRequest());
}

export function* setBrandsSaga() {
  const productList: IProductItem[] = yield call(getProductList);
  const brands = productList.map((item) => item.brand);
  const uniqueBrands = [...new Set(brands)];
  yield put(setBrandsSuccess(uniqueBrands));
}

export function* setSelectedBrandSaga({ payload }: PayloadAction<BrandFilter>) {
  const productList: IProductItem[] = yield call(getProductList, payload);
  const models = productList.map((item) => item.model);
  const uniqueModels = [...new Set(models)];
  yield put(getProductListRequest());
  yield put(setModels(uniqueModels));
}

export function* watchFilterSaga() {
  yield takeEvery(
    [
      setFilter.type,
      setSelectedModel.type,
      changeCurrentPage.type,
      setSortByFilter.type,
    ],
    filterSaga
  );
  yield takeEvery(setBrandsRequest.type, setBrandsSaga);
  yield takeEvery(setSelectedBrand.type, setSelectedBrandSaga);
}
