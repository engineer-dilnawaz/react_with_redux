import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import WishlistItem from "../components/WishlistItem";

export default function Wishlist() {
  const wishlistItem = useSelector((state) => state.wishList);

  return (
    <div className="cart-container">
      <h2>Items in Your Wishlist</h2>
      <hr />
      <div className="wishlist-items-container">
        {/* <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="item-price">Remove</div>
        </div> */}
        {wishlistItem.map(({ productId, title, rating, price, imageUrl }) => (
          <WishlistItem
            key={productId}
            title={title}
            price={price}
            imageUrl={imageUrl}
            rating={rating}
            productId={productId}
          />
        ))}
      </div>
    </div>
  );
}
