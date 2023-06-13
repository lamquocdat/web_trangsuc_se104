import React, { useState } from "react";
import { Form, Button, Row, Container, Col } from "react-bootstrap";
import axios from "axios";

const AddProductForm = () => {
  const [vouchersId, setVouchersId] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [production, setProduction] = useState("");

  const [address, setAddress] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://dialuxury.onrender.com/vouchers",
        {
          vouchersId,
          createdAt,
          production,

          address,
          PhoneNumber,
        }
      );
      console.log(response.data); // Thêm sản phẩm vào danh sách
      // Reset form sau khi gửi thành công
      setVouchersId("");
      setCreatedAt("");

      setProduction("");

      setAddress("");
      setPhoneNumber("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col
          md={6}
          style={{
            border: "1px solid rgb(193 197 199)",
            borderRadius: "8px",
            padding: "20px",
            color: "rgb(90 93 95)",
          }}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="vouchersId">
              <Form.Label>Số phiếu:</Form.Label>
              <Form.Control
                type="text"
                value={vouchersId}
                onChange={(e) => setVouchersId(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="createdAt">
              <Form.Label>Ngày lập phiếu:</Form.Label>
              <Form.Control
                type="date"
                value={createdAt}
                onChange={(e) => setCreatedAt(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="production">
              <Form.Label>Nhà cung cấp:</Form.Label>
              <Form.Control
                type="text"
                value={production}
                onChange={(e) => setProduction(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Địa chỉ:</Form.Label>
              <Form.Control
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="phoneNumber">
              <Form.Label>Số điện thoại:</Form.Label>
              <Form.Control
                type="text"
                value={PhoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>
            <br></br>
            <div className="text-center">
              <Button variant="primary" type="submit">
                Thêm phiếu
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProductForm;
