import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
function ProductHomepage({ products }) {
  const navigate = useNavigate();

  const visiblePro = products;
  const handleProductClick = (productId) => {
    navigate(`/productsdetail/${productId}`);
  };
  return (
    <>
      <Container fluid>
        {/* Render các sản phẩm */}
        <Row className="mt-5 mx-0 mx-sm-4">
          {/* visibleProducts = 12 */}
          {visiblePro.map((product) => (
            <Col key={product.productid} xs={6} sm={6} md={4} lg={3}>
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
                <Card.Body style={{ textAlign: "center", display: "flex", flexDirection: "column" }}>
                  <Card.Img src={product.image} style={{height: "80%"}}></Card.Img>
                  <Card.Title style={{ fontWeight: "500", fontSize:"0.9rem", marginTop: 10 }}>
                    {product.name}
                  </Card.Title>
                  <Card.Text style={{ color: "#e7b475", fontWeight: "500", fontSize: "0.9rem", marginTop: "auto" }}>
                    {product.price} đ
                  </Card.Text>
                  <Card.Text
                    style={{
                      color: "black",
                      fontWeight: "350",
                      float: "right",
                      textAlign: "end",
                      fontSize:"0.8rem"
                    }}
                  >
                    {product.quantity_sold} đã bán
                  </Card.Text>
                  {/* <Card.Text style={{ textAlign: "center", fontSize: "15px" }}>
                      {product.sold}
                    </Card.Text> */}
                </Card.Body>
              </Card>
              {/* </Link> */}
            </Col>
          ))}
        </Row>
      </Container>
      {/* <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        pageCount={numOfToTalPages}
        onPageChange={changePage}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      /> */}
    </>
  );
}

export default ProductHomepage;
