export interface IProductDetails {
  id: string;
}

export interface IProductFilter {
  search?: string;
  filter?: string;
  title?: string;
  page?: number;
  p?: number;
  limit?: number;
  l?: number;
  sortBy?: string;
  sortby?: string;
  orderBy?: string;
  orderby?: string;
  order?: string;
}

export interface IProductDetails {
  createdAt: string;
  name: string;
  image: string;
  price: string;
  description: string;
  model: string;
  brand: string;
  id: string;
}
export interface IProductListItem {
  createdAt: string;
  name: string;
  image: string;
  price: string;
  description: string;
  model: string;
  brand: string;
  id: string;
}
