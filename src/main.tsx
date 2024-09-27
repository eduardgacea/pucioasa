import { CartContextProvider } from "./features/Cart/CartContextProvider.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/react-query.ts";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import ShopLayout from "./layouts/ShopLayout.tsx";
import Checkout from "./pages/Checkout.tsx";
import Product from "./pages/Product.tsx";
import Cart from "./pages/Cart.tsx";
import Home from "./pages/Home.tsx";
import Shop from "./pages/Shop.tsx";

import "./globalStyles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    element: <ShopLayout />,
    children: [
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:productId",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
