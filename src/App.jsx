/* eslint-disable quotes */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./sass/index.scss";

import Home from "./components/Home";
import About from "./components/About";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
