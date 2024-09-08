import { PayloadAction } from "@reduxjs/toolkit";
import { call, debounce, put, select, takeEvery } from "redux-saga/effects";
import { getProductList } from "../../api/products/product";
import {
  IProductFilter,
  IProductItem,
} from "../../api/products/products.interface";
import {
  BrandFilter,
  changeCurrentPage,
  getSize,
  setBrandsRequest,
  setBrandsSuccess,
  setFilter,
  setModels,
  setSearchText,
  setSelectedBrand,
  setSelectedModel,
  setSize,
  setSortByFilter,
} from "../slices/filterSlice";
import {
  getProductListRequest,
  getProductListRequestError,
  getProductListRequestSuccess,
} from "../slices/productListSlice";

export function* filterSaga() {
  yield put(getProductListRequest());
  yield put(getSize());
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
  yield put(getSize());
  yield put(getProductListRequest());
  yield put(setModels(uniqueModels));
}

export function* setSearchTextSaga({
  payload: searchText,
}: PayloadAction<string>) {
  try {
    const productList: IProductItem[] = yield call(getProductList, {
      name: searchText,
    });
    yield put(getProductListRequestSuccess(productList));
    yield put(getSize());
  } catch (error) {
    yield put(getProductListRequestError((error as unknown as Error).message));
  }
}

export function* getSizeRequestSaga() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { p: _, ...filter }: IProductFilter = yield select(
    (state) => state.filter.filter
  );
  const productList: IProductItem[] = yield call(getProductList, filter);
  if (filter.l) {
    const size =
      productList.length % filter.l === 0
        ? Math.floor(productList.length / filter.l)
        : Math.floor(productList.length / filter.l) + 1;
    yield put(setSize(size));
  }
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
  yield debounce(500, setSearchText.type, filterSaga);
  yield takeEvery(getSize.type, getSizeRequestSaga);
}
