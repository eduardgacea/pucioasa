import { TProduct } from "./product";

export type TCartContextState = {
  products: TProduct[];
  addProductToCart: (product: TProduct) => void;
  removeProductFromCart: (id: number) => void;
  clearProductsFromCart: () => void;
};

export type TCartContextAction =
  | { type: "addProductToCart"; payload: TProduct }
  | { type: "removeProductFromCart"; payload: number }
  | { type: "clearProductsFromCart" };
