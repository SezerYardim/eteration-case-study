import { Box, Button, Card, Typography } from "@mui/material";
import { IProductItem } from "../api/products/products.interface";

interface ProductDetailsCardProps {
  product: IProductItem;
  onAddToCart(): void;
}
export default function ProductDetailsCard({
  product: { image, name, price, description },
  onAddToCart,
}: ProductDetailsCardProps) {
  return (
    <Card
      sx={{
        padding: "10px",
        display: "flex",
        columnGap: "10px",
        minHeight: "320px",
      }}
    >
      <Box flex={1} component={"img"} alt="Product Image" src={image}></Box>
      <Box className="space-y-4 pb-2.5 px-2.5" flex={1} height={"99px"}>
        <Box>
          <Typography
            sx={{ display: "block" }}
            variant="h5"
            color="textPrimary"
          >
            {name}
          </Typography>
          <Typography sx={{ display: "block" }} variant="h5" color="primary">
            {price}
          </Typography>
        </Box>
        <Button
          sx={{ display: "block", width: "100%" }}
          variant="contained"
          onClick={onAddToCart}
        >
          Add to Cart
        </Button>
        <Typography
          className="line-clamp-[11]"
          variant="subtitle1"
          color="textPrimary"
        >
          {description}
        </Typography>
      </Box>
    </Card>
  );
}
