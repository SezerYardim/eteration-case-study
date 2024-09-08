import { Grid2 as Grid, Pagination } from "@mui/material";
import { useEffect } from "react";
import BrandsFilter from "../components/BrandsFilter";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import ModelFilter from "../components/ModelFilter";
import ProductCard from "../components/ProductCard";
import SortByFilter from "../components/SortByFilter";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  changeCurrentPage,
  setBrandsRequest,
} from "../store/slices/filterSlice";
import { getProductListRequest } from "../store/slices/productListSlice";

export default function ProductListView() {
  const dispatch = useAppDispatch();
  const productList = useAppSelector((state) => state.productList);
  const checkout = useAppSelector((state) => state.cart.checkout);
  const page = useAppSelector((state) => state.filter.filter.p);
  useEffect(() => {
    dispatch(getProductListRequest());
    dispatch(setBrandsRequest());
  }, []);
  return (
    <Grid container columnGap={"30px"} wrap="nowrap">
      <Grid size={2}>
        <SortByFilter></SortByFilter>
        <BrandsFilter></BrandsFilter>
        <ModelFilter></ModelFilter>
      </Grid>
      <Grid
        size={8}
        container
        rowSpacing={"26px"}
        columnGap={"30px"}
        justifyContent={"center"}
      >
        {productList.data?.map((item) => (
          <ProductCard product={item} key={item.id}></ProductCard>
        ))}

        <Pagination
          page={page}
          count={7}
          onChange={(_event, page) => dispatch(changeCurrentPage(page))}
        ></Pagination>
      </Grid>
      <Grid size={2}>
        <Cart />
        <Checkout price={checkout}></Checkout>
      </Grid>
    </Grid>
  );
}
