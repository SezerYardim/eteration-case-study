import { Grid2 as Grid } from "@mui/material";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import ProductDetailsCard from "../components/ProductDetailsCard";
import { useAppSelector } from "../store/hooks";
export default function ProductDetailsView() {
  const checkout = useAppSelector((state) => state.cart.checkout);
  return (
    <Grid container columnGap={"30px"} wrap="nowrap">
      <Grid size={10} container>
        <ProductDetailsCard
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque temporibus, dolorem itaque necessitatibus, iure quo nostrum, asperiores eum dolor eveniet dolore illo. Velit, ratione! Amet quia laborum nobis placeat facilis.
Tempore quo molestiae fugit ipsam quos dolores, recusandae exercitationem nam! Modi in omnis quae quisquam tenetur facilis sunt dicta explicabo animi dolores voluptatem voluptatibus praesentium earum eum, sapiente molestiae labore!"
          name="Apple"
          price={1100}
        ></ProductDetailsCard>
      </Grid>
      <Grid size={2}>
        <Cart></Cart>
        <Checkout price={checkout}></Checkout>
      </Grid>
    </Grid>
  );
}
