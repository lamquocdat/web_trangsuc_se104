import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  //click để hiện nhiều sản phẩm hơn.
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  //Hiện trước 12 sản phẩm
  const visibleProducts = showMore ? products : products.slice(0, 12);

  return (
    <>
      <Container fluid>
        {/* Render các sản phẩm */}
        <Row className="mx-4 mt-5">
          {/* visibleProducts = 12 */}
          {visibleProducts.map((product) => (
            <Col key={product.id} sm={6} md={4} lg={3}>
                <Link to={`/productsdetail/${product._id}`}>
                <Card style={{ background: "#f7f7f7", marginBottom: "30px" }}>
                  <Card.Body style={{ textAlign: "center" }}>
                    <Card.Img src={product.image}></Card.Img>
                    <Card.Title style={{ fontWeight: "200" }}>
                      {product.name}
                    </Card.Title>
                    <Card.Text style={{ color: "#e7b475", fontWeight: "500" }}>
                      {product.price} đ
                    </Card.Text>
                    <Card.Text style={{ textAlign: "end", fontSize: "14px" }}>
                      {product.quantity_sold} đã bán
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Link>
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
