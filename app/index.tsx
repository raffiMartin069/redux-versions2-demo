import React from "react";
import { store } from "./store";
import App from "./app";
import { Provider } from "react-redux";

// Top to Bottom

export default function Index() {
  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
}
