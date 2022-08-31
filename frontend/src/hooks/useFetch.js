import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (category, location, productId) => {
  // initialize empty state fro product data
  const [productData, setProductData] = useState(null);
  // fetch data function
  const getData = async () => {
    // diff URL based on args

    if (category) {
      const response = await axios.get(
        `http://localhost:8000/products?category=${category}`
      );
      const data = await response.data;
      setProductData(data);
    } else if (productId) {
      const response = await axios.get(
        `http://localhost:8000/products/${productId}`
      );
      const data = await response.data;
      setProductData(data);
    } else if (location.includes('sale')) {
      const response = await axios.get(`http://localhost:8000/products/sale`);
      const data = await response.data;
      setProductData(data);
    } else {
      const response = await axios.get(`http://localhost:8000/products`);
      const data = await response.data;
      setProductData(data);
    }
  };

  // call getData() upon component mount to ensure
  // it won't run into an infinite loop
  useEffect(() => {
    getData();
  }, [category, location, productId]);

  return { productData };
};

export default useFetch;
