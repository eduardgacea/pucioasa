import { supabase } from "../services/supabase";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { TProduct } from "../types/product";

function Product() {
  const [product, setProduct] = useState<TProduct>();
  const [error, setError] = useState("");
  const params = useParams();

  const isLoading = !product && !error;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .eq("id", params.productId);
        if (error) throw new Error(error.message);
        if (!data) throw new Error("failed to fetch products");
        setProduct(data[0]);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
        else throw new Error("unrecognized error type");
      }
    };
    fetchProduct();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
      <img style={{ width: "400px" }} src={product?.image} />
      <div>{product?.name}</div>
      <div>{product?.price}</div>
      <div>{product?.description}</div>
    </>
  );
}

export default Product;
