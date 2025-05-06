import { combineReducers, createStore } from "redux";

import cartReducer, {
  addCartItem,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeCartItem,
} from "./cartReducer";
import productsReducer from "./productsReducer";
import wishListReducer, {
  addWishlistItem,
  removeWishlistItem,
} from "./wishListReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cartItem: cartReducer,
  wishList: wishListReducer,
});

const store = createStore(
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
