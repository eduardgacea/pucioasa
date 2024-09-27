import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../api/products";
import { useParams } from "react-router-dom";

function Product() {
  const { productId } = useParams();

  const {
    isPending,
    data: product,
    error,
  } = useQuery({
    queryKey: ["product"],
    queryFn: () => {
      if (!productId) throw new Error("Could not find product ID");
      return fetchProduct(+productId);
    },
  });

  if (error) return <div>Error: {error.message}</div>;

  return isPending ? (
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
