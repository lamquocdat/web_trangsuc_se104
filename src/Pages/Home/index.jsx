import styles from "./Home.module.css";
import { useState, useEffect } from "react";

import ProductHomepage from "./Components/MostSoldProducts";
import NewProductHomepage from "./Components/NewProduct";
import { Container, Row, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   if (urlParams) {
  //     const responseDataString = urlParams.get("responseData");
  //     const responseDataObject = JSON.parse(responseDataString);
  //     if (responseDataObject) {
  //       localStorage.setItem("token", responseDataObject.token);
  //       localStorage.setItem("_id", responseDataObject._id);
  //       localStorage.setItem("username", responseDataObject.name);
  //       localStorage.setItem("role", responseDataObject.role);
  //       navigate("/");
  //     }
  //     // Use the responseData as needed
  //   }
  // }, []);
  const [newProduct, setNewProduct] = useState([]);
  const [soldProduct, setSoldProduct] = useState([]);
  const [showMoreSold, setShowMoreSold] = useState(false);
  const [showMoreNew, setShowMoreNew] = useState(false);
  const [soldProductCount, setSoldProductCount] = useState(4);
  const [newProductCount, setNewProductCount] = useState(4);
  useEffect(() => {
    loadNewProduct();
    loadSoldProduct();
  }, []);

  const loadNewProduct = async () => {
    axios
      .get("https://dialuxury.onrender.com/sortedProduct")
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
      .get("https://dialuxury.onrender.com/soldNumbersOfProducts")
      .then((response) => {
        setSoldProduct(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleShowMoreSold = () => {
    setSoldProductCount((prevCount) => prevCount + 8);
    setShowMoreSold(true);
  };

  const handleShowLessSold = () => {
    setSoldProductCount(4);
    setShowMoreSold(false);
  };

  const handleShowMoreNew = () => {
    setNewProductCount((prevCount) => prevCount + 8);
    setShowMoreNew(true);
  };

  const handleShowLessNew = () => {
    setNewProductCount(4);
    setShowMoreNew(false);
  };

  return (
    <div>
      <Container fluid>
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
          <ProductHomepage products={soldProduct.slice(0, soldProductCount)} />;
          {!showMoreSold && soldProduct.length > 4 && (
            <div className="text-center mt-3">
              <Button onClick={handleShowMoreSold} variant="secondary">
                Xem thêm
              </Button>
            </div>
          )}
          {showMoreSold && (
            <div className="text-center mt-3">
              <Button onClick={handleShowLessSold} variant="secondary">
                Ẩn bớt
              </Button>
            </div>
          )}
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
          <NewProductHomepage products={newProduct.slice(0, newProductCount)} />
          ;
          {!showMoreNew && newProduct.length > 4 && (
            <div className="text-center mt-3">
              <Button onClick={handleShowMoreNew} variant="secondary">
                Xem thêm
              </Button>
            </div>
          )}
          {showMoreNew && (
            <div className="text-center mt-3">
              <Button onClick={handleShowLessNew} variant="secondary">
                Ẩn bớt
              </Button>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
