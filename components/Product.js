import { useDispatch, useSelector } from "react-redux";
import { addCartItem, removeCartItem } from "../store/cartReducer";
import { addWishlistItem, removeWishlistItem } from "../store/wishListReducer";

export default function Product({ productId, title, rating, price, imageUrl }) {
  const dispatch = useDispatch();
  const { wishlistItems, cartItems } = useSelector((state) => {
    return {
      wishlistItems: state.wishList,
      cartItems: state.cartItem,
    };
  });

  function handleAddToCart() {
    dispatch(addCartItem({ productId, title, rating, price, imageUrl }));
  }

  function handleRemoveFromCart() {
    dispatch(removeCartItem(productId));
  }

  function handleAddToWishlist() {
    dispatch(addWishlistItem({ productId, title, rating, price, imageUrl }));
  }

  function handleRemoveFromWishlist() {
    dispatch(removeWishlistItem(productId));
  }

  const hasAddedToWishlist = wishlistItems.some(
    (wishlistItem) => wishlistItem.productId === productId
  );

  const hasAddedToCart = cartItems.some(
    (cartItem) => cartItem.productId === productId
  );

  return (
    <div className="product">
      <div className="product-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        <p className="rating">{+rating} ★ ★ ★ ★</p>
        <p className="price">${price}</p>
      </div>
      <div className="cta-container">
        <button
          onClick={hasAddedToCart ? handleRemoveFromCart : handleAddToCart}
        >
          {hasAddedToCart ? "Remove from Cart" : "Add to Cart"}
        </button>
        <button
          onClick={
            hasAddedToWishlist ? handleRemoveFromWishlist : handleAddToWishlist
          }
        >
          {hasAddedToWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
      </div>
    </div>
  );
}
