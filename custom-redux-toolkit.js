import { produce } from "immer";

function findItemIndex(state, action) {
  return state.findIndex(
    (cartItem) => cartItem.productId === action.payload.productId
  );
}

function myCreateSlice(config) {
  const { name, initialState, reducers } = config;
  const actions = {};
  Object.keys(reducers).forEach((key) => {
    actions[key] = function (payload) {
      return {
        type: `${name}/${key}`,
        payload,
      };
    };
  });

  function reducer(originalState = initialState, action) {
    return produce(originalState, function (state) {
      const caseReducer = reducers[action.type.split("/")[1]];
      if (caseReducer) {
        return caseReducer(state, action);
      }
      return state;
    });
  }

  return { actions, reducer };
}

const mySlice = myCreateSlice({
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
