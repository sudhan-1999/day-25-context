
import React, { useContext, useState, createContext } from "react";
import { useParams } from "react-router-dom";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [count, setCount] = useState(1);

  function plus() {
    setCount(count + 1);
  }

  function minus() {
    setCount(count - 1);
  }

  return (
    <ProductContext.Provider value={{ count, plus, minus }}>
      {children}
    </ProductContext.Provider>
  );
};

function Details({ data }) {
  const { count, plus, minus } = useContext(ProductContext) ;
  const { id } = useParams();
  const product = data[id];

  if (!product) {
    return (
      <div
        style={{
          marginLeft: "400px",
          marginTop: "200px",
          fontSize: "50px",
          fontWeight: "bold",
        }}
      >
        Product not found!.....
      </div>
    );
  }

  return (
    <div className="detailedpage">
      <div className="row">
        <div className="col-lg-6">
          <span className="span1">
            <img src={product.images[0]} alt="mobiles.." />
          </span>
        </div>
        <div className="col-lg-6">
          <h3 className="span2">{product.title}</h3>
          <p className="des">{product.description}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <div className="span3">
            <button className="bt" onClick={minus}>-</button>
            <span className="span4">{count}</span>
            <button className="bt" onClick={plus}>+</button>
          </div>
          <div className="span5">${count * product.price}</div>
        </div>
        <div className="col-lg-6">
          <div>
            <p className="p1">Subtotal:${count * product.price}</p>
            <p className="p2">Shipping:Free</p>
          </div>
        </div>
      </div>
      <div>
        <h4>Total:${count * product.price}</h4>
      </div>
    </div>
  );
}

export default function DetailsWrapper(props) {
  // Assuming you pass 'data' as a prop to DetailsWrapper
  return (
    <ProductContextProvider>
      <Details {...props} />
    </ProductContextProvider>
  );
}


