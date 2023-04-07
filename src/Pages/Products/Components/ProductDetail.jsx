import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { ListGroup, ListGroupItem, Badge } from 'react-bootstrap';
import { Form, FormControl} from 'react-bootstrap';
function Product() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Image src="https://cdn.pnj.io/images/detailed/153/sbpmxmw000001-bong-tai-bac-dinh-ngoc-trai-pnjsilver-1.png" fluid />
        </Col>
        <Col md={6}>
          <h1>Bông tai Bạc đính Ngọc Trai PNJSilver PMXMW000001</h1>
          <p>Mã: SBPMXMW000001</p>
          <h2>795.000 đ</h2>
          <div className="d-flex align-items-center mb-3">
            <span className="me-3">Số lượng:</span>
            <Button variant="outline-secondary" size="sm">
              -
            </Button>
            <span className="mx-3"></span>
            <Button variant="outline-secondary" size="sm">
              +
            </Button>
          </div>
          <Button variant="primary" size="lg" className="mb-3">
            Mua hàng <br /> <i>Miễn phí giao hàng</i>
          </Button>
        </Col>
      </Row>
      <div>
      <h3>Thông số và mô tả</h3>
      <ListGroup>
        <ListGroupItem>
          <strong>Mã sản phẩm:</strong> PMXMW000001
        </ListGroupItem>
        <ListGroupItem>
          <strong>Chất liệu:</strong> Bạc 925, ngọc trai
        </ListGroupItem>
        <ListGroupItem>
          <strong>Kích thước:</strong> 1.5cm x 1.5cm
        </ListGroupItem>
        <ListGroupItem>
          <strong>Trọng lượng:</strong> 2.5g
        </ListGroupItem>
        <ListGroupItem>
          <strong>Giá:</strong> 1,200,000đ <Badge variant="danger">-10%</Badge>
        </ListGroupItem>
      </ListGroup>
    </div>
    <h3>Bình luận</h3>
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Nhập tên của bạn:</Form.Label>
        <FormControl type="text" placeholder="Nhập tên của bạn" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Nhập bình luận của bạn:</Form.Label>
        <FormControl as="textarea" placeholder="Nhập bình luận của bạn" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Gửi bình luận
      </Button>
    </Form>
    </Container>
  );
}

export default Product;
