import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IProductFilter,
  IProductListItem,
} from "../../api/products/products.interface";
import { StateType } from "../sagas";

type IProductListState = StateType<IProductListItem[]>;
const initialState: IProductListState = {
  data: [],
  isLoading: false,
  errors: "",
};
export const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    getProductListRequest(
      state: IProductListState,
      queryParams: PayloadAction<IProductFilter>
    ) {
      state.errors = "";
      state.isLoading = true;
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
  },
});

export const {
  getProductListRequest,
  getProductListRequestError,
  getProductListRequestSuccess,
} = productListSlice.actions;
export default productListSlice.reducer;
