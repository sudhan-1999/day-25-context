import React from "react";
import Productslist from "./products";
import Details from "./Detailed";
import { Routes, Route,Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to="/Productslist" element={<Productslist/>}>Product</Link>
      <Routes>
        <Route path="/Productslist" element={<Productslist />} />
        <Route path="/Productslist/:id" element={<Details />} />
      </Routes>
      
    </div>
  );
}

export default App;
