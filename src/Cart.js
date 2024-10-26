import React, { useEffect, useState } from "react";
import axios from "axios";
const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://vogueity-default-rtdb.firebaseio.com/products.json")
      .then((response) => {
        const fetchedProducts = response.data;
        console.log(fetchedProducts); // Check the fetched object structure

        const productsArray = [];

        // Loop through the object to convert it to an array
        for (const key in fetchedProducts) {
          if (fetchedProducts.hasOwnProperty(key)) {
            // Assuming the product is inside an array, take the first item in the array
            const product = fetchedProducts[key][0];
            productsArray.push({
              key, // Use the Firebase key as the unique identifier
              ...product, // Spread the product data from the array
            });
          }
        }

        setProducts(productsArray); // Update the state with the array of products
      })
      .catch((error) => {
        console.error("Error fetching data from Firebase", error);
      });
  }, []);
  const handleDelete = (key) => {
    axios
      .delete(
        `https://vogueity-default-rtdb.firebaseio.com/products/${key}.json`
      )
      .then(() => {
        // Update the state by filtering out the deleted product
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.key !== key)
        );
      })
      .catch((error) => {
        console.error("Error deleting product", error);
      });
  };

  return (
    <div>
      <h1 className="cart">My Cart</h1>
      {products.length === 0 ? (
        <h1 className="empt">Your cart is empty</h1>
      ) : (
        <div className="pc">
          {products.map((product, i) => (
            <div className="pc2">
              <img src={product.img} alt="xxx" className="pc-img" />
              <div>
                <p className="pc-p">{product.title}</p>
                <p className="pc-pr">{product.price}</p>
                <button onClick={() => handleDelete(product.key)} className="c-btn">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
