import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const url = "https://fakestoreapi.com/products";

  const fetchData = async () => {
    try {
      const request = await axios.get(url);
      const response = request.data;
      setData(response);
    } catch (error) {
      console.log(error.response.status);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1> Welcome to our store! </h1>
      <Product data={data} />
    </div>
  );
};

export default AllProducts;
