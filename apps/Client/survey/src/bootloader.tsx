import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "ui/styles.css";
import App from "./App";
import authConfig from "./authConfig";

// Mount function to start up the app
const mount = (el: any, { accessToken }: any) => {
  authConfig.setToken = accessToken;
  const root = createRoot(el);
  root.render(<App />);
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#survey-root");

  if (devRoot) {
    mount(devRoot, { accessToken: "" });
  }
}

// We are running through container
// and we should export the mount function
export { mount };
