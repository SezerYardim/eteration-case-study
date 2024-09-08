import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductItem } from "../../api/products/products.interface";
import { StateType } from "../sagas";
import { IFilterType } from "./filterSlice";

export type IProductListState = StateType<IProductItem[]>;
const initialState: IProductListState = {
  data: [],
  isLoading: false,
  errors: "",
};
export const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    getProductListRequest(state: IProductListState) {
      state.errors = "";
      state.isLoading = true;
    },
    getProductListRequestSuccess(
      state: IProductListState,
      { payload: productList }: PayloadAction<IProductItem[]>
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
  },
});

export const {
  getProductListRequest,
  getProductListRequestError,
  getProductListRequestSuccess,
} = productListSlice.actions;
export default productListSlice.reducer;

export function getProductListActionCreator({
  payload: queryParams,
}: PayloadAction<IFilterType>) {
  return { type: "FETCH_PRODUCT_LIST", payload: queryParams.filter };
}
