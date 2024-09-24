import { supabase } from "../services/supabase";
import { type TProduct } from "../types/product";
import { useEffect, useState } from "react";

import ProductCard from "../ui/ProductCard";
import styled from "styled-components";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

function Shop() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [error, setError] = useState("");

  const isLoading = products.length === 0 && !error;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase.from("products").select("*");
        if (error) throw new Error(error.message);
        if (!data) throw new Error("failed to fetch products");
        setProducts(data);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
        else throw new Error("unrecognized error type");
      }
    };
    fetchProducts();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <ProductsGrid>
      {isLoading
        ? "Loading..."
        : products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </ProductsGrid>
  );
}

export default Shop;
