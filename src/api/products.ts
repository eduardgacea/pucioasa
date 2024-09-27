import { supabase } from "../services/supabase";
import { TProduct } from "../types/product";

export async function fetchProducts(): Promise<TProduct[]> {
  try {
    const { data, error } = await supabase.from("products").select("*");
    if (error) throw new Error(error.message);
    if (!data) throw new Error("failed to fetch products");
    return data;
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
    else throw new Error("unrecognized error type");
  }
}

export async function fetchProduct(id: number): Promise<TProduct> {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id);
    if (error) throw new Error(error.message);
    if (!data) throw new Error("failed to fetch products");
    return data[0];
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
    else throw new Error("unrecognized error type");
  }
}
