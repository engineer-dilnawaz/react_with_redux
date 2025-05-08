import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartIcon from "url:../assets/cart-icon.svg";
import HeartIcon from "url:../assets/heart-icon.svg";
import {
  fetchProducts,
  fetchProductsError,
  updateAllProducts,
} from "../store/slices/productsSlice";
import { productsList } from "../constants/productsList";
import {
  fetchCartItem,
  fetchCartItemsError,
  loadCartItems,
} from "../store/slices/cartSlice";

export default function Header() {
  const { cartItems, wishListItems } = useSelector((state) => {
    return { cartItems: state.cartItem, wishListItems: state.wishList };
  });

  const totalCartItems = cartItems.list.reduce(
    (acc, cur) => acc + cur.quantity,
    0
  );

  const totalWishlistItems = wishListItems.length;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());

    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => dispatch(updateAllProducts(data)))
      .catch((e) => dispatch(fetchProductsError()));

    dispatch(fetchCartItem());
    fetch("https://fakestoreapi.com/carts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(loadCartItems(data));
      })
      .catch((e) => dispatch(fetchCartItemsError()));
  }, []);

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <div className="icons-container">
          <Link className="cart-icon" to="/wishlist">
            <img src={HeartIcon} alt="heart-icon" />
            <div className="cart-items-count">{totalWishlistItems}</div>
          </Link>
          <Link className="cart-icon" to="/cart">
            <img src={CartIcon} alt="cart-icon" />
            <div className="cart-items-count">{totalCartItems}</div>
          </Link>
        </div>
      </div>
    </header>
  );
}
