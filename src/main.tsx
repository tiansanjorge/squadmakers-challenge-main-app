import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import * as ReactMain from "react";
console.log("React in main:", ReactMain);

import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import { Characters } from "./pages/Characters";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/characters" element={<Characters />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
