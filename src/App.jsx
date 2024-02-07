import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts([...res.data]);
      console.log(res.data);
      setLoading(false);
    });
  }, []);

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
