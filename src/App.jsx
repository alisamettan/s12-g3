import { useContext } from "react";
import "./App.css";

import {
  ProductContext,
  ProductContextProvider,
} from "./context/ProductsContext";

function App() {
  const { products, loading } = useContext(ProductContext);

  if (loading) return <h1>Loading....</h1>;

  return (
    <>
      <div className="flex flex-row flex-wrap gap-10 justify-center items-center ">
        {products.map((product) => {
          return (
            <div className="w-1/4 bg-slate-600 rounded-lg p-10">
              <p>{product.description}</p>
              <img className="w-56 h-64" src={product.image} alt="" />
              <p>{product.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
