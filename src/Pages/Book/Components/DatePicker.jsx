import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Datepicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <Form className="align-items-center justify-content-center mt-3">
      <Form.Group
        controlId="formBasicDate"
        className="align-items-center justify-content-center mt-3"
      >
        <Row className="align-items-center justify-content-center">
          <Col>
            <Form.Label>Ngày hẹn *</Form.Label>
          </Col>
          <Col>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
            />
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center">
          <Col>
            <Form.Label>Sản phẩm cần tư vấn *</Form.Label>
          </Col>
          <Col>
            {["checkbox"].map((type) => (
              <div key={`default ${type}`} className="mt-3">
                <Row>
                  <Col>
                    <Form.Check type={type} id={`default`} label={`Nhẫn`} />
                    <Form.Check type={type} id={`default`} label={`Bông tai`} />
                    <Form.Check
                      type={type}
                      id={`default`}
                      label={`Dây chuyền`}
                    />
                  </Col>
                  <Col>
                    <Form.Check type={type} id={`default`} label={`Cân`} />
                    <Form.Check type={type} id={`default`} label={`Gia công`} />
                    <Form.Check type={type} id={`default`} label={`Cho thuê`} />
                  </Col>
                </Row>
              </div>
            ))}
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center">
          <Col>
            <Form.Label>Lời nhắn:</Form.Label>
          </Col>
          <Col className="mt-3">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Nội dung lời nhắn"
            />
          </Col>
        </Row>
        <div style={{ marginTop: "2rem" }} className="text-center mb-3">
          <Button variant="primary">Gửi</Button>{" "}
        </div>
      </Form.Group>
    </Form>
  );
};

export default Datepicker;
