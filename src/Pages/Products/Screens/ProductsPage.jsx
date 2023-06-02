import { Container, Row, Image } from "react-bootstrap";
import ProductList from "../Components/Products";
import ImageBanner from "../../../assets/images/Products/Banner.png";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductsPage() {
  const [products, productsSet] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/product/category/Nh%E1%BA%ABn")
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
          <Image src={ImageBanner} className="px-0"></Image>
        </Row>
        <Row>
          <ProductList products={products} />;
        </Row>
      </Container>
    </>
  );
}

export default ProductsPage;
