import { createContext, useContext, useEffect, useState } from "react";

const StoreContext = createContext();

export function CustomReduxProvider({ children, store }) {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => setState(store.getState()));

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <StoreContext.Provider value={{ state, dispatch: store.dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export const useCustomDispatch = () => useContext(StoreContext).dispatch;

export const useCustomSelector = (selector) =>
  selector(useContext(StoreContext).state);
