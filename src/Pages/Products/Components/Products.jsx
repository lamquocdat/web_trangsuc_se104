import { Container, Row, Col } from "react-bootstrap";
import Banner from "../../../assets/images/Products/Banner.png";
import Product1 from "../../../assets/images/Products/Product1.png";

function Products({ product }) {
  return (
    <>
      <Container fluid>
        <Row>
          <img src={Banner} className="px-0"></img>
        </Row>
        <Row></Row>
      </Container>
    </>
  );
}

export default Products;
