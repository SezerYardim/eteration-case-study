import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export default function SortByFilter() {
  return (
    <FormControl sx={{ display: "block", marginBottom: "12px" }}>
      <FormLabel id="sort-by-filter-group-label">Sort by</FormLabel>
      <Card>
        <CardContent>
          <RadioGroup
            aria-labelledby="sort-by-filter-group-label"
            defaultValue="dateDesc"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="dateDesc"
              control={<Radio />}
              label="Old to new"
            />
            <FormControlLabel
              value="dateAsc"
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
