import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFetchData";

export const ProductContext = createContext();

export function ProductContextProvider({ children }) {
  const { data: products, loading, error } = useFetchData("/products");

  const instance = axios.create({
    baseURL: "https://fakestoreapi.com/products",
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
  });

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}
