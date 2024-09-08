export interface IProductDetails {
  id: string;
}
type IFieldFilter = Partial<Record<keyof IProductItem, string>>;
export type IProductFilter = {
  search?: string;
  p?: number;
  l?: number;
  sortBy?: string;
  orderBy?: string;
  order?: "asc" | "desc";
} & IFieldFilter;

export interface IProductItem {
  createdAt: string;
  name: string;
  image: string;
  price: string;
  description: string;
  model: string;
  brand: string;
  id: string;
}
