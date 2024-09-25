import { TProduct } from "./product";

export type TCartProduct = TProduct & {
  quantity: number;
};

export type TCartContextState = {
  products: TCartProduct[];
  addProductToCart: (product: TProduct) => void;
  removeProductFromCart: (id: number) => void;
  clearProductsFromCart: () => void;
  incrementQty: (id: number) => void;
  decrementQty: (id: number) => void;
};

export type TCartContextAction =
  | { type: "addProductToCart"; payload: TCartProduct }
  | { type: "removeProductFromCart"; payload: number }
  | { type: "incrementQty"; payload: number }
  | { type: "decrementQty"; payload: number }
  | { type: "clearProductsFromCart" };
