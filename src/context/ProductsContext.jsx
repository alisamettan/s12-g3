import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const instance = axios.create({
    baseURL: "https://fakestoreapi.com/products",
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
  });

  useEffect(() => {
    setLoading(true);
    instance.get().then((res) => {
      setProducts([...res.data]);
      console.log(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
}
