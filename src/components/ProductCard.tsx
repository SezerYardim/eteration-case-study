import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IProductListItem } from "../api/products/products.interface";

type ProductCardProps = {product: IProductListItem}
export default function ProductCard({product}:ProductCardProps) {
  const navigate = useNavigate();
  return (
    <Card sx={{width: "180px"}}>
      <CardActionArea onClick={() => navigate("/"+ product.id)}>
        <CardContent>
          <img src={product.image} alt="Product Image" height={150} width={150} />
          <Typography>{product?.price}</Typography>
          <Typography>{product?.name}</Typography>
        </CardContent>
        <CardActionArea>
          <CardActions>
            <Button sx={{ width: "100%" }} variant="contained">
              Add To Cart
            </Button>
          </CardActions>
        </CardActionArea>
      </CardActionArea>
    </Card>
  );
}
