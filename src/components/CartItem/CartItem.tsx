import { Typography } from "@mui/material";
import { ICartItem } from "../../store/slices/cartSlice";
import CartNumberInput from "../CartNumberInput/CartNumberInput";

interface CartItemProps extends ICartItem {
  onIncrement(): void;
  onDecrement(): void;
}
export default function CartItem({
  product: { name, price },
  count,
  onDecrement,
  onIncrement,
}: CartItemProps) {
  return (
    <>
      <Typography variant="subtitle1" fontWeight={500} color="textPrimary">
        {name}
      </Typography>
      <Typography variant="subtitle1" fontWeight={500} color="primary">
        {price + " ₺"}
      </Typography>
      <CartNumberInput
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        count={count}
      ></CartNumberInput>
    </>
  );
}
