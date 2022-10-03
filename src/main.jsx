import React from "react";
import i18n from "./i18n";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

i18n.on("languageChanged", (locale) => {
  const direction = i18n.dir(locale);
  document.dir = direction;
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
