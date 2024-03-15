
import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ Details }) => {
  const [count, setCount] = useState(1);

  function plus() {
    setCount(count + 1);
  }

  function minus() {
    setCount(count - 1);
  }

  return (
    <ProductContext.Provider value={{ count, plus, minus }}>
      {Details}
    </ProductContext.Provider>
  );
};
