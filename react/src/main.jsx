import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CountProvider } from "./components/CountContext.jsx";
import store from "./store.js";
import { Provider } from "react-redux";
store.subscribe(() => console.log(store.getState()));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CountProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CountProvider>
  </StrictMode>
);
