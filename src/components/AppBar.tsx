import PersonIconOutlined from "@mui/icons-material/PersonOutlined";
import WalletIconOutlined from "@mui/icons-material/WalletOutlined";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import SearchInput from "./SearchInput";

export default function PrimarySearchAppBar() {
  const navigate = useNavigate();
  const checkout = useAppSelector((state) => state.cart.checkout);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="button"
              sx={{ display: { xs: "none", sm: "block" }, fontWeight: "700" }}
              onClick={() => navigate("/")}
            >
              Eteration
            </Typography>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                console.log(event);
              }}
            >
              <SearchInput
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </form>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex" }}>
              <Button
                startIcon={<WalletIconOutlined />}
                sx={{ color: "white" }}
              >
                {checkout + "₺"}
              </Button>

              <Button
                startIcon={<PersonIconOutlined />}
                sx={{ color: "white" }}
              >
                Kerem
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
