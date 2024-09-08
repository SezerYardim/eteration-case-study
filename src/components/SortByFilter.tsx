import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useAppDispatch } from "../store/hooks";
import { setSortByFilter } from "../store/slices/filterSlice";

export default function SortByFilter() {
  const dispatch = useAppDispatch();
  return (
    <FormControl sx={{ display: "block", marginBottom: "12px" }}>
      <FormLabel id="sort-by-filter-group-label">Sort by</FormLabel>
      <Card>
        <CardContent>
          <RadioGroup
            aria-labelledby="sort-by-filter-group-label"
            defaultValue="dateAsc"
            onChange={(event) => {
              dispatch(setSortByFilter(event.target.value));
            }}
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="dateAsc"
              control={<Radio />}
              label="Old to new"
            />
            <FormControlLabel
              value="dateDesc"
              control={<Radio />}
              label="New to old"
            />
            <FormControlLabel
              value="priceDesc"
              control={<Radio />}
              label="Price hight to low"
            />
            <FormControlLabel
              value="priceAsc"
              control={<Radio />}
              label="Price low to High"
            />
          </RadioGroup>
        </CardContent>
      </Card>
    </FormControl>
  );
}
