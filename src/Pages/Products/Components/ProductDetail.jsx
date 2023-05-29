import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { ListGroup, ListGroupItem, Badge } from 'react-bootstrap';
import { Form, FormControl} from 'react-bootstrap';
import { useState, useEffect } from "react";
import ProductService from "service.js";
import { useParams } from "react-router-dom";
function Product() {
  const [product, setProduct] = useState({});
  const getProduct = id => {
      ProductService.get(id)
      .then(response => {
          setProduct(response.data);
          console.log(response.data);
      })
      .catch(e => {
          console.log(e);
      });
  }
  
  const { productid } = useParams();
  useEffect(() => {
      getProduct(productid)
      }, [productid]);
    useEffect(() => {
      retrieveProductDetails(productid);
    }, []);
  
  const retrieveProductDetails = (id) => {
    ProductService.get(id)
    .then(response => {
        setProducts(response.data.ResponseResult.Result);
    })
    .catch(e => {
        console.log('Error: ',e);
    });
    useEffect(() => {
        retrieveProductDetails(id)
        }, [id]);
}
return (
  <Container>
    <Row className="align-items-center justify-content-center">
      {products.map((product) => (
        <Col md={4} key={product.id}>
          <Image
            src={ product.image }
            fluid
          />
          <Col md={6}>
            <h2>{ product.name}</h2>
            <p>Mã: {product.productid}</p>
            <Row>
              <Col md={2}>
                <p>Đã bán: 4</p>
              </Col>
              <Col>
                <p>Còn hàng</p>
              </Col>
            </Row>
            <h4>{ product.price }</h4>
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
              Mua hàng
            </Button>
          </Col>
        </Col>
      ))}
    </Row>
    <div>
      <h3>Thông số</h3>
      <Row>
        <Col md={4}>
          <ListGroup className="w-100">
            <ListGroupItem>
              <strong>Chất liệu: { product.quality}</strong>
            </ListGroupItem>
            <ListGroupItem>
              <strong>Khối lượng: { product.mass }</strong>
            </ListGroupItem>
            <ListGroupItem>
              <strong>Kích thước: { product.size }</strong>
            </ListGroupItem>
            <ListGroupItem>
              <strong>Màu sắc: { product.color }</strong> 
            </ListGroupItem>
            {/* <ListGroupItem>
              <strong>Giá:</strong> 1,200,000đ <Badge variant="danger">-10%</Badge>
            </ListGroupItem> */}
          </ListGroup>
        </Col>
      </Row>
    </div>
    {/* <h3 className="mt-3">Bình luận</h3> */}
    <Form>
      {/* <Form.Group controlId="formBasicEmail">
        <Form.Label>Nhập tên của bạn:</Form.Label>
        <FormControl type="text" placeholder="Nhập tên của bạn" />
      </Form.Group> */}

      <Form.Group controlId="formBasicPassword">
        <Form.Label className="mt-4">Nhập bình luận của bạn:</Form.Label>
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
