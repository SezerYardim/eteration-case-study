import { httpClient } from "../httpClient";
import { IProductFilter, IProductItem } from "./products.interface";

export function getProductList(
  queryParams?: IProductFilter
): Promise<IProductItem[]> {
  return httpClient
    .get("/products", { params: queryParams })
    .then((resp) => resp.data);
}

export function getProductDetails(
  id: string,
  queryParams?: IProductFilter
): Promise<IProductItem> {
  return httpClient
    .get("/products" + "/" + id, { params: queryParams })
    .then((resp) => resp.data);
}
