import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Datepicker from "./Components/DatePicker";

function Book() {
  return (
    <>
      {/* Header:  */}
      {/* Content: */}
      <Container>
        <Form>
          <h4
            style={{ color: "rgba(0, 0, 0, 0.7)" }}
            className="text-center mt-3"
          >
            ĐẶT LỊCH HẸN TƯ VẤN MUA TRANG SỨC
          </h4>
          <h6 style={{ color: "rgba(0, 0, 0, 0.7)" }} className="text-center">
            Quý khách vui lòng điền thông tin theo mẫu dưới đây!
          </h6>
          <h6
            style={{ color: "rgba(0, 0, 0, 0.7)" }}
            className="text-center mb-4"
          >
            Cảm ơn quý khách!
          </h6>
          <Row className="d-flex justify-content-center">
            <Col
              md={5}
              style={{
                border: "1px solid rgb(117 121 123)",
                borderRadius: "8px",
                padding: "20px",
                color: "rgb(90 93 95)",
              }}
            >
              <Datepicker></Datepicker>
            </Col>
          </Row>
        </Form>
      </Container>
      {/* Footer: */}
    </>
  );
}

export default Book;
