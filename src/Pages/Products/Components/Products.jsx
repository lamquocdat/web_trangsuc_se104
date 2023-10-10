import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function ProductList({ products }) {
  //click để hiện nhiều sản phẩm hơn.
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const toggleShowMore = () => setShowMore(!showMore);

  //Hiện trước 12 sản phẩm
  const visibleProducts = showMore ? products : products.slice(0, 12);
  const handleProductClick = (productId) => {
    navigate(`/productsdetail/${productId}`);
  };

  return (
    <>
      <Container fluid>
        {/* Render các sản phẩm */}
        <Row className="mt-5 mx-0 mx-sm-4">
          {/* visibleProducts = 12 */}
          {visibleProducts.map((product) => (
            <Col key={product._id} xs={6} sm={6} md={4} lg={3}>
              {/* <Link to={`/productsdetail/${product._id}`}> */}
              <Card
                style={{
                  background: "#f7f7f7",
                  marginBottom: "30px",
                  cursor: "pointer",
                  height: "90%"
                }}
                onClick={() => handleProductClick(product._id)}
              >
                <Card.Body style={{ textAlign: "center", display: "flex", flexDirection: "column"}}>
                  <Card.Img src={product.image} style={{height: "80%"}}></Card.Img>
                  <Card.Title style={{ fontWeight: "500", fontSize: "0.9rem", marginTop: 10  }}>
                    {product.name}
                  </Card.Title>
                  <Card.Text style={{ color: "#e7b475", fontWeight: "500", fontSize: "0.9rem", marginTop: "auto"}}>
                    {product.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})} 
                  </Card.Text>
                  <Card.Text style={{ textAlign: "end", fontSize: "0.8rem" }}>
                    {product.quantity_sold} đã bán
                  </Card.Text>
                </Card.Body>
              </Card>
              {/* </Link> */}
            </Col>
          ))}
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            {/* Nhấn nút xem thêm sẽ hiện thêm các sản phẩm */}
            {products.length > 3 && (
              <Button variant="secondary" onClick={toggleShowMore}>
                {showMore ? "Ẩn bớt" : "xem thêm"}
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductList;