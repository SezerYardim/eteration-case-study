import { Grid2 as Grid } from "@mui/material";
import BrandsFilter from "../components/BrandsFilter";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import ModelFilter from "../components/ModelFilter";
import ProductCard from "../components/ProductCard";
import SortByFilter from "../components/SortByFilter";

export default function ProductListView() {
  return (
    <Grid container>
      <Grid size={2}>
        <SortByFilter></SortByFilter>
        <BrandsFilter></BrandsFilter>
        <ModelFilter></ModelFilter>
      </Grid>
      <Grid size={8} container rowSpacing={"26px"} columnGap={"30px"}>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </Grid>
      <Grid size={2}>
        <Cart
         name="Samsung s22" price="12.000₺" count={1}></Cart
        >
        <Checkout price={11700}></Checkout>
      </Grid>
    </Grid>
  );
}