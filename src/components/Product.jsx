import React from "react";

const Product = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        const { id, title, price, description, category, image, rating } = item;
        return (
          <article key={id}>
            <h4> {title} </h4>
            <p> Price: ${price} </p>
            <p> {description} </p>
            <img src={image} alt={title} />
            <p> Rating: {rating.rate} / 5 </p>
          </article>
        );
      })}
    </>
  );
};

export default Product;
