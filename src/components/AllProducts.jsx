import { useEffect, useState } from "react";
import axios from "axios";
import StyledAllProducts, {
  StyledProductsContainer,
  StyledHeadingDiv,
  StyledFilterButtonsDiv,
} from "../styled/StyledAllProducts";
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
    <StyledAllProducts>
      <StyledHeadingDiv>
        <h1> Welcome to our store! </h1>
      </StyledHeadingDiv>
      <StyledFilterButtonsDiv>
        <button> all </button>
        <button> man </button>
        <button> woman </button>
        <button> jewelery </button>
        <button> electronics </button>
      </StyledFilterButtonsDiv>
      <StyledProductsContainer>
        <Product data={data} />
      </StyledProductsContainer>
    </StyledAllProducts>
  );
};

export default AllProducts;
