import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
function NewProductHomepage({ products }) {
  const [proPerPage, setProPerPage] = useState(4);
  const [CurProPerPage, setCurProPerPage] = useState(1);
  const numOfToTalPages = Math.ceil(products.length / proPerPage);
  // const pages = [...Array(numOfToTalPages + 1).keys()].slice(1);
  const indexOfLastPro = CurProPerPage * proPerPage;
  const indexOfFirstPro = indexOfLastPro - proPerPage;
  const visiblePro = products.slice(indexOfFirstPro, indexOfLastPro);

  const changePage = ({ selected }) => {
    setCurProPerPage(selected + 1);
  };
  return (
    <>
      <Container fluid>
        {/* Render các sản phẩm */}
        <Row className="mx-4 mt-5">
          {/* visibleProducts = 12 */}
          {visiblePro.map((product) => (
            <Col key={product.productid} sm={6} md={4} lg={3}>
              <Link
                className="text-decoration-none"
                to={`/productsdetail/${product._id}`}
              >
                <Card style={{ background: '#f7f7f7', marginBottom: '30px' }}>
                  <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Img src={product.image}></Card.Img>
                    <Card.Title style={{ fontWeight: '200' }}>
                      {product.name}
                    </Card.Title>
                    <Card.Text style={{ color: '#e7b475', fontWeight: '500' }}>
                      {product.price} VNĐ
                    </Card.Text>
                    <Card.Text
                      style={{
                        color: 'black',
                        fontWeight: '350',
                        float: 'right',
                      }}
                    >
                      {product.quantity_sold} đã bán !
                    </Card.Text>
                    {/* <Card.Text style={{ textAlign: "center", fontSize: "15px" }}>
                      {product.sold}
                    </Card.Text> */}
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
      <ReactPaginate
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
      />
    </>
  );
}

export default NewProductHomepage;
