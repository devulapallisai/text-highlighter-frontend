import React from "react";
import { Routes, Route } from "react-router-dom";
import Addtext from "./Addtext";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addText" element={<Addtext />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
