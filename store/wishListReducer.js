const initialState = [];
// Action Types
const WISHLIST_ADD_ITEM = "wishList/addItem";
const WISHLIST_REMOVE_ITEM = "wishList/removeItem";

// Action Creators

export function addWishlistItem(productId) {
  return {
    type: WISHLIST_ADD_ITEM,
    payload: { productId },
  };
}
export function removeWishlistItem(productId) {
  return {
    type: WISHLIST_REMOVE_ITEM,
    payload: { productId },
  };
}

// Reducers
export default function wishListReducer(state = initialState, action) {
  switch (action.type) {
    case WISHLIST_ADD_ITEM:
      return [...state, action.payload.productId];
    case WISHLIST_REMOVE_ITEM:
      return state.filter((product) => product !== action.payload.productId);
    default:
      return state;
  }
}
