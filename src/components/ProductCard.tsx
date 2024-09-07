import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function ProductCard() {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height={150}
          width={150}
          image=""
          alt="Product_Image"
        />
        <CardContent>
          <Typography></Typography>
          <Typography></Typography>
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
