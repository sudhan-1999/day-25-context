import React from "react";
import Productslist from "./products";
//import Details from "./Detailed";
//import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    /*<BrowserRouter>
    <div>
      <Link to='/Details'>Details</Link>
     <Productslist/>
     <Details/>
     <Routes>
 <Route path="/products/${e.id}" element={<Details />} />
 </Routes>
    </div>
    </BrowserRouter>*/
    <div>
    <Productslist/>
     {/*<Details/>*/}
     </div>
  );
}

export default App;


