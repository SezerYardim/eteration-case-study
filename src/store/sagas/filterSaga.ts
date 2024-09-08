import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { getProductList } from "../../api/products/product";
import {
  IProductFilter,
  IProductItem,
} from "../../api/products/products.interface";
import {
  BrandFilter,
  changeCurrentPage,
  setBrandsRequest,
  setBrandsSuccess,
  setFilter,
  setModels,
  setSelectedBrand,
  setSelectedModel,
} from "../slices/filterSlice";
import { getProductListRequest } from "../slices/productListSlice";

export function* filterSaga() {
  const filter: IProductFilter = yield select((state) => state.filter.filter);
  yield put(getProductListRequest(filter));
}

export function* setBrandsSaga() {
  const productList: IProductItem[] = yield call(getProductList);
  const brands = productList.map((item) => item.brand);
  const uniqueBrands = [...new Set(brands)];
  yield put(setBrandsSuccess(uniqueBrands));
}

export function* setSelectedBrandSaga({ payload }: PayloadAction<BrandFilter>) {
  const filter: IProductFilter = yield select((state) => state.filter.filter);
  const productList: IProductItem[] = yield call(getProductList, payload);
  const models = productList.map((item) => item.model);
  const uniqueModels = [...new Set(models)];
  yield put(getProductListRequest(filter));
  yield put(setModels(uniqueModels));
}

export function* watchFilterSaga() {
  yield takeEvery(setFilter.type, filterSaga);
  yield takeEvery(setBrandsRequest.type, setBrandsSaga);
  yield takeEvery(setSelectedBrand.type, setSelectedBrandSaga);
  yield takeEvery(setSelectedModel.type, filterSaga);
  yield takeEvery(changeCurrentPage.type, filterSaga);
}
