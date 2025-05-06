import React from "react";
import { useSelector } from "react-redux";

import Product from "./components/Product";
import "./App.css";

export default function App() {
  const productsList = useSelector((state) => state.products);
  return (
    <div className="products-container">
      {productsList.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
        />
      ))}
    </div>
  );
}
