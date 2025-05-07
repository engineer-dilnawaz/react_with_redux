const initialState = [];
// Action Types
const WISHLIST_ADD_ITEM = "wishList/addItem";
const WISHLIST_REMOVE_ITEM = "wishList/removeItem";

// Action Creators

export function addWishlistItem(productData) {
  return {
    type: WISHLIST_ADD_ITEM,
    payload: productData,
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
    case WISHLIST_ADD_ITEM: {
      const existingItem = state.find(
        (wishlist) => wishlist.productId === action.payload.productId
      );
      if (existingItem) return state;
      return [...state, action.payload];
    }
    case WISHLIST_REMOVE_ITEM:
      return state.filter(
        (product) => product.productId !== action.payload.productId
      );
    default:
      return state;
  }
}
