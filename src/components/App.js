import React from "react";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import HomePage from "../pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "../pages/ProductPage";

import ShopProvider from "../context/shopContext";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

function App() {
  return (
    <ShopProvider>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Routes>
            <Route path="/product" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
      </StyletronProvider>
    </ShopProvider>
  );
}

export default App;
