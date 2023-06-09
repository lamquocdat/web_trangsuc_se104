import { Container, Row, Image } from "react-bootstrap";
import ProductList from "../Components/Products";
import banner_bongtai from "../../../assets/images/Products/banner_bongtai.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductsPage1() {
  const [products, productsSet] = useState([]);

  useEffect(() => {
    axios
      .get("https://dialuxury.onrender.com/product/category/B%C3%B4ng%20tai")
      .then((response) => {
        productsSet(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Container fluid className="mb-5">
        <Row>
          <Image src={banner_bongtai} className="px-0"></Image>
        </Row>
        <Row>
          <ProductList products={products} />;
        </Row>
      </Container>
    </>
  );
}

export default ProductsPage1;
