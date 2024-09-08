import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductListItem } from "../../api/products/products.interface";

export interface ICartSliceState {
  items: ICartItem[];
  checkout: number;
}

export interface ICartItem {
  product: IProductListItem;
  count: number;
}
const initialState: ICartSliceState = {
  items: [],
  checkout: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state: ICartSliceState, { payload }: PayloadAction<ICartItem>) {
      const foundItem = state.items.find(
        (item) => item.product.id === payload.product.id
      );
      if (foundItem) {
        foundItem.count++;
      } else {
        state.items.push(payload);
      }
    },
    incrementCount(
      state: ICartSliceState,
      { payload }: PayloadAction<ICartItem>
    ) {
      state.items.forEach((item) => {
        if (item.product.id === payload.product.id) {
          item.count++;
        }
      });
    },
    decrementCount(
      state: ICartSliceState,
      { payload }: PayloadAction<ICartItem>
    ) {
      const foundItem = state.items.find(
        (item) => item.product.id === payload.product.id
      );
      if (!foundItem) return;
      foundItem.count--;
      if (foundItem.count <= 0) {
        state.items = state.items.filter(
          (item) => item.product.id !== foundItem.product.id
        );
      }
    },
    setCheckout(state: ICartSliceState) {
      state.checkout = state.items.reduce((acc, curr) => {
        const price = Number(curr.product.price);
        acc += price * curr.count;
        return acc;
      }, 0);
    },
  },
});

export const { addToCart, decrementCount, incrementCount, setCheckout } =
  cartSlice.actions;
export default cartSlice.reducer;
