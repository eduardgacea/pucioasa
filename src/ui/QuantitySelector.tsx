import { CartContext } from "../features/Cart/CartContextProvider";
import { useContext } from "react";

import styled from "styled-components";

const StyledQuantitySelector = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Action = styled.button`
  font-size: 1rem;
  width: 24px;
  cursor: pointer;
`;

const Counter = styled.span`
  font-family: var(--sans);
`;

type Props = {
  id: number;
};

function QuantitySelector({ id }: Props) {
  const { products, incrementQty, decrementQty, removeProductFromCart } = useContext(CartContext);

  const product = products.find((p) => p.id === id); // this component only renders if the product is in cart so .find() can't be falsy

  const handleIncrement = () => incrementQty(id);
  const handleDecrement = () => {
    if (product?.quantity === 1) removeProductFromCart(id);
    else decrementQty(id);
  };

  return (
    <StyledQuantitySelector>
      <Action onClick={handleDecrement}>-</Action>
      <Counter>{product?.quantity}</Counter>
      <Action onClick={handleIncrement}>+</Action>
    </StyledQuantitySelector>
  );
}

export default QuantitySelector;
