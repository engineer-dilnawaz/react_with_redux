import React from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import {
  getAllProducts,
  getProductError,
  getProductLoadingState,
} from "../store/slices/productsSlice";

export default function Home() {
  const productsList = useSelector(getAllProducts);
  const loading = useSelector(getProductLoadingState);
  const error = useSelector(getProductError);

  if (loading) return <h1 style={{ textAlign: "center" }}>Loading...</h1>;

  if (error) return <h2 style={{ textAlign: "center" }}>{error}</h2>;

  return (
    <div className="products-container">
      {productsList.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
          productId={id}
        />
      ))}
    </div>
  );
}
