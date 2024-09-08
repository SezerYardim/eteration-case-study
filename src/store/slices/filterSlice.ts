import {
  createAction,
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { IProductFilter } from "../../api/products/products.interface";
import { RootState } from "../store";

export type BrandFilter = { brand: string };
export type ModelFilter = { model: string };
export type IFilterType = {
  filter: IProductFilter;
  selectedBrand: BrandFilter;
  selectedModel: ModelFilter;
  brands: {
    data: string[];
    isLoading: boolean;
    error: string;
  };
  models: {
    data: string[];
    isLoading: boolean;
    error: string;
  };
  searchBrand: string;
  searchModel: string;
  selectedSort: string;
  size: number;
};

const initialState: IFilterType = {
  filter: {
    search: undefined,
    l: 12,
    sortBy: undefined,
    order: "asc",
    orderBy: "createdAt",
    p: 1,
  },
  selectedBrand: { brand: "" },
  selectedModel: { model: "" },
  brands: {
    data: [],
    isLoading: false,
    error: "",
  },
  models: {
    data: [],
    isLoading: false,
    error: "",
  },
  searchBrand: "",
  searchModel: "",
  selectedSort: "dateAsc",
  size: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(
      state: IFilterType,
      {
        payload: { filter, selectedBrand, selectedModel },
      }: PayloadAction<Partial<IFilterType>>
    ) {
      if (filter) {
        state.filter = filter;
      }
      if (selectedModel) {
        state.selectedModel = selectedModel;
      }
      if (selectedBrand) {
        state.selectedBrand = selectedBrand;
      }
    },
    setBrandsRequest(state: IFilterType) {
      state.brands.data = [];
      state.brands.isLoading = true;
      state.brands.error = "";
    },
    setBrandsSuccess(
      state: IFilterType,
      { payload: brands }: PayloadAction<string[]>
    ) {
      state.brands.data = brands;
    },
    setModels(
      state: IFilterType,
      { payload: models }: PayloadAction<string[]>
    ) {
      state.models.data = models;
    },
    setSelectedBrand(
      state: IFilterType,
      { payload }: PayloadAction<BrandFilter>
    ) {
      const filter = { ...state.filter, ...payload };
      filter.p = 1;
      filter.search = "";
      state.selectedBrand = payload;
      state.filter = filter;
      state.filter.model = "";
    },
    setSelectedModel(
      state: IFilterType,
      { payload }: PayloadAction<ModelFilter>
    ) {
      state.selectedModel = payload;
      state.filter.search = "";
      state.filter.p = 1;
      state.filter = { ...state.filter, ...payload };
    },
    changeCurrentPage(
      state: IFilterType,
      { payload: currentPage }: PayloadAction<number>
    ) {
      state.filter.p = currentPage;
    },
    setSearchBrand(
      state: IFilterType,
      { payload: searchBrand }: PayloadAction<string>
    ) {
      state.searchBrand = searchBrand;
    },
    setSearchModel(
      state: IFilterType,
      { payload: searchModel }: PayloadAction<string>
    ) {
      state.searchModel = searchModel;
    },
    setSortByFilter(
      state: IFilterType,
      { payload: sortBy }: PayloadAction<string>
    ) {
      state.selectedSort = sortBy;
      switch (sortBy) {
        case "dateDesc":
          state.filter.orderBy = "createdAt";
          state.filter.order = "desc";
          break;
        case "dateAsc":
          state.filter.orderBy = "createdAt";
          state.filter.order = "asc";
          break;
        case "priceDesc":
          state.filter.orderBy = "price";
          state.filter.order = "desc";
          break;
        case "priceAsc":
          state.filter.orderBy = "price";
          state.filter.order = "asc";
          break;
        default:
          state.filter.orderBy = "createdAt";
          state.filter.order = "desc";
          break;
      }
    },
    setSearchText(
      state: IFilterType,
      { payload: searchText }: PayloadAction<string>
    ) {
      const filter = { ...initialState.filter };
      filter.search = searchText;
      filter.l = undefined;
      state.filter = filter;
      state.selectedSort = "dateAsc";
      state.selectedBrand.brand = "";
      state.selectedModel.model = "";
    },
    setSize(state: IFilterType, { payload: size }: PayloadAction<number>) {
      state.size = size;
    },
  },
});

export const {
  setFilter,
  setBrandsRequest,
  setBrandsSuccess,
  setModels,
  setSelectedBrand,
  setSelectedModel,
  changeCurrentPage,
  setSearchBrand,
  setSearchModel,
  setSortByFilter,
  setSearchText,
  setSize,
} = filterSlice.actions;
export default filterSlice.reducer;

export const getBrands = createSelector(
  [(state: RootState) => state.filter],
  (state) => {
    return state.brands.data.filter((brand) => {
      return new RegExp(state.searchBrand, "i").test(brand);
    });
  }
);

export const getModels = createSelector(
  [(state: RootState) => state.filter],
  (state) => {
    return state.models.data.filter((model) => {
      return new RegExp(state.searchModel, "i").test(model);
    });
  }
);

export const getSize = createAction<void, string>("getSize");
