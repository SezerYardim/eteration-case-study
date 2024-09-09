import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getBrands,
  setSearchBrand,
  setSelectedBrand,
} from "../../store/slices/filterSlice";
import SearchInput from "../SearchInput/SearchInput";
import InfoCaption from "../InfoCaption/InfoCaption";

export default function BrandsFilter() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  const selectedBrand = useAppSelector((state) => state.filter.selectedBrand);
  const brands = getBrands(state);
  return (
    <FormControl sx={{ display: "block", marginBottom: "12px" }}>
      <FormLabel id="brands-filter-card-label">Brands</FormLabel>
      <Card>
        <CardContent>
          {brands.length ? (
            <>
              <SearchInput
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={(event) =>
                  dispatch(setSearchBrand(event.target.value))
                }
              />
              <RadioGroup
                sx={{ maxHeight: "83px", display: "block", overflowY: "auto" }}
                aria-labelledby="brands-filter-card-label"
                defaultValue=""
                name="brands-filter"
                value={selectedBrand.brand}
                onChange={(event) =>
                  dispatch(
                    setSelectedBrand({
                      brand: event.target.value,
                    })
                  )
                }
              >
                {brands.map((brand) => (
                  <FormControlLabel
                    key={brand}
                    value={brand}
                    control={<Radio />}
                    label={brand}
                    sx={{ display: "flex" }}
                  />
                ))}
              </RadioGroup>
            </>
          ) : (
            <InfoCaption caption="There is no brand" />
          )}
        </CardContent>
      </Card>
    </FormControl>
  );
}
