import { useEffect, useState } from "react";
import axios from "axios";
import StyledHomePage, {
  StyledProductsContainer,
  StyledHeadingDiv,
} from "../styled/StyledHomePage";
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
    <StyledHomePage>
      <StyledHeadingDiv>
        <h1> Welcome to our store! </h1>
      </StyledHeadingDiv>
      <StyledProductsContainer>
        <Product data={data} />
      </StyledProductsContainer>
    </StyledHomePage>
  );
};

export default AllProducts;
