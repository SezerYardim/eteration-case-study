import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import "./App.css";
import PrimarySearchAppBar from "./components/AppBar/AppBar";
import { useEffect } from "react";
import { getItemFromLocalStorage } from "./helpers/helpers";
import { setCart } from "./store/slices/cartSlice";
import { useAppDispatch } from "./store/hooks";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const cartData = getItemFromLocalStorage("cart");
    if (cartData) {
      dispatch(setCart(cartData));
    }
  }, []);
  return (
    <>
      <PrimarySearchAppBar />
      <Container maxWidth="xl" sx={{ padding: "24px 0" }}>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
