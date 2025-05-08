import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
} from "../store/slices/cartReducer";

export default function CartItem({
  productId,
  title,
  rating,
  price,
  imageUrl,
  quantity,
}) {
  const dispatch = useDispatch();

  function handleIncreaseCartItem() {
    dispatch(increaseCartItemQuantity(productId));
  }

  function handleDecreaseCartItem() {
    dispatch(decreaseCartItemQuantity(productId));
  }

  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button onClick={handleDecreaseCartItem}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncreaseCartItem}>+</button>
      </div>
      <div className="item-total">
        ${parseFloat(quantity * price).toFixed(2)}
      </div>
    </div>
  );
}
