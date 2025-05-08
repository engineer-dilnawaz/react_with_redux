import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

export default function Cart() {
  // const cartItems = [
  //   {
  //     id: 1,
  //     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //     imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //     quantity: 1,
  //     rating: 3.9,
  //     price: 109.95,
  //   },
  //   {
  //     id: 2,
  //     title: "Mens Cotton Jacket",
  //     imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  //     quantity: 1,
  //     rating: 4.7,
  //     price: 55.99,
  //   },
  //   {
  //     id: 3,
  //     title: "Mens Casual Slim Fit",
  //     imageUrl: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  //     quantity: 1,
  //     rating: 2.1,
  //     price: 15.99,
  //   },
  // ];

  const cartItems = useSelector(({ products, cartItem }) => {
    return cartItem.list
      .map(({ productId, quantity }) => {
        const addedItem = products.list.find(
          (product) => product.id === productId
        );
        return { ...addedItem, quantity };
      })
      .filter(({ title }) => title);
  });

  const { loading, error } = useSelector((state) => state.cartItem);

  const totalPrice = cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );

  if (loading) return <h1 style={{ textAlign: "center" }}>Loading...</h1>;

  if (error) return <h2 style={{ textAlign: "center" }}>{error}</h2>;

  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {cartItems.map(
          ({ id, title, rating, price, image, quantity }, index) => (
            <CartItem
              key={index}
              title={title}
              price={price}
              quantity={quantity}
              imageUrl={image}
              rating={rating.rate}
              productId={id}
            />
          )
        )}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">${parseFloat(totalPrice).toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
