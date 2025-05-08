import { combineReducers, createStore } from "redux";

import cartReducer from "./slices/cartSlice";
import productsReducer from "./slices/productsSlice";
import wishListReducer from "./slices/wishListSlice";
import { produce } from "immer";

const rootReducer = combineReducers({
  products: productsReducer,
  cartItem: cartReducer,
  wishList: wishListReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.dispatch(addCartItem(1, 5));
// store.dispatch(addCartItem(12));

// store.dispatch(removeCartItem(18));
// store.dispatch(removeCartItem(12));

// store.dispatch(increaseCartItemQuantity(5));
// store.dispatch(increaseCartItemQuantity(5));

// store.dispatch(decreaseCartItemQuantity(5));
// store.dispatch(decreaseCartItemQuantity(5));

// store.dispatch(addWishlistItem(1));
// store.dispatch(addWishlistItem(15));

// store.dispatch(addWishlistItem(8));
// store.dispatch(removeWishlistItem(1));

// console.log(store.getState());

// const users = [
//   {
//     name: "Dilnawaz",
//     age: 26,
//   },
//   {
//     name: "Ahmed",
//     age: 46,
//   },
//   {
//     name: "Bilal",
//     age: 16,
//   },
// ];

// users[1].age = 20;

// const newUsers = users.map((user, index) =>
//   index === 1 ? { ...user, age: 20 } : user
// );
// console.log(newUsers);
// console.log(users);

// const immerUsers = produce(users, (usersCopy) => {
//   usersCopy[1].age = 20;
// });

// console.log(immerUsers);
// console.log(users);
