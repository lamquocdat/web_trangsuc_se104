import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { ListGroup, ListGroupItem, Badge } from 'react-bootstrap';
import { Form, FormControl} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
const Product = props => {
  const [product, setProduct] = useState({
      productid: null,
      name: "",
      image: "",
      image: "",
      price: "",
  });
  const getProduct = id => {
      axios.get('/product/:id')
      .then(response => {
          setProduct(response.data);
          console.log(response.data);
      })
      .catch(e => {
          console.log(e);
      });
  }
  const { id } = useParams();
  useEffect(() => {
      getProduct(id)
      }, [id]);
  return (
    <Container>
      <Row className="align-items-center justify-content-center">
        <Col md={4}>
          <Image src={ product.image } fluid />
        </Col>
        <Col md={6} >
          <h1>{ product.name }</h1>
          <p>Mã: {product.productid}</p>
          <Row>
            <Col>
            <p>Đã bán: 4</p>
            </Col>
            <Col>
            <p>Còn lại: 5</p>
            </Col>
          </Row>
          
          
          <h2>{ product.price }</h2>
          <div className="d-flex align-items-center mb-3">
            <span className="me-3">Số lượng:</span>
            <Button variant="outline-secondary" size="sm">
              -
            </Button>
            <span className="mx-3">1</span>
            <Button variant="outline-secondary" size="sm">
              +
            </Button>
          </div>
          <Button variant="primary" size="md" className="mb-3">
            Mua hàng <br /> <i>Miễn phí giao hàng</i>
          </Button>
        </Col>
      </Row>
      <div>
      <h3>Thông số</h3>
      <Row>
        <Col>
          <ListGroup className="w-100">
          <ListGroupItem>
            <strong>Trọng lượng tham khảo: </strong> 4.36703phân
          </ListGroupItem>
          <ListGroupItem>
            <strong>Loại đá chính: </strong> Kim cương
          </ListGroupItem>
          <ListGroupItem>
            <strong>Kích thước đá chính (tham khảo): </strong> 3.3ly
          </ListGroupItem>
          <ListGroupItem>
            <strong>Hình dạng đá: </strong> Trái tim
          </ListGroupItem>
          {/* <ListGroupItem>
            <strong>Giá:</strong> 1,200,000đ <Badge variant="danger">-10%</Badge>
          </ListGroupItem> */}
        </ListGroup>
        </Col>
        <Col>
          <ListGroup>
          <ListGroupItem>
            <strong>Loại đá phụ: </strong> Kim cương
          </ListGroupItem>
          <ListGroupItem>
            <strong>Màu đá phụ: </strong> Trắng
          </ListGroupItem>
          <ListGroupItem>
            <strong>Số viên đá phụ: </strong> 26 viên
          </ListGroupItem>
          <ListGroupItem>
            <strong>Giới tính: </strong> Nữ
          </ListGroupItem>
          {/* <ListGroupItem>
            <strong>Giá:</strong> 1,200,000đ <Badge variant="danger">-10%</Badge>
          </ListGroupItem> */}
        </ListGroup>
        </Col>
      </Row>
      
    </div>
    <h3 className="mt-3">Bình luận</h3>
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Nhập tên của bạn:</Form.Label>
        <FormControl type="text" placeholder="Nhập tên của bạn" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Nhập bình luận của bạn:</Form.Label>
        <FormControl as="textarea" placeholder="Nhập bình luận của bạn" />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3 mb-3">
        Gửi bình luận
      </Button>
    </Form>
    </Container>
  );
}

export default Product;
