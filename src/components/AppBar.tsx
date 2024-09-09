import PersonIconOutlined from "@mui/icons-material/PersonOutlined";
import WalletIconOutlined from "@mui/icons-material/WalletOutlined";
import { Container, IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setSearchText } from "../store/slices/filterSlice";
import SearchInput from "./SearchInput";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import DrawerAppBar from "./DrawerAppBar";

export default function PrimarySearchAppBar() {
  const navigate = useNavigate();
  const checkout = useAppSelector((state) => state.cart.checkout);
  const dispatch = useAppDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { lg: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              noWrap
              component="button"
              sx={{ display: { xs: "none", lg: "block" }, fontWeight: "700" }}
              onClick={() => navigate("/")}
            >
              Eteration
            </Typography>
            <SearchInput
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(event) => {
                dispatch(setSearchText(event.target.value));
              }}
            />
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
      <DrawerAppBar
        isOpen={mobileOpen}
        onToggleDrawer={handleDrawerToggle}
      ></DrawerAppBar>
    </Box>
  );
}
