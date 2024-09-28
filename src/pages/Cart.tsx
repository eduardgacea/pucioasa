import { CartContext } from "../features/Cart/CartContextProvider";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useContext } from "react";

import QuantitySelector from "../ui/QuantitySelector";
import Button from "../ui/Button";

import styled from "styled-components";

const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

const CartItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
`;

const ProductDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ProductImg = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 100%;
`;

const ProductName = styled.span`
  font-family: var(--sans);
  font-size: 1.25rem;
`;

const PriceDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Price = styled.span`
  font-family: var(--sans);
`;

const TotalPrice = styled.div`
  margin: 4rem 0;
  font-size: 1.25rem;
  font-weight: 700;
  font-family: var(--sans);

  span {
    color: var(--ucla-blue);
  }
`;

function Cart() {
  const { products, removeProductFromCart } = useContext(CartContext);

  if (products.length === 0)
    return (
      <div>
        <span style={{ fontFamily: "var(--sans)", fontSize: "1.25rem", fontWeight: "700", marginRight: "1rem" }}>
          Cosul dumneavostra de cumparaturi este gol!
        </span>
        <Link to="/shop">
          <Button>Inapoi la magazin</Button>
        </Link>
      </div>
    );

  return (
    <>
      <CartItemsList>
        {products.map((product) => (
          <CartItem key={product.id}>
            <ProductDetails>
              <ProductImg src={product.image} />
              <ProductName>{product.name}</ProductName>
            </ProductDetails>
            <PriceDetails>
              <QuantitySelector id={product.id} />
              <Price>Pret total: {(product.quantity * product.price).toFixed(2)} RON</Price>
              <Icon icon={faXmark} onClick={() => removeProductFromCart(product.id)} color="var(--imperial-red)" />
            </PriceDetails>
          </CartItem>
        ))}
      </CartItemsList>
      <TotalPrice>
        Valoare totala comanda:{" "}
        <span>
          {products.reduce((total, product) => (total += product.price * product.quantity), 0).toFixed(2)} RON
        </span>
      </TotalPrice>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/shop">
          <Button>Inapoi la magazin</Button>
        </Link>
        <Link to="/checkout">
          <Button>Plaseaza Comanda!</Button>
        </Link>
      </div>
    </>
  );
}

export default Cart;
