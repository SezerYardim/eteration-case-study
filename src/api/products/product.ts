import { httpClient } from "../httpClient";
import {
  IProductDetails,
  IProductFilter,
  IProductListItem,
} from "./products.interface";

export function getProductList(
  queryParams?: IProductFilter
): Promise<IProductListItem[]> {
  return httpClient
    .get("/products", { params: queryParams })
    .then((resp) => resp.data);
}

export function getProductDetails(
  id: string,
  queryParams?: IProductFilter
): Promise<IProductDetails> {
  return httpClient
    .get("/products" + "/" + id, { params: queryParams })
    .then((resp) => resp.data);
}
