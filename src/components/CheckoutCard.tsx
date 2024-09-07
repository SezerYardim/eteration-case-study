import { Box, Button, Card, CardContent, Typography } from "@mui/material";
interface CheckoutCardProps {
  price: number;
}
export default function CheckoutCard({ price }: CheckoutCardProps) {
  return (
    <Box>
      <Typography component={"p"} variant="subtitle1" color="textSecondary">
        Checkout
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="subtitle1" color="textSecondary">
            Total Price {price}
          </Typography>
          <Button sx={{ width: "100%" }} variant="contained">
            Checkout
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
