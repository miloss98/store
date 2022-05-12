import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StyledSingleProductPage, {
  StyledSingleProductContainer,
  StyledSingleProductSection,
} from "../styled/StyledSingleProductPage";

const url = "https://fakestoreapi.com/products";

const SingleProductPage = () => {
  const [product, setProduct] = useState([]);
  const { productID } = useParams();

  const getSingleProduct = async () => {
    const response = await axios.get(`${url}/${productID}`);
    const singleProduct = response.data;
    const { id, title, price, category, description, image, rating } =
      singleProduct;
    setProduct(singleProduct);
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <StyledSingleProductPage key={product.id}>
      <StyledSingleProductContainer>
        {/* Left Section */}
        <StyledSingleProductSection>
          <img src={product.image} alt={product.title} />
        </StyledSingleProductSection>

        {/* Right Section */}
        <StyledSingleProductSection>
          <h1> {product.title}</h1>
          <p>
            <span>Category:</span> {product.category}
          </p>
          <p>
            <span>Description:</span> {product.description}
          </p>
          <p>
            <span>Price:</span> ${product.price}
          </p>
          <p>
            <span>Rating: </span> {product.rating?.rate}
          </p>
          <p>
            <span>Available:</span> {product.rating?.count}
          </p>
        </StyledSingleProductSection>
      </StyledSingleProductContainer>
    </StyledSingleProductPage>
  );
};

export default SingleProductPage;
