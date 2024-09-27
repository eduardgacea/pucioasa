import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/products";

import ProductCard from "../ui/ProductCard";

import styled from "styled-components";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
`;

function Shop() {
  const {
    isPending,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (error) return <div>Error: {error.message}</div>;

  return (
    <ProductsGrid>
      {isPending
        ? "Loading..."
        : products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </ProductsGrid>
  );
}

export default Shop;
