import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductListView from "../views/ProductListView";
import ProductDetailsView from "../views/ProductDetailsView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <ProductListView />
      },
      {
        path: "/:id",
        element: <ProductDetailsView />
      }
    ]
  },
]);
