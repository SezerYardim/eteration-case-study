import { Box, Button, Card, Typography } from "@mui/material";
interface ProductDetailsCardProps {
  name: string;
  price: number;
  description: string;
}
export default function ProductDetailsCard({
  description,
  name,
  price,
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
      <Box flex={1} component={"img"} alt="Product Image" src=""></Box>
      <Box className="space-y-4" flex={1} height={"99px"}>
        <Box>
          <Typography
            sx={{ display: "block" }}
            variant="caption"
            color="textPrimary"
          >
            {name}
          </Typography>
          <Typography
            sx={{ display: "block" }}
            variant="caption"
            color="primary"
          >
            {price}
          </Typography>
        </Box>
        <Button sx={{ display: "block" }} variant="contained">
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
