import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductItem } from "../../api/products/products.interface";
import { StateType } from "../sagas";

type IProductDetailsState = {
  id: string;
  state: StateType<IProductItem>;
};
const initialState: IProductDetailsState = {
  id: "",
  state: {
    data: null,
    errors: "",
    isLoading: false,
  },
};

export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    getProductDetailsRequest(
      draft: IProductDetailsState,
      { payload: id }: PayloadAction<string>
    ) {
      draft.state.isLoading = true;
      draft.state.errors = "";
      draft.id = id;
    },
    getProductDetailsRequestSuccess(
      draft: IProductDetailsState,
      { payload }: PayloadAction<IProductItem>
    ) {
      draft.state.data = payload;
      draft.state.errors = "";
      draft.state.isLoading = false;
    },
    getProductDetailsRequestError(
      draft: IProductDetailsState,
      { payload }: PayloadAction<string>
    ) {
      draft.state.isLoading = false;
      draft.state.errors = payload;
      draft.state.data = null;
    },
  },
});

export const {
  getProductDetailsRequest,
  getProductDetailsRequestError,
  getProductDetailsRequestSuccess,
} = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
