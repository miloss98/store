import { useEffect, useState } from "react";
import axios from "axios";
import StyledAllProducts, {
  StyledProductsContainer,
  StyledHeadingDiv,
  StyledFilterButtonsDiv,
} from "../styled/StyledAllProducts";
import Product from "./Product";

const allCategories = [
  "all",
  "jewelery",
  "electronics",
  "men's clothing",
  "women's clothing",
];

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const url = "https://fakestoreapi.com/products";

  const fetchData = async () => {
    try {
      const request = await axios.get(url);
      const response = request.data;
      setData(response);
      setFilteredData(response);
    } catch (error) {
      console.log(error.response.status);
    }
  };

  const filter = (category) => {
    if (category === "all") {
      fetchData();
      return;
    }
    setFilteredData(data.filter((item) => item.category === category));
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
        {allCategories.map((categories, id) => {
          return (
            <button key={id} onClick={() => filter(categories)}>
              {categories}
            </button>
          );
        })}
      </StyledFilterButtonsDiv>
      <StyledProductsContainer>
        <Product filteredData={filteredData} />
      </StyledProductsContainer>
    </StyledAllProducts>
  );
};

export default AllProducts;
