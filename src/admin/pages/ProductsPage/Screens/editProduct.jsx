import React, { useState, useEffect } from "react";
import { Form, Button, Row, Container, Col } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditProduct = () => {
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "productid") {
      setProductid(value);
    } else if (name === "name") {
      setName(value);
    } else if (name === "image") {
      setImage(value);
    } else if (name === "price") {
      setPrice(value);
    } else if (name === "category") {
      setCategory(value);
    } else if (name === "dvt") {
      setdvt(value);
    } else if (name === "quality") {
      setQuality(value);
    } else if (name === "mass") {
      setMass(value);
    } else if (name === "size") {
      setSize(value);
    } else if (name === "color") {
      setColor(value);
    }
  };

  let { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Gửi yêu cầu PUT đến API để sửa sản phẩm
    axios
      .put(`http://localhost:3001/product/${id}`, {
        name,
        image,
        price,
        category,
        dvt,
        quality,
        mass,
        size,
        color,
      })
      .then((response) => {
        console.log("Sửa sản phẩm thành công:", response.data);
        // Xử lý kết quả thành công tại đây
      })
      .catch((error) => {
        console.error("Lỗi khi sửa sản phẩm:", error);
        // Xử lý lỗi tại đây
      });
    // Reset input fields
    setProductid("");
    setName("");
    setPrice("");
    setImage("");
    setCategory("");
    setQuality("");
    setColor("");
    setMass("");
    setSize("");
    setdvt("");
  };

  //Ảnh:
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
  return (
    <Container style={{ width: "1300px" }}>
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
                name="productid"
                value={productid}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label>Tên sản phẩm:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Giá:</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={price}
                onChange={handleChange}
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
            <Form.Group controlId="category">
              <Form.Label>Thể loại:</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={category}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="dvt">
              <Form.Label>Đơn vị tính:</Form.Label>
              <Form.Control
                type="text"
                name="dvt"
                value={dvt}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="quality">
              <Form.Label>Chất lượng:</Form.Label>
              <Form.Control
                type="text"
                name="quality"
                value={quality}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="mass">
              <Form.Label>Khối lượng:</Form.Label>
              <Form.Control
                type="text"
                name="mass"
                value={mass}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="size">
              <Form.Label>Kích thước:</Form.Label>
              <Form.Control
                type="text"
                name="size"
                value={size}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="color">
              <Form.Label>Màu:</Form.Label>
              <Form.Control
                type="text"
                name="color"
                value={color}
                onChange={handleChange}
              />
            </Form.Group>
            <br></br>
            <div className="text-center">
              <Button variant="primary" type="submit">
                Cập Nhật
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditProduct;
