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
  getSize,
  setBrandsRequest,
} from "../store/slices/filterSlice";
import { getProductListRequest } from "../store/slices/productListSlice";

export default function ProductListView() {
  const dispatch = useAppDispatch();
  const productList = useAppSelector((state) => state.productList);
  const checkout = useAppSelector((state) => state.cart.checkout);
  const page = useAppSelector((state) => state.filter.filter.p);
  const count = useAppSelector((state) => state.filter.size);
  useEffect(() => {
    dispatch(getProductListRequest());
    dispatch(setBrandsRequest());
    dispatch(getSize())
  }, []);
  return (
    <Grid container columnGap={"30px"} wrap="nowrap">
      <Grid size={2}>
        <SortByFilter></SortByFilter>
        <BrandsFilter></BrandsFilter>
        <ModelFilter></ModelFilter>
      </Grid>
      <Grid size={8}>
        <Grid
          container
          rowGap={"26px"}
          columnGap={"30px"}
          justifyContent={"center"}
          marginBottom="24px"
        >
          {productList.data?.map((item) => (
            <ProductCard product={item} key={item.id}></ProductCard>
          ))}
        </Grid>
        <Grid container justifyContent={"center"}>
          <Pagination
            page={page}
            count={count}
            onChange={(_event, page) => dispatch(changeCurrentPage(page))}
          ></Pagination>
        </Grid>
      </Grid>
      <Grid size={2}>
        <Cart />
        <Checkout price={checkout}></Checkout>
      </Grid>
    </Grid>
  );
}
