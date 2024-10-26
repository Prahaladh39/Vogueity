import React, { useState } from "react";
import "./App.css";
//import axios from "axios";
import back from "./backimg1.jpg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Casual from "./Casual";
import Glasses from "./Glasses";
import Hoodies from "./Hoodies";
import Oversize from "./Oversize";
import Polo from "./Polo";
import Work from "./Work";
import m1 from "./m1.jpg";
import m2 from "./m2.jpg";
import SubC from "./SubC";
import SubH from "./SubH";
import SubO from "./SubO";
import SubP from "./SubP";
import SubW from "./SubW";
import SubG from "./SubG";
import Cart from "./Cart";
import Best from "./Best";
import Sellers from "./Sellers";
function App() {
  const [c, setC] = useState([]);
  const [arr, setArr] = useState([]);
  const [best, setBest] = useState([]);
  const [submit, setSubmit] = useState("");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainContent
                setBest={setBest}
                setSubmit={setSubmit}
                submit={submit}
              />
            }
          />
          <Route path="casual" element={<Casual1 setC={setC} />} />
          <Route path="hoodies" element={<Hoodie1 setC={setC} />} />
          <Route path="oversized" element={<OverSize1 setC={setC} />} />
          <Route path="polo" element={<Polo1 setC={setC} />} />
          <Route path="work" element={<Work1 setC={setC} />} />
          <Route path="glasses" element={<Glasses1 setC={setC} />} />
          <Route path="Bestsellers" element={<Sellers best={best} />} />
          <Route
            path="casual/Subcasual"
            element={<SubC c={c} arr={arr} setArr={setArr} />}
          />
          <Route path="hoodies/Subhoodies" element={<SubH c={c} />} />
          <Route path="oversized/SubOversize" element={<SubO c={c} />} />
          <Route path="polo/Subpolo" element={<SubP c={c} />} />
          <Route path="work/Subwork" element={<SubW c={c} />} />
          <Route path="glasses/Subglasses" element={<SubG c={c} />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function MainContent({ setBest, setSubmit, submit, select, setSelect }) {
  return (
    <>
      <div className="main">
        <nav>
          <h1 className="nav-h">Vogueity</h1>

          <a href="#v2" className="first">
            About us
          </a>
          <a href="#last" className="sec">
            Contact Us
          </a>
          <Link to="cart">My cart</Link>
        </nav>
        <div className="hero">
          <h1 className="hero-h">Welcome to Vogueity!</h1>
          <p className="hero-p">
            Explore the latest trends and timeless styles with our curated
            collection. From everyday essentials to statement pieces, Vogueity
            has everything you need to express your unique style. Shop now and
            elevate your wardrobe with confidence!
          </p>
          <a className="hero-btn" href="#c1">
            Shop now!
          </a>
        </div>
      </div>
      <div className="p1" id="c1">
        <h1 className="p1-h">Our Collection</h1>
        <div className="p1-c">
          <div className="cas">
            <Link to="casual">
              <img
                src="https://m.media-amazon.com/images/I/71o061CsEFL._SY879_.jpg"
                alt="cas"
              />
            </Link>

            <p>Casuals</p>
          </div>

          <div className="cas">
            <Link to="hoodies">
              <img
                src="https://m.media-amazon.com/images/I/61VkZVLv2jL._SY741_.jpg"
                alt="cas"
              />
            </Link>

            <p className="h-p">Hoodies</p>
          </div>
          <div className="cas">
            <Link to="oversized">
              <img
                src="https://m.media-amazon.com/images/I/61S5nUPVufL._SX679_.jpg"
                alt="cas"
                className="cas-o"
              />
            </Link>

            <p className="o-p">Oversized</p>
          </div>
        </div>
        <div className="p1-c">
          <div className="cas">
            <Link to="polo">
              <img
                src="https://m.media-amazon.com/images/I/61tH-hpDSJL._SY879_.jpg"
                alt="cas"
              />
            </Link>

            <p className="cas-p">Polo</p>
          </div>

          <div className="cas">
            <Link to="work">
              <img
                src="https://m.media-amazon.com/images/I/91+IFaz8gyL._SY879_.jpg"
                alt="cas"
              />
            </Link>

            <p className="h-p">Formals</p>
          </div>
          <div className="cas ex">
            <Link to="glasses">
              <img
                src="https://m.media-amazon.com/images/I/51UPY8sEE0L._SX679_.jpg"
                alt="cas"
              />
            </Link>

            <p className="o-p">Glasses</p>
          </div>
        </div>
      </div>
      <div className="p2" id="v2">
        <div className="top">
          <img src={m1} alt="model" className="p2-img" />
          <div className="right">
            <h1 className="top-h">Why Choose Vogueity?</h1>
            <p className="top-p">
              At Vogueity, we offer the latest trends with unbeatable quality
              and prices. Our curated collections ensure you always find the
              perfect style for any occasion. With fast shipping, easy returns,
              and a commitment to customer satisfaction, Vogueity makes fashion
              shopping effortless and enjoyable!
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <h1 className="d-h">Explore Our Unique Collection</h1>
            <p className="d-p">
              Discover Vogueity’s exclusive collection, where every piece is
              handpicked to reflect the latest trends and timeless fashion. From
              bold statement outfits to everyday essentials, our collection
              offers something unique for every style and occasion. Step into a
              world of fashion that’s crafted just for you!
            </p>
          </div>
          <img src={m2} alt="model2" className="btm-img" />
        </div>
      </div>
      <div className="extra"></div>
      <div className="p3">
        <h1 className="p3-h">Best Sellers</h1>
        <div className="dis">
          {Best.map((x, i) => {
            return (
              <div className="p">
                <Link to="Bestsellers">
                  <img
                    src={x.img}
                    alt="pics"
                    className="p-i"
                    onClick={() => {
                      setBest(Best[i]);
                    }}
                  />
                </Link>

                <p className="p-p">{x.title}</p>
              </div>
            );
          })}
        </div>
        ;
      </div>
      <footer>
        <div className="end" id="last">
          <div>
            <h1>Subscribe for more updates</h1>
            <input
              type="text"
              placeholder="Enter mail"
              className="in"
              onChange={(e) => {
                setSubmit(e.target.value);
              }}
            />
            <button
              className="btn"
              onClick={() => {
                if (submit.includes("@")) {
                  alert("Mail sucessfully sent");
                } else {
                  alert("enter valid email");
                }
              }}
            >
              Submit
            </button>
          </div>
          <div className="cont">
            <p className="cont1">Need Help?</p>
            <p className="cont2">Dial 8314569871</p>
          </div>
        </div>
      </footer>
    </>
  );
}
function Casual1({ setC, c }) {
  const [select, setSelect] = useState("");
  function fil(e) {
    setSelect(e.target.value);

    if (e.target.value === "low") {
      Casual.sort((a, b) => {
        const priceA = Number(a.price.replace("₹", "").trim());
        const priceB = Number(b.price.replace("₹", "").trim());
        return priceA - priceB; // Ascending order
      });
    } else if (e.target.value === "high") {
      Casual.sort((a, b) => {
        const priceA = Number(a.price.replace("₹", "").trim());
        const priceB = Number(b.price.replace("₹", "").trim());
        return priceB - priceA; // Descending order
      });
    }
  }
  return (
    <>
      <h1 className="c-h">Casual Wear</h1>
      <h1 className="ff">Filter By</h1>
      <select className="ss" onChange={fil}>
        <option value="nor">Choose option</option>
        <option value="low">Price low to high</option>
        <option value="high">Price high to low</option>
      </select>
      <div className="c-p">
        {Casual.map((x, i) => {
          return (
            <div>
              <Link to="Subcasual">
                <img
                  src={x.img}
                  alt="imhh"
                  className="c-i"
                  onClick={() => {
                    setC(Casual[i]);
                  }}
                />
              </Link>

              <p className="c-t">{x.title}</p>
              <p className="c-pr">{x.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
function Hoodie1({ c, setC }) {
  const [select, setSelect] = useState("");
  function fil(e) {
    setSelect(e.target.value);

    if (e.target.value === "low") {
      Hoodies.sort((a, b) => {
        const priceA = Number(a.price.replace("₹", "").trim());
        const priceB = Number(b.price.replace("₹", "").trim());
        return priceA - priceB; // Ascending order
      });
    } else if (e.target.value === "high") {
      Hoodies.sort((a, b) => {
        const priceA = Number(a.price.replace("₹", "").trim());
        const priceB = Number(b.price.replace("₹", "").trim());
        return priceB - priceA; // Descending order
      });
    }
  }
  return (
    <>
      <h1 className="c-h">Hoodies</h1>
      <h1 className="ff">Filter By</h1>
      <select className="ss" onChange={fil}>
        <option value="nor">Choose option</option>
        <option value="low">Price low to high</option>
        <option value="high">Price high to low</option>
      </select>
      <div className="c-p">
        {Hoodies.map((x, i) => {
          return (
            <div>
              <Link to="Subhoodies">
                <img
                  src={x.img}
                  alt="imhh"
                  className="c-i"
                  onClick={() => {
                    setC(Hoodies[i]);
                  }}
                />
              </Link>

              <p className="c-t">{x.title}</p>
              <p className="c-pr">{x.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
function OverSize1({ setC }) {
  const [select, setSelect] = useState("");
  function fil(e) {
    setSelect(e.target.value);

    if (e.target.value === "low") {
      Oversize.sort((a, b) => {
        const priceA = Number(a.price.replace("₹", "").trim());
        const priceB = Number(b.price.replace("₹", "").trim());
        return priceA - priceB; // Ascending order
      });
    } else if (e.target.value === "high") {
      Oversize.sort((a, b) => {
        const priceA = Number(a.price.replace("₹", "").trim());
        const priceB = Number(b.price.replace("₹", "").trim());
        return priceB - priceA; // Descending order
      });
    }
  }
  return (
    <>
      <h1 className="c-h">Oversized T-shirt</h1>
      <h1 className="ff">Filter By</h1>
      <select className="ss" onChange={fil}>
        <option value="nor">Choose option</option>
        <option value="low">Price low to high</option>
        <option value="high">Price high to low</option>
      </select>
      <div className="c-p">
        {Oversize.map((x, i) => {
          return (
            <div>
              <Link to="SubOversize">
                <img
                  src={x.img}
                  alt="imhh"
                  className="c-i"
                  onClick={() => {
                    setC(Oversize[i]);
                  }}
                />
              </Link>

              <p className="c-t">{x.title}</p>
              <p className="c-pr">{x.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
function Polo1({ setC }) {
  const [select, setSelect] = useState("");
  function fil(e) {
    setSelect(e.target.value);

    if (e.target.value === "low") {
      Polo.sort((a, b) => {
        const priceA = Number(a.price.replace("₹", "").trim());
        const priceB = Number(b.price.replace("₹", "").trim());
        return priceA - priceB; // Ascending order
      });
    } else if (e.target.value === "high") {
      Polo.sort((a, b) => {
        const priceA = Number(a.price.replace("₹", "").trim());
        const priceB = Number(b.price.replace("₹", "").trim());
        return priceB - priceA; // Descending order
      });
    }
  }
  return (
    <>
      <h1 className="c-h">Polo</h1>
      <h1 className="ff">Filter By</h1>
      <select className="ss" onChange={fil}>
        <option value="nor">Choose option</option>
        <option value="low">Price low to high</option>
        <option value="high">Price high to low</option>
      </select>
      <div className="c-p">
        {Polo.map((x, i) => {
          return (
            <div>
              <Link to="Subpolo">
                <img
                  src={x.img}
                  alt="imhh"
                  className="c-i"
                  onClick={() => {
                    setC(Polo[i]);
                  }}
                />
              </Link>

              <p className="c-t">{x.title}</p>
              <p className="c-pr">{x.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
function Work1({ setC }) {
  const [select, setSelect] = useState("");
  function fil(e) {
    setSelect(e.target.value);

    if (e.target.value === "low") {
      Work.sort((a, b) => {
        const priceA = Number(a.price.replace("₹", "").trim());
        const priceB = Number(b.price.replace("₹", "").trim());
        return priceA - priceB; // Ascending order
      });
    } else if (e.target.value === "high") {
      Work.sort((a, b) => {
        const priceA = Number(a.price.replace("₹", "").trim());
        const priceB = Number(b.price.replace("₹", "").trim());
        return priceB - priceA; // Descending order
      });
    }
  }
  return (
    <>
      <h1 className="c-h">Formals</h1>
      <h1 className="ff">Filter By</h1>
      <select className="ss" onChange={fil}>
        <option value="nor">Choose option</option>
        <option value="low">Price low to high</option>
        <option value="high">Price high to low</option>
      </select>
      <div className="c-p">
        {Work.map((x, i) => {
          return (
            <div>
              <Link to="Subwork">
                <img
                  src={x.img}
                  alt="imhh"
                  className="c-i"
                  onClick={() => {
                    setC(Work[i]);
                  }}
                />
              </Link>

              <p className="c-t">{x.title}</p>
              <p className="c-pr">{x.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
function Glasses1({ setC }) {
  const [select, setSelect] = useState("");
  function fil(e) {
    setSelect(e.target.value);

    if (e.target.value === "low") {
      Glasses.sort((a, b) => {
        const priceA = Number(a.price.replace("₹", "").trim());
        const priceB = Number(b.price.replace("₹", "").trim());
        return priceA - priceB; // Ascending order
      });
    } else if (e.target.value === "high") {
      Glasses.sort((a, b) => {
        const priceA = Number(a.price.replace("₹", "").trim());
        const priceB = Number(b.price.replace("₹", "").trim());
        return priceB - priceA; // Descending order
      });
    }
  }
  return (
    <>
      <h1 className="c-h">Glasses</h1>
      <h1 className="ff">Filter By</h1>
      <select className="ss" onChange={fil}>
        <option value="nor">Choose option</option>
        <option value="low">Price low to high</option>
        <option value="high">Price high to low</option>
      </select>
      <div className="c-p">
        {Glasses.map((x, i) => {
          return (
            <div>
              <Link to="Subglasses">
                <img
                  src={x.img}
                  alt="imhh"
                  className="c-i"
                  onClick={() => {
                    setC(Glasses[i]);
                  }}
                />
              </Link>

              <p className="c-t">{x.title}</p>
              <p className="c-pr">{x.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
