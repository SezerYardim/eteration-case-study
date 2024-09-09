import { Grid2 as Grid, Pagination } from "@mui/material";
import { useEffect } from "react";
import BrandsFilter from "../components/BrandsFilter/BrandsFilter";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/Checkout/Checkout";
import ModelFilter from "../components/ModelFilter/ModelFilter";
import ProductCard from "../components/ProductCard/ProductCard";
import SortByFilter from "../components/SortByFilter/SortByFilter";
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
    dispatch(getSize());
  }, []);
  return (
    <Grid
      container
      columnGap={{ xs: "8px", md: "30px" }}
      rowGap={{ xs: "8px", md: "30px" }}
      wrap="nowrap"
      flexDirection={{ xs: "column", md: "row" }}
    >
      <Grid
        size={2}
        sx={{ display: { xs: "none", lg: "block", order: { xs: 3, md: 1 } } }}
      >
        <SortByFilter></SortByFilter>
        <BrandsFilter></BrandsFilter>
        <ModelFilter></ModelFilter>
      </Grid>
      <Grid size={{ xs: 12, md: 8 }} sx={{ order: 2 }}>
        <Grid
          container
          rowGap={{ xs: "8px", md: "26px" }}
          columnGap={{ xs: "8px", md: "30px" }}
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
      <Grid size={{ xs: 12, md: 2 }} order={{ xs: 1, md: 3 }}>
        <Cart />
        <Checkout price={checkout}></Checkout>
      </Grid>
    </Grid>
  );
}
