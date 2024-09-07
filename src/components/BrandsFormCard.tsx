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
import SearchIcon from "@mui/icons-material/Search";

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
export default function BrandsFormCard() {
  return (
    <FormControl sx={{ display: "block", marginBottom: "12px" }}>
      <FormLabel id="brands-form-card-label">Brands</FormLabel>
      <Card>
        <CardContent>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <RadioGroup
            aria-labelledby="brands-form-card-label"
            defaultValue="apple"
            name="brands-filter"
          >
            <FormControlLabel value="apple" control={<Radio />} label="Apple" />
            <FormControlLabel
              value="samsung"
              control={<Radio />}
              label="Samsung"
            />
            <FormControlLabel
              value="huawei"
              control={<Radio />}
              label="Huawei"
            />
          </RadioGroup>
        </CardContent>
      </Card>
    </FormControl>
  );
}
