import React, { useState } from "react";
import { Form, Button, Row, Container, Col } from "react-bootstrap";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

const AddProductForm = () => {
  const [productid, setProductid] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [quality, setQuality] = useState("");
  const [color, setColor] = useState("");
  const [mass, setMass] = useState("");
  const [size, setSize] = useState("");
  const [dvt, setdvt] = useState("");
  // const [details, setDetails] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading('Adding...');
    await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/product`,
      {
        productid,
        name,
        price,
        image,
        category,
        dvt,
        quality,
        mass,
        size,
        color,
      }
    )
    .then((res) => {
      toast.dismiss();
      toast.success(<b>Thêm sản phẩm mới thành công</b>);
      console.log(res.data); // Thêm sản phẩm vào danh sách
      // Reset form sau khi gửi thành công
      setProductid("");
      setName("");
      setImage("");
      setPrice("");
      setCategory("");
      setdvt("");
      setQuality("");
      setMass("");
      setSize("");
      setColor("");
    })
    .catch((e) => {
      toast.dismiss();
      toast.success(<b>Thêm sản phẩm mới thất bại</b>);
      console.log(e);
    });
  };

  return (
    <Container style={{ width: "1300px" }}>
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
            <Form.Group controlId="productId">
              <Form.Label>Mã sản phẩm:</Form.Label>
              <Form.Control
                type="text"
                value={productid}
                onChange={(e) => setProductid(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label>Tên sản phẩm:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>Ảnh sản phẩm:</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {image && (
                <img src={image} alt="Preview" style={{ marginTop: "10px" }} />
              )}
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Giá:</Form.Label>
              <Form.Control
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label>Thể loại:</Form.Label>
              <Form.Control
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="dvt">
              <Form.Label>Đơn vị tính:</Form.Label>
              <Form.Control
                type="text"
                value={dvt}
                onChange={(e) => setdvt(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="quality">
              <Form.Label>Chất lượng:</Form.Label>
              <Form.Control
                type="text"
                value={quality}
                onChange={(e) => setQuality(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="mass">
              <Form.Label>Khối lượng:</Form.Label>
              <Form.Control
                type="text"
                value={mass}
                onChange={(e) => setMass(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="size">
              <Form.Label>Kích thước:</Form.Label>
              <Form.Control
                type="text"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="color">
              <Form.Label>Màu:</Form.Label>
              <Form.Control
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </Form.Group>
            <br></br>
            <div className="text-center">
              <Button variant="primary" type="submit">
                Thêm sản phẩm
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProductForm;
