import { useDispatch } from "react-redux";
import DeleteIcon from "url:../assets/delete-icon.svg";
import { removeWishlistItem } from "../store/slices/wishListSlice";

export default function WishlistItem({
  productId,
  title,
  rating,
  price,
  imageUrl,
}) {
  const dispatch = useDispatch();

  function handleRemoveWishlistItem() {
    dispatch(removeWishlistItem(productId));
  }

  return (
    <div className="wishlist-item-container">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{rating} ★ ★ ★ ★</p>
      <p>${price}</p>

      <button onClick={handleRemoveWishlistItem}>
        <img src={DeleteIcon} alt="delete-icon" />
        <h3>Remove</h3>
      </button>

      {/* <div className="cart-item">
      </div>
      <div className="delete-icon-container" onClick={handleRemoveWishlistItem}>
        <img src={DeleteIcon} alt="delete-icon" />
      </div> */}
    </div>
  );
}
