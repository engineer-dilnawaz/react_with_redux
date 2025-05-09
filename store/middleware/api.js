const BASE_URL = "https://fakestoreapi.com";

export const apiMiddleware = (store) => (next) => (action) => {
  //   console.log(store, next, action);
  if (action.type === "api/makeCall") {
    next(action);
    const { url, onStart, onSuccess, onError } = action.payload;
    store.dispatch({ type: onStart });
    fetch(`${BASE_URL}${url}`)
      .then((response) => response.json())
      .then((data) => {
        store.dispatch({
          type: onSuccess,
          payload: data,
        });
      })
      .catch((e) =>
        store.dispatch({
          type: onError,
        })
      );
  } else {
    next(action);
  }
};

export const fetchData = (payload) => ({ type: "api/makeCall", payload });
