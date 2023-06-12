import { Container, Row, Image } from "react-bootstrap";
import ProductList from "../Products/Components/Products";
import ImageBanner from "../../../src/assets/images/Products/banner_search.jpg";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

function ProductsPage() {
  const [products, productsSet] = useState([]);

  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("query"); // Lấy giá trị của param1: "value1"
  console.log({ query });

  //lấy thông tin sản phẩm
  useEffect(() => {
    axios
      .get(`https://dialuxury.onrender.com/product/search?query=${query}`)
      .then((response) => {
        console.log(`https://dialuxury.onrender.com/product/search?query=${query}`);
        productsSet(response.data);

        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);

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
