import { Container, Row, Image } from "react-bootstrap";
import ProductList from "../Components/Products";
import banner_daychuyen from "../../../assets/images/Products/banner_daychuyen.png";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductsPage2() {
  const [products, productsSet] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/product/category/D%C3%A2y%20chuy%E1%BB%81n")
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
          <Image src={banner_daychuyen} className="px-0"></Image>
        </Row>
        <Row>
          <ProductList products={products} />;
        </Row>
      </Container>
    </>
  );
}

export default ProductsPage2;
