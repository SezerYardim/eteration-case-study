import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IProductListItem } from "../api/products/products.interface";
import { useAppDispatch } from "../store/hooks";
import { addToCart } from "../store/slices/cartSlice";

type ProductCardProps = { product: IProductListItem };
export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        width: "180px",
        height: "302px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardActionArea
        onClick={() => navigate("/" + product.id)}
        sx={{
          padding: 0,
          flex: 1,
          justifyContent: "flex-start",
          paddingBottom: "16px",
        }}
      >
        <CardContent sx={{ padding: 0, height: "100%" }}>
          <img
            src={product.image}
            alt="Product Image"
            height={150}
            className="mb-4"
          />
          <Typography marginBottom={2}>{product?.price}</Typography>
          <Typography className="line-clamp-2" marginBottom={2}>
            {product?.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ padding: 0 }}>
        <Button
          sx={{ width: "100%" }}
          variant="contained"
          onClick={() => {
            dispatch(addToCart({ product, count: 1 }));
          }}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
