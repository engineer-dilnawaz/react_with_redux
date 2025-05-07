import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartIcon from "url:../assets/cart-icon.svg";
import HeartIcon from "url:../assets/heart-icon.svg";

export default function Header() {
  const { cartItems, wishListItems } = useSelector((state) => {
    return { cartItems: state.cartItem, wishListItems: state.wishList };
  });

  const totalCartItems = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);

  const totalWishlistItems = wishListItems.length;

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
