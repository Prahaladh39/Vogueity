import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Sellers = ({ best }) => {
  const [ar, setar] = useState([
    {
      title: "",
      img: "",
      price: "",
    },
  ]);
  const [clicked, setClicked] = useState(false);
  function handler() {
    const updatedAr = [{ title: best.title, img: best.img, price: best.price }];
    setClicked(true);
    setar(updatedAr);
    axios
      .post(
        "https://vogueity-default-rtdb.firebaseio.com/products.json",
        updatedAr
      )
      .then(() => {
        alert("sucessfull");
      })
      .catch((error) => {
        console.error("error passing data", error);
      });
  }
  return (
    <>
      <Link to="/" className="back">
        <h1 className="s-h">Vogueity</h1>
      </Link>
      <div className="ptr">
        <div className="lefte">
          <img src={best.img} alt="imge" className="imge" />
        </div>
        <div className="righte">
          <h1>{best.title}</h1>
          <p>Price: {best.price}</p>
          <p>Rating: {best.rating}</p>
          <p>Dimensions: {best.dimensions}</p>
          <div className="pur">
            <button
              className="add"
              onClick={() => {
                if (!clicked) {
                  handler();
                }
              }}
            >
              Add to cart
            </button>
            <button className="buy">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sellers;
