import { useState, useEffect } from 'react';
import axios from 'axios';

const useSimilarProducts = (category, productId) => {
  const [similarProducts, setSimilarProducts] = useState([]);

  const getSimilarProducts = async () => {
    const response = await axios.get(
      `//localhost:8000/products?category=${category}`
    );
    const data = await response.data;
    const products = data.filter((product) => product._id !== productId);
    const similar = [];

    // get 2 random products
    for (let i = 0; i < 2; i++) {
      let rand = Math.floor(Math.random() * products.length);
      similar.push(products[rand])
      products.splice(rand, 1)
    }
    setSimilarProducts(similar);
  };

  useEffect(() => {
    getSimilarProducts();
  }, [productId]);

  return [similarProducts];
};

export default useSimilarProducts;
