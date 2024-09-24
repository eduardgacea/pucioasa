import { Link } from "react-router-dom";
import { type TProduct } from "../types/product";

import styled from "styled-components";

type Props = {
  product: TProduct;
};

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

function ProductCard({ product }: Props) {
  return (
    <Card>
      <ProductImage src={product.image} />
      <Title>
        <Link to={`/shop/${product.id}`}>{product.name}</Link>
      </Title>
      <Price>{product.price} RON</Price>
    </Card>
  );
}

export default ProductCard;
