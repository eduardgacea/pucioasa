import { TCartContextAction, TCartContextState, TCartProduct } from "../../types/cart";
import { createContext, useReducer } from "react";
import { TProduct } from "../../types/product";

const initialState: TCartContextState = {
  products: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  clearProductsFromCart: () => {},
  incrementQty: () => {},
  decrementQty: () => {},
};

const CartContext = createContext<TCartContextState>(initialState);

function reducer(prevState: TCartContextState, action: TCartContextAction): TCartContextState {
  switch (action.type) {
    case "addProductToCart":
      return { ...prevState, products: [...prevState.products, action.payload] };
    case "removeProductFromCart":
      return { ...prevState, products: prevState.products.filter((product) => product.id !== action.payload) };
    case "clearProductsFromCart":
      return { ...prevState, products: [] };
    case "incrementQty":
      return {
        ...prevState,
        products: prevState.products.map((prevProduct) =>
          prevProduct.id === action.payload ? { ...prevProduct, quantity: prevProduct.quantity + 1 } : prevProduct
        ),
      };
    case "decrementQty":
      return {
        ...prevState,
        products: prevState.products.map((prevProduct) =>
          prevProduct.id === action.payload ? { ...prevProduct, quantity: prevProduct.quantity - 1 } : prevProduct
        ),
      };
    default:
      return prevState;
  }
}

function CartContextProvider({ children }: { children: React.ReactNode }) {
  const [{ products }, dispatch] = useReducer(reducer, initialState);

  const addProductToCart = (product: TProduct) => {
    const cartProduct: TCartProduct = { ...product, quantity: 1 };
    dispatch({ type: "addProductToCart", payload: cartProduct });
  };
  const removeProductFromCart = (id: number) => dispatch({ type: "removeProductFromCart", payload: id });
  const clearProductsFromCart = () => dispatch({ type: "clearProductsFromCart" });
  const incrementQty = (id: number) => dispatch({ type: "incrementQty", payload: id });
  const decrementQty = (id: number) => dispatch({ type: "decrementQty", payload: id });

  return (
    <CartContext.Provider
      value={{ products, addProductToCart, removeProductFromCart, clearProductsFromCart, incrementQty, decrementQty }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };
