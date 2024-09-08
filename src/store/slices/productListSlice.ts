import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IProductFilter,
  IProductListItem,
} from "../../api/products/products.interface";
import { StateType } from "../sagas";

export type IProductListState = StateType<IProductListItem[]> & {
  filter: IProductFilter;
};
const initialState: IProductListState = {
  data: [],
  isLoading: false,
  errors: "",
  filter: {
    search: undefined,
    l: 12,
    sortBy: undefined,
    order: "desc",
    orderBy: "createdAt",
    p: 1,
    title: undefined,
  },
};
export const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    getProductListRequest(
      state: IProductListState,
      { payload: filter }: PayloadAction<IProductFilter>
    ) {
      state.errors = "";
      state.isLoading = true;
      state.filter = filter;
    },
    getProductListRequestSuccess(
      state: IProductListState,
      { payload: productList }: PayloadAction<IProductListItem[]>
    ) {
      state.errors = "";
      state.isLoading = false;
      state.data = productList;
    },
    getProductListRequestError(
      state: IProductListState,
      { payload: error }: PayloadAction<string>
    ) {
      state.errors = error;
      state.isLoading = true;
      state.data = [];
    },
    setFilter(
      state: IProductListState,
      { payload: queryParams }: PayloadAction<IProductFilter>
    ) {
      state.filter = queryParams;
    },
    changeCurrentPage(
      state: IProductListState,
      { payload: currentPage }: PayloadAction<number>
    ) {
      state.filter.p = currentPage;
    },
  },
});

export const {
  getProductListRequest,
  getProductListRequestError,
  getProductListRequestSuccess,
  changeCurrentPage,
  setFilter,
} = productListSlice.actions;
export default productListSlice.reducer;
