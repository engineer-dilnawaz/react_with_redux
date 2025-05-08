import { createSlice } from "@reduxjs/toolkit";

function findItemIndex(state, action) {
  return state.findIndex(
    (cartItem) => cartItem.productId === action.payload.productId
  );
}

// Reducers
const slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCartItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCartItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state.splice(existingItemIndex, 1);
    },
    increaseCartItemQuantity: {
      reducer: (state, action) => {
        const existingItemIndex = findItemIndex(state, action);
        state[existingItemIndex].quantity += 1;
      },
      prepare: (productId) => ({ payload: { productId } }),
    },
    decreaseCartItemQuantity: {
      reducer: (state, action) => {
        const existingItemIndex = findItemIndex(state, action);
        state[existingItemIndex].quantity -= 1;
        if (state[existingItemIndex].quantity === 0) {
          state.splice(existingItemIndex, 1);
        }
      },
      prepare: (productId) => ({ payload: { productId } }),
    },
  },
});

export default slice.reducer;

export const {
  addCartItem,
  removeCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} = slice.actions;

/*
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

export function addCartItem(productData) {
  return {
    type: CART_ADD_ITEM,
    payload: productData,
  };
}

export function removeCartItem(productId) {
  return {
    type: CART_REMOVE_ITEM,
    payload: { productId },
  };
}

*/

/******************************************/
// with immer js custom
/******************************************/
// export default function cartReducer(orignalState = initialState, action) {
//   return produce(orignalState, (state) => {
//     const existingItemIndex = state.findIndex(
//       (cartItem) => cartItem.productId === action.payload.productId
//     );
//     switch (action.type) {
//       case CART_ADD_ITEM:
//         if (existingItemIndex !== -1) {
//           state[existingItemIndex].quantity += 1;
//           break;
//         }
//         state.push({ ...action.payload, quantity: 1 });
//         break;
//       case CART_REMOVE_ITEM:
//         state.splice(existingItemIndex, 1);
//         break;
//       case CART_INCREASE_ITEM_QUANTITY:
//         state[existingItemIndex].quantity += 1;
//         break;
//       case CART_DECREASE_ITEM_QUANTITY:
//         state[existingItemIndex].quantity -= 1;
//         if (state[existingItemIndex].quantity === 0) {
//           state.splice(existingItemIndex, 1);
//         }
//     }
//     return state;
//   });
// }

/******************************************/
// without immer js
// export default function cartReducer(state = initialState, action) {
//   switch (action.type) {
//     case CART_ADD_ITEM: {
//       const existingItem = state.find(
//         (cartItem) => cartItem.productId === action.payload.productId
//       );
//       if (existingItem) {
//         return state.map((cartItem) => {
//           if (cartItem.productId === existingItem.productId) {
//             return { ...cartItem, quantity: cartItem.quantity + 1 };
//           } else {
//             return cartItem;
//           }
//         });
//       }
//       return [...state, { ...action.payload, quantity: 1 }];
//     }
//     case CART_REMOVE_ITEM:
//       return state.filter(
//         (item) => item.productId !== action.payload.productId
//       );
//     case CART_INCREASE_ITEM_QUANTITY:
//       return state.map((cartItem) => {
//         if (cartItem.productId === action.payload.productId)
//           return {
//             ...cartItem,
//             quantity: cartItem.quantity + 1,
//           };
//         return cartItem;
//       });
//     case CART_DECREASE_ITEM_QUANTITY:
//       return state
//         .map((cartItem) => {
//           if (cartItem.productId === action.payload.productId)
//             return {
//               ...cartItem,
//               quantity: cartItem.quantity - 1,
//             };
//           return cartItem;
//         })
//         .filter((cartItem) => cartItem.quantity > 0);

//     default:
//       return state;
//   }
// }
/******************************************/
