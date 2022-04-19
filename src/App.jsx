import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const url = "https://fakestoreapi.com/productsssdas";

  const fetchData = async () => {
    try {
      const request = await axios.get(url, {
        headers: {
          accept: "application/json",
        },
      });
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
      <h1>Store app</h1>
    </div>
  );
};

export default App;
