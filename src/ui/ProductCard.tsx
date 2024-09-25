import type { TProduct } from "../types/product";

import { CartContext } from "../features/Cart/CartContextProvider";
import { Link } from "react-router-dom";
import { useContext } from "react";

import QuantitySelector from "./QuantitySelector";
import Button from "./Button";

import styled from "styled-components";

const Card = styled.div`
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);
  padding: 1rem;
  width: 320px;
  height: 100%;
  justify-self: center;
  align-self: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 270px;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-family: var(--sans);
  font-size: 1.25rem;
  font-weight: 700;

  > a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  > a:hover {
    text-decoration: underline;
  }
`;

const Price = styled.p`
  font-family: var(--sans);
`;

const ProductCardActions = styled.div`
  display: flex;
  gap: 2rem;
`;

type Props = {
  product: TProduct;
};

function ProductCard({ product }: Props) {
  const { products, addProductToCart, removeProductFromCart } = useContext(CartContext);

  const isInCart = !!products.find((p) => p.id === product.id);

  const handleCartAction = () => {
    if (!isInCart) addProductToCart(product);
    else removeProductFromCart(product.id);
  };

  return (
    <Card>
      <ProductImage src={product.image} />
      <Title>
        <Link to={`/shop/${product.id}`}>{product.name}</Link>
      </Title>
      <Price>{product.price} RON</Price>
      <ProductCardActions>
        <Button onClick={handleCartAction}>{isInCart ? "Remove" : "Add"}</Button>
        {isInCart && <QuantitySelector id={product.id} />}
      </ProductCardActions>
    </Card>
  );
}

export default ProductCard;
