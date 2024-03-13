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
  console.log(data);
  const { id } = useParams();
  return (
    <div className="detailedpage">
      <div className="row">
        <div className="col-lg-6">
          <span className="span1">
            <img src={data.title} alt="mobiles.." />
          </span>
        </div>
        <div className="col-lg-6">
          <h3 className="span2">
            {data.title}-{id}title
          </h3>
          <p>{data.description}description</p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <div className="span3">
            <button onClick={minus}>-</button>
            <span className="span4">{count}</span>
            <button onClick={plus}>+</button>
          </div>
          <div className="span5">${count * data.price}</div>
        </div>
        <div className="col-lg-6">
          <div>
            <p>Subtotal:${count * data.price}</p>
            <p>Shipping:Free</p>
          </div>
        </div>
      </div>
      <div>
        <h4>Total:${count * data.price}</h4>
      </div>
    </div>
  );
}

export default Details;
