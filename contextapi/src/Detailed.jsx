import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Details({ data }) {
  const [count, setCount] = useState(1);
  function plus() {
    setCount(count + 1);
  }
  function minus() {
    setCount(count - 1);
  }
  const { id } = useParams();
  const product = data[id];

  if (!product) {
    return (
      <div
        style={{
          "margin-left": "400px",
          "margin-top": "200px",
          fontSize: "50px",
          "font-weight": "bold",
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
            <img src={data[id].images} alt="mobiles.." />
          </span>
        </div>
        <div className="col-lg-6">
          <h3 className="span2">{data[id].title}</h3>
          <p>{data[id].description}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <div className="span3">
            <button onClick={minus}>-</button>
            <span className="span4">{count}</span>
            <button onClick={plus}>+</button>
          </div>
          <div className="span5">${count * data[id].price}</div>
        </div>
        <div className="col-lg-6">
          <div>
            <p>Subtotal:${count * data[id].price}</p>
            <p>Shipping:Free</p>
          </div>
        </div>
      </div>
      <div>
        <h4>Total:${count * data[id].price}</h4>
      </div>
    </div>
  );
}

export default Details;
