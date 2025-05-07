import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartIcon from "url:../assets/cart-icon.svg";

export default function Header() {
  const cartItems = useSelector((state) => state.cartItem);

  const totalCartItems = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count">{totalCartItems}</div>
        </Link>
      </div>
    </header>
  );
}
