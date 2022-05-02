import StyledProduct from "../styled/StyledProduct";

const Product = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        const { id, title, price, description, category, image, rating } = item;
        return (
          <StyledProduct key={id}>
            <h4> {title} </h4>
            <p> Price: ${price} </p>
            <img src={image} alt={title} />
            <p> {description} </p>
            <p> Rating: {rating.rate} / 5 </p>
          </StyledProduct>
        );
      })}
    </>
  );
};

export default Product;
