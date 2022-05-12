import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    <section key={product.id}>
      <h1> {product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p> price: {product.price} </p>
      <p> rating: {product.rating?.rate} </p>
      <p> count: {product.rating?.count} </p>
      <p> {product.description} </p>
      <p> {product.category} </p>
    </section>
  );
};

export default SingleProductPage;
