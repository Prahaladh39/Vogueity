import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";

const SubO = ({ c }) => {
  const [clicked, setClicked] = useState(false);
  const [check, setCheck] = useState(true);
  const [ar, setar] = useState([
    {
      title: "",
      img: "",
      price: "",
    },
  ]);
  function handler() {
    const updatedAr = [{ title: c.title, img: c.img, price: c.price }];
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
          {check ? (
            <img src={c.img} alt="imge" className="imge" />
          ) : (
            <img src={c.img2} alt="imgee" width={20} className="imge" />
          )}
        </div>
        <div className="righte">
          <h1>{c.title}</h1>
          <p>Price: {c.price}</p>
          <p>Rating: {c.rating}</p>
          <p>Dimensions: {c.dimensions}</p>
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
          <img
            src={c.img}
            className="di2"
            alt="imgee"
            width={20}
            onClick={() => {
              setCheck(true);
            }}
          />
          <img
            src={c.img2}
            className="di"
            alt="imgee"
            width={20}
            onClick={() => {
              setCheck(false);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SubO;
