const initialState = [];

// Action Types
const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_INCREASE_ITEM_QUANTITY = "cart/increaseItemQuantity";
const CART_DECREASE_ITEM_QUANTITY = "cart/decreaseItemQuantity";

// Action Creators
export function decreaseCartItemQuantity(productId) {
  return {
    type: CART_DECREASE_ITEM_QUANTITY,
    payload: { productId },
  };
}

export function increaseCartItemQuantity(productId) {
  return {
    type: CART_INCREASE_ITEM_QUANTITY,
    payload: { productId },
  };
}

export function addCartItem(productId, quantity = 1) {
  return {
    type: CART_ADD_ITEM,
    payload: { productId, quantity },
  };
}

export function removeCartItem(productId) {
  return {
    type: CART_REMOVE_ITEM,
    payload: { productId },
  };
}

// Reducers
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      return [...state, action.payload];
    case CART_REMOVE_ITEM:
      return state.filter(
        (item) => item.productId !== action.payload.productId
      );
    case CART_INCREASE_ITEM_QUANTITY:
      return state.map((cartItem) => {
        if (cartItem.productId === action.payload.productId)
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        return cartItem;
      });
    case CART_DECREASE_ITEM_QUANTITY:
      return state
        .map((cartItem) => {
          if (cartItem.productId === action.payload.productId)
            return {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            };
          return cartItem;
        })
        .filter((cartItem) => cartItem.quantity > 0);

    default:
      return state;
  }
}
