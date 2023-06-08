import styles from "./Home.module.css";
import { useState, useEffect, useContext } from "react";

import ProductHomepage from "./Components/MostSoldProducts";
import NewProductHomepage from "./Components/NewProduct";
import { Container, Row } from "react-bootstrap";
import axios from "axios";

function Home() {
  const [newProduct, setNewProduct] = useState([]);
  const [soldProduct, setSoldProduct] = useState([]);
  useEffect(() => {
    loadNewProduct();
    loadSoldProduct();
  }, []);

  const loadNewProduct = async () => {
    axios
      .get("http://localhost:3001/sortedProduct")
      .then((response) => {
        setNewProduct(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadSoldProduct = async () => {
    axios
      .get("http://localhost:3001/soldNumbersOfProducts")
      .then((response) => {
        setSoldProduct(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const products = [
    {
      id: "p1",
      productimage:
        "https://cdn.pnj.io/images/thumbnails/300/300/detailed/124/gnxmxmy006396-nhan-vang-18k-dinh-da-cz-pnj.png",
      name: "Nhẫn vàng CZ",
      price: "10.000.000 đ",
      sold: "100 đã bán",
    },
    {
      id: "p2",
      productimage:
        "https://cdn.pnj.io/images/thumbnails/300/300/detailed/124/gnxmxmy006396-nhan-vang-18k-dinh-da-cz-pnj.png",
      name: "Nhẫn vàng CZ",
      price: "10.000.000 đ",
      sold: "100 đã bán",
    },
    {
      id: "p3",
      productimage:
        "https://cdn.pnj.io/images/thumbnails/300/300/detailed/124/gnxmxmy006396-nhan-vang-18k-dinh-da-cz-pnj.png",
      name: "Nhẫn vàng CZ",
      price: "10.000.000 đ",
      sold: "100 đã bán",
    },
    {
      id: "p4",
      productimage:
        "https://cdn.pnj.io/images/thumbnails/300/300/detailed/124/gnxmxmy006396-nhan-vang-18k-dinh-da-cz-pnj.png",
      name: "Nhẫn vàng CZ",
      price: "10.000.000 đ",
      sold: "100 đã bán",
    },
  ];

  return (
    <div>
      <Container fluid>
        <Row>
          <img
            src={require("../../assets/images/banner-main-homepage-img.jpg")}
            alt=""
            className={styles.banner}
            style={{ maxWidth: "100%", padding: "0" }}
          />
        </Row>
        <Row>
          <h4
            className="pb-3"
            style={{
              color: "rgb(189, 120, 189)",
              marginTop: "40px",
              textAlign: "center",
              fontSize: "27px",
            }}
          >
            Sản phẩm bán chạy
          </h4>
          <ProductHomepage products={soldProduct} />;
        </Row>
        <Row>
          <h4
            className="pb-3"
            style={{
              color: "rgb(189, 120, 189)",
              marginTop: "40px",
              textAlign: "center",
              fontSize: "27px",
            }}
          >
            Sản phẩm mới
          </h4>
          <NewProductHomepage products={newProduct} />;
        </Row>
      </Container>
    </div>
  );
}

export default Home;
