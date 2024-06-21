import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/reset.css";
import { StoreProvider } from "./redux/StoreProvider.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import { App, ConfigProvider as AntConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider>
      <AntConfigProvider theme={{ hashed: false }}>
        <App>
          <RouterProvider router={router} />
        </App>
      </AntConfigProvider>
    </StoreProvider>
  </React.StrictMode>
);
