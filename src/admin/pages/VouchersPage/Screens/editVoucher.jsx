import React, { useState, useEffect } from "react";
import { Form, Button, Row, Container, Col } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import  toast, { Toaster } from 'react-hot-toast';

const EditVoucher = () => {
  // const EditProductForm = () => {
  //   const [product, setProduct] = useState({
  //     vouchersId: "",
  //     createdAt: "",
  //     production: "",
  //     PhoneNumber: "",
  //     address: "",
  //     dvt: "",
  //     quality: "",
  //     mass: "",
  //     size: "",
  //     color: "",
  //   });

  //   let id = useParams();
  //   const handleEditClick = () => {
  //     // Gọi API để lấy thông tin phiếu mua hàng
  //     axios
  //       .get(`https://dialuxury.onrender.com/product/${id}`)
  //       .then((response) => {
  //         // Cập nhật state với thông tin phiếu mua hàng
  //         setProduct(response.data);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   };

  //   const handleFormSubmit = (event) => {
  //     event.preventDefault();

  //     // Gọi API để cập nhật thông tin phiếu mua hàng
  //     axios
  //       .put(`https://dialuxury.onrender.com/product/${id}`, product)
  //       .then((response) => {
  //         console.log("Sản phẩm đã được cập nhật.");
  //         // Xử lý khi cập nhật thành công
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         // Xử lý khi có lỗi xảy ra trong quá trình cập nhật
  //       });
  //   };

  //   const handleInputChange = (event) => {
  //     const { createdAt, value } = event.target;
  //     // Cập nhật giá trị của trường phiếu mua hàng tương ứng trong state
  //     setProduct({ ...product, [createdAt]: value });
  //   };

  const [vouchersId, setVouchersId] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [production, setProduction] = useState("");
  const [address, setAddress] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "vouchersId") {
      setVouchersId(value);
    } else if (name === "createdAt") {
      setCreatedAt(value);
    } else if (name === "production") {
      setProduction(value);
    } else if (name === "address") {
      setAddress(value);
    } else if (name === "PhoneNumber") {
      setPhoneNumber(value);
    }
  };
  let { id } = useParams();
  useEffect(() => {
    // Fetch product details from API
    axios
      .get(`https://dialuxury.onrender.com/vouchers/${id}`)
      .then((response) => {
        const product = response.data;
        setVouchersId(product.vouchersId);
        setAddress(product.address);
        setCreatedAt(product.createdAt);
        setPhoneNumber(product.PhoneNumber);
        setProduction(product.production);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        // Handle error
      });
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    toast.loading('Deleting...');
    // Gửi yêu cầu PUT đến API để sửa phiếu mua hàng
    await axios
      .put(`https://dialuxury.onrender.com/vouchers/${id}`, {
        createdAt,
        production,
        PhoneNumber,
        address,
      })
      .then((response) => {
        toast.dismiss();
        toast.success(<b>Sửa phiếu mua hàng thành công</b>);
        console.log("Sửa phiếu mua hàng thành công:", response.data);
        // Xử lý kết quả thành công tại đây
      })
      .catch((error) => {
        toast.dismiss();
        toast.error(<b>Sửa phiếu mua hàng thất bại</b>);
        console.error("Lỗi khi sửa phiếu mua hàng:", error);
        // Xử lý lỗi tại đây
      });
    setVouchersId("");
    setCreatedAt("");

    setProduction("");

    setAddress("");
    setPhoneNumber("");
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
            <Form.Group controlId="productId">
              <Form.Label>Số phiếu:</Form.Label>
              <Form.Control
                type="text"
                name="vouchersId"
                value={vouchersId}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="createdAt">
              <Form.Label>Ngày Lập:</Form.Label>
              <Form.Control
                type="date"
                name="createdAt"
                value={createdAt}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="production">
              <Form.Label>Nhà Cung Cấp:</Form.Label>
              <Form.Control
                type="text"
                name="production"
                value={production}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Địa chỉ:</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={address}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="PhoneNumber">
              <Form.Label>Số điện thoại:</Form.Label>
              <Form.Control
                type="text"
                name="PhoneNumber"
                value={PhoneNumber}
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

export default EditVoucher;
