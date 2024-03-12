import React from "react";
import { useState } from "react";

function Details({e}) {
  const [count,setCount]=useState("1");
  function plus(){
    setCount(count + 1);
  }
  function minus(){
    setCount(count - 1);
  }
 //const {id} =useParams()
  return (
    <div>
      <div className="row">
        <div className="col-lg-6">
          <span><img src={e.images[0]} alt="mobiles.." /></span>
          <span>{e.title}
          <p>{e.description}</p></span>
        </div>
      </div>
      <div className="col-lg-6">
      <span>
        <button onClick={plus}>+</button></span>
        <span> <p>{count}</p></span>
        <span><button onClick={minus}>-</button>
        </span>
        <span>${count*e.price}</span>
      </div>
      <div className="row">
      <div className="col-lg-6">
        <div>
          <p>Subtotal:</p>
          <p>Shipping:</p>
        </div>
      </div>
      <div className="col-lg-6">
        <div>
          <p>${count*e.price}</p>
          <p>Free</p>
        </div>
      </div>
      </div>
      <div><h4>Total:${count*e.price}</h4></div>
    </div>
  );
}
/*id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg",
      ],*/

export default Details;
