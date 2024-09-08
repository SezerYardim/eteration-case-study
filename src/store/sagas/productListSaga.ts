import { call, put, select, takeLatest } from "redux-saga/effects";
import { getProductList } from "../../api/products/product";
import {
  IProductFilter,
  IProductItem,
} from "../../api/products/products.interface";
import {
  getProductListRequest,
  getProductListRequestError,
  getProductListRequestSuccess,
} from "../slices/productListSlice";

export function* productListSaga() {
  try {
    const filter: IProductFilter = yield select((state) => state.filter.filter);
    const productList: IProductItem[] = yield call(getProductList, filter);
    yield put(getProductListRequestSuccess(productList));
  } catch (error) {
    yield put(getProductListRequestError((error as unknown as Error).message));
  }
}

export function* watchProductListSaga() {
  yield takeLatest(getProductListRequest.type, productListSaga);
}
