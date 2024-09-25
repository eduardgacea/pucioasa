import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from "../features/Cart/CartContextProvider";
import { Link } from "react-router-dom";
import { useContext } from "react";

import styled from "styled-components";

const StyledLink = styled(Link)`
  position: relative;
`;

const ProductCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--sans);
  color: var(--white);
  font-size: 0.85rem;
  font-weight: 700;
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background-color: var(--imperial-red);
  top: -16px;
  right: -8px;
`;

function CartIcon() {
  const { products } = useContext(CartContext);

  const totalQty = products.reduce((qty, product) => (qty += product.quantity), 0);

  return (
    <StyledLink to="/cart">
      <FontAwesomeIcon icon={faCartShopping} size="2xl" color="var(--davy-gray)" />
      {products.length > 0 && <ProductCount>{totalQty}</ProductCount>}
    </StyledLink>
  );
}

export default CartIcon;
