import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  getModels,
  setSearchModel,
  setSelectedModel,
} from "../store/slices/filterSlice";
import SearchInput from "./SearchInput";
import InfoCaption from "./InfoCaption";

export default function ModelFilter() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  const selectedModel = useAppSelector((state) => state.filter.selectedModel);
  const models = getModels(state);
  return (
    <FormControl sx={{ display: "block", marginBottom: "12px" }}>
      <FormLabel id="model-filter-label">Model</FormLabel>
      <Card>
        <CardContent>
          {models.length ? (
            <>
              <SearchInput
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={(event) => {
                  dispatch(setSearchModel(event.target.value));
                }}
              />
              <RadioGroup
                sx={{ maxHeight: "83px", display: "block", overflowY: "auto" }}
                aria-labelledby="model-filter-label"
                defaultValue=""
                name="brands-filter"
                value={selectedModel.model}
                onChange={(event) =>
                  dispatch(
                    setSelectedModel({
                      model: event.target.value,
                    })
                  )
                }
              >
                {models.map((model) => (
                  <FormControlLabel
                    key={model}
                    value={model}
                    control={<Radio />}
                    label={model}
                    sx={{ display: "flex" }}
                  />
                ))}
              </RadioGroup>
            </>
          ) : (
            <InfoCaption
              caption="You haven't selected brands yet!"
            />
          )}
        </CardContent>
      </Card>
    </FormControl>
  );
}
