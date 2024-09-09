import { Grid2 as Grid } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Checkout from "../components/Checkout/Checkout";
import ProductDetailsCard from "../components/ProductDetailsCard/ProductDetailsCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getProductDetailsRequest } from "../store/slices/productDetailsSlice";
import { addToCart } from "../store/slices/cartSlice";
import Cart from "../components/Cart/Cart";

export default function ProductDetailsView() {
  const checkout = useAppSelector((state) => state.cart.checkout);
  const productDetails = useAppSelector((state) => state.productDetails);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(getProductDetailsRequest(id));
    }
  }, [id]);

  function onAddToCart() {
    if (productDetails.state.data) {
      dispatch(addToCart({ product: productDetails.state.data, count: 1 }));
    }
  }
  return (
    <Grid container columnGap={"30px"} wrap="nowrap">
      <Grid size={10} container>
        {productDetails.state.data && (
          <ProductDetailsCard
            product={productDetails.state.data}
            onAddToCart={onAddToCart}
          ></ProductDetailsCard>
        )}
      </Grid>
      <Grid size={2}>
        <Cart></Cart>
        <Checkout price={checkout}></Checkout>
      </Grid>
    </Grid>
  );
}
