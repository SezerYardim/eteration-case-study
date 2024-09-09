import { Box, Button, Typography } from "@mui/material";
interface CartNumberInputProps {
  count: number;
  onIncrement(): void;
  onDecrement(): void;
}
export default function CartNumberInput({
  count,
  onDecrement,
  onIncrement,
}: CartNumberInputProps) {
  return (
    <Box display="flex">
      <Button
        color="inherit"
        sx={{
          flex: 0,
          padding: "8px 24px",
          minWidth: "auto",
          boxShadow: 0,
        }}
        variant="contained"
        onClick={onDecrement}
      >
        -
      </Button>
      <Typography
        variant="button"
        component={Button}
        sx={{
          lineHeight: 1,
          backgroundColor: "primary.main",
          color: "white",
          padding: "8px 24px",
          minWidth: "auto",
        }}
      >
        {count}
      </Typography>
      <Button
        color="inherit"
        sx={{
          flex: 0,
          padding: "8px 24px",
          minWidth: "auto",
          boxShadow: 0,
        }}
        variant="contained"
        onClick={onIncrement}
      >
        +
      </Button>
    </Box>
  );
}
