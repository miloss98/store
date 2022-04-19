import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
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
      <h1> Home </h1>
    </div>
  );
};

export default Home;
