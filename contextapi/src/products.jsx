import React from "react";
//import Details from "./Detailed" 
import { useNavigate } from "react-router-dom";

function Productslist({data}) {
 const navigate = useNavigate();
  
 
  return (
    <div className="container">
      <div className="row">
        {data.map((e, index) => {
          return (
            <div className="col-lg-4" key={index}>
              <div className="card" style={{ width: "18rem", height: "22rem" }}>
                <img
                  style={{ width: "10rem", height: "15rem" }}
                  className="card-img-top"
                  src={e.images[0]}
                  alt="Product image"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {e.title}-{e.id}
                  </h5>
                  <h6>
                    {e.brand}-{e.category}
                  </h6>
                  <p className="card-text">{e.description}</p>
                  <span>price:${e.price}</span>
                  <span>⭐{e.rating}</span>
                  <p>DiscountPercentage:{e.discountPercentage}%</p>
                  <p>Stocks:{e.stock}</p>
                  <button
                    onClick={() => navigate("/Productslist/"+e.id)}
                    className="btn btn-primary"
                  >
                    Buy Now
                  </button>
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Productslist;
