import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "./firebaseConfig";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Suspense fallback={'Conectado la app...'}>
          <App />
        </Suspense>
      </FirebaseAppProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
