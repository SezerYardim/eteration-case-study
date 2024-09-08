export interface IProductDetails {
  id: string;
}

export interface IProductFilter {
  search?: string;
  title?: string;
  p?: number;
  l?: number;
  sortBy?: string;
  orderBy?: string;
  order?: "asc" | "desc";
}

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
