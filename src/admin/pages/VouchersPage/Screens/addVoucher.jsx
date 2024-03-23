import React, { useState } from "react";
import { Form, Button, Row, Container, Col } from "react-bootstrap";
import axios from "axios";
import  toast, { Toaster } from 'react-hot-toast';

const AddProductForm = () => {
  const [vouchersId, setVouchersId] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [production, setProduction] = useState("");

  const [address, setAddress] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading('Adding...');
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/vouchers`,
      {
        vouchersId,
        createdAt,
        production,

        address,
        PhoneNumber,
      }
    )
    .then((res)=> {
      toast.dismiss();
      toast.success(<b>Thêm phiếu mua hàng thành công</b>);
      console.log(res.data); // Thêm sản phẩm vào danh sách
      // Reset form sau khi gửi thành công
      setVouchersId("");
      setCreatedAt("");
  
      setProduction("");
  
      setAddress("");
      setPhoneNumber("");
    })
    .catch((e)=>{
      toast.dismiss();
      toast.error(<b>Thêm phiếu mua hàng thất bại</b>);
      console.log(e)
    })
  };

  return (
    <Container>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
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
                type="number"
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
