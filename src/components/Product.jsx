import StyledProduct, {
  StyledButton,
  StyledDetails,
} from "../styled/StyledProduct";

const Product = ({ data }) => {
  return (
    <>
      {data.map((item) => {
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
                Rating: <span>{rating.rate} / 5</span>{" "}
              </p>
            </StyledDetails>
            <StyledButton> Show more</StyledButton>
          </StyledProduct>
        );
      })}
    </>
  );
};

export default Product;
