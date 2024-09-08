import { Grid2 as Grid } from "@mui/material";
import { useEffect } from "react";
import BrandsFilter from "../components/BrandsFilter";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import ModelFilter from "../components/ModelFilter";
import ProductCard from "../components/ProductCard";
import SortByFilter from "../components/SortByFilter";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getProductListRequest } from "../store/slices/productListSlice";

export default function ProductListView() {
  const dispatch = useAppDispatch();
  const productList = useAppSelector((state) => state.productList);
  useEffect(() => {
    dispatch(getProductListRequest({l:12,p:1}))
  },[])
  return (
    <Grid container columnGap={"30px"} wrap="nowrap">
      <Grid size={2}>
        <SortByFilter></SortByFilter>
        <BrandsFilter></BrandsFilter>
        <ModelFilter></ModelFilter>
      </Grid>
      <Grid size={8} container rowSpacing={"26px"} columnGap={"30px"} justifyContent={"center"}>
        {productList.data?.map(item => (
          <ProductCard product={item} key={item.id}></ProductCard>
        ))}
        
        
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