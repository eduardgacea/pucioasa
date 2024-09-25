import { TCartContextAction, TCartContextState } from "../../types/cart";
import { createContext, useReducer } from "react";
import { TProduct } from "../../types/product";

const initialState: TCartContextState = {
  products: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  clearProductsFromCart: () => {},
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
    default:
      return prevState;
  }
}

function CartContextProvider({ children }: { children: React.ReactNode }) {
  const [{ products }, dispatch] = useReducer(reducer, initialState);

  const addProductToCart = (product: TProduct) => dispatch({ type: "addProductToCart", payload: product });
  const removeProductFromCart = (id: number) => dispatch({ type: "removeProductFromCart", payload: id });
  const clearProductsFromCart = () => dispatch({ type: "clearProductsFromCart" });

  return (
    <CartContext.Provider value={{ products, addProductToCart, removeProductFromCart, clearProductsFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };
