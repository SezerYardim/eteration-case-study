import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductDetails } from "../../api/products/products.interface";
import { StateType } from "../sagas";

type IProductDetailsState = StateType<IProductDetails>;
const initialState: IProductDetailsState = {
  data: null,
  errors: "",
  isLoading: false,
};

export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    getProductDetailsRequest(state: IProductDetailsState) {
      state.isLoading = true;
      state.errors = "";
    },
    getProductDetailsRequestSuccess(
      state: IProductDetailsState,
      { payload }: PayloadAction<IProductDetails>
    ) {
      state.data = payload;
      state.errors = "";
      state.isLoading = false;
    },
    getProductDetailsRequestError(
      state: IProductDetailsState,
      { payload }: PayloadAction<string>
    ) {
      state.isLoading = false;
      state.errors = payload;
      state.data = null;
    },
  },
});

export const {
  getProductDetailsRequest,
  getProductDetailsRequestError,
  getProductDetailsRequestSuccess,
} = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
