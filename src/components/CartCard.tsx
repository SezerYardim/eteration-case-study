import { Box, Card, CardContent, Typography } from "@mui/material";
import CartNumberInput from "./CartNumberInput";
interface CartCardInputProps {
  name: string;
  price: string;
  count: number;
}
export default function CartCard({ name, count, price }: CartCardInputProps) {
  return (
    <Box sx={{ marginBottom: "12px" }}>
      <Typography component={"p"} variant="subtitle1" color="textSecondary">
        Cart
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="subtitle1" fontWeight={500} color="textPrimary">
            {name}
          </Typography>
          <Typography variant="subtitle1" fontWeight={500} color="primary">
            {price + " ₺"}
          </Typography>
          <CartNumberInput count={count}></CartNumberInput>
        </CardContent>
      </Card>
    </Box>
  );
}
