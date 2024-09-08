import { Box, Card, CardContent, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { decrementCount, incrementCount } from "../store/slices/cartSlice";
import CartItem from "./CartItem";

export default function Cart() {
  const cartList = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();
  return (
    <Box sx={{ marginBottom: "12px" }}>
      <Typography component={"p"} variant="subtitle1" color="textSecondary">
        Cart
      </Typography>
      <Card>
        <CardContent>
          {cartList.items.map((item) => (
            <CartItem
              key={item.product.id}
              onDecrement={() => dispatch(decrementCount(item))}
              onIncrement={() => dispatch(incrementCount(item))}
              {...item}
            ></CartItem>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
}
