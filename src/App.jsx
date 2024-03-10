import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Category, Home, NotFound } from "./Pages";
import "./App.css";

function App() {
  return (
    <div class="absolute overflow-x-hidden top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<Category />} />
          {/* <Route path="/category" element={<Category />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
