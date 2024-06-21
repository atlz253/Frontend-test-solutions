import { ReactNode } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import { PageLoader } from "../components/UI/PageLoader/PageLoader";

export function StoreProvider({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<PageLoader />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
