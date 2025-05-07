import { useDispatch } from "react-redux";
import { addCartItem } from "../store/cartReducer";

export default function Product({ productId, title, rating, price, imageUrl }) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addCartItem({ productId, title, rating, price, imageUrl }));
  }

  function handleAddToWishlist() {}

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
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleAddToWishlist}>Add to Wishlist</button>
      </div>
    </div>
  );
}
