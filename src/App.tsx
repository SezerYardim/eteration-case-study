import { Outlet } from "react-router-dom";
import "./App.css";
import PrimarySearchAppBar from "./components/AppBar";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <PrimarySearchAppBar />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
}

export default App;
