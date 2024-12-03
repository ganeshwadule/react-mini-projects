import React, { useEffect, useState } from "react";

import "./styles.css";

const LoadMoreButton = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const data = await res.json();
      console.log(data.products[0]);
      if (data && data.products && data.products.length) {
        setProducts((prev) => [...prev, ...data.products]);
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <h3>Loading ...</h3>;
  }
  return (
    <div className="container">
      <div className="product-container">
        {products && products.length
          ? products.map((product, index) => (
              <div key={index} className="product">
                {<img src={product.thumbnail} alt={product.title} />}
                <h4>{product.title}</h4>
              </div>
            ))
          : null}
      </div>

      <div className="btn-container">
        {/* <button disabled={count > 5}>Load More Button</button> */}
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Button
        </button>
        {disableButton && <h3>You have reached limit</h3>}
      </div>
    </div>
  );
};

export default LoadMoreButton;
