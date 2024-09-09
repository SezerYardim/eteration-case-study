import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

import ModelFilter from "../ModelFilter/ModelFilter";
import SortByFilter from "../SortByFilter/SortByFilter";
import BrandsFilter from "../BrandsFilter/BrandsFilter";

type DrawerAppBarProps = {
  onToggleDrawer: () => void;
  isOpen: boolean;
};

export default function DrawerAppBar({
  onToggleDrawer,
  isOpen,
}: DrawerAppBarProps) {
  const navigate = useNavigate();
  return (
    <Drawer
      container={document.body}
      variant="temporary"
      open={isOpen}
      onClose={onToggleDrawer}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: "block", lg: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: 240,
        },
      }}
    >
      <Box onClick={onToggleDrawer} sx={{ textAlign: "center" }}>
        <Typography
          variant="h6"
          noWrap
          component="button"
          sx={{
            display: "block",
            fontWeight: "700",
            backgroundColor: "primary.main",
            color: "white",
            borderRadius: "4px",
            width: "100%",
            padding: "4px 0",
          }}
          onClick={() => navigate("/")}
        >
          Eteration
        </Typography>
        <Divider />
        <List>
          <SortByFilter></SortByFilter>
          <BrandsFilter></BrandsFilter>
          <ModelFilter></ModelFilter>
        </List>
      </Box>
    </Drawer>
  );
}
