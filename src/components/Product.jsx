import StyledProduct, {
  StyledButton,
  StyledLink,
  StyledDetails,
} from "../styled/StyledProduct";

const Product = ({ filteredData }) => {
  return (
    <>
      {filteredData.map((item) => {
        const { id, title, price, image, rating } = item;
        return (
          <StyledProduct key={id}>
            <h4> {title} </h4>
            <img src={image} alt={title} />
            <StyledDetails>
              <p>
                Price: <span> ${price} </span>
              </p>
              <p>
                Rating: <span>{rating.rate}/5</span>{" "}
              </p>
            </StyledDetails>
            <StyledButton>
              <StyledLink to={`/product/${id}`}>Show more </StyledLink>
            </StyledButton>
          </StyledProduct>
        );
      })}
    </>
  );
};

export default Product;
