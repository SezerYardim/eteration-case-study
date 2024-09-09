import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import "./App.css";
import PrimarySearchAppBar from "./components/AppBar/AppBar";

function App() {
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
