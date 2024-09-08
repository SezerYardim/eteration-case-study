import SearchIcon from "@mui/icons-material/Search";
import {
  alpha,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputBase,
  Radio,
  RadioGroup,
  styled,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  getBrands,
  setSearchBrand,
  setSelectedBrand,
} from "../store/slices/filterSlice";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(() => ({
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
export default function BrandsFilter() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  const brands = getBrands(state);
  return (
    <FormControl sx={{ display: "block", marginBottom: "12px" }}>
      <FormLabel id="brands-filter-card-label">Brands</FormLabel>
      <Card>
        <CardContent>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(event) => dispatch(setSearchBrand(event.target.value))}
            />
          </Search>
          <RadioGroup
            sx={{ maxHeight: "83px", display: "block", overflowY: "auto" }}
            aria-labelledby="brands-filter-card-label"
            defaultValue=""
            name="brands-filter"
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
        </CardContent>
      </Card>
    </FormControl>
  );
}
