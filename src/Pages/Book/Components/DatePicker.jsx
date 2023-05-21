import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import toast, { Toaster } from 'react-hot-toast';
import { getUserbyId, scheduleMail } from '../../Login1/helpers/helper';
import { useParams } from 'react-router-dom';
const Datepicker = () => {
  const { _id } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);
  const [email, setEmail] = useState('');
  const [formValues, setFormValues] = useState({
    message: '',
    product: [],
    date: null,
  });
  useEffect(() => {
    // This function will run once when the component mounts.
    let forgotPromise = getUserbyId(_id);
    forgotPromise.then(function (res) {
      let { email } = res.data;
      setEmail(email);
    });
  }, []); // The empty array as the second argument means this effect will only run once.

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (
      !formValues.date ||
      formValues.product.length === 0 ||
      !formValues.message
    ) {
      toast.error('Xin hãy điền đầy đủ vào mẫu');
      return;
    }
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() - 1);
    if (formValues.date < tomorrow) {
      toast.error('Hãy chọn ngày hợp lệ ');
      return;
    }

    await toast.promise(scheduleMail(formValues.date, email), {
      loading: 'Checking...',
      success: <b>Thư xác nhận đặt lịch đã được gửi qua email của bạn </b>,
      error: <b>Có lỗi xảy ra, vui lòng thử lại</b>,
    });
  };
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    // handle checkbox type input
    if (type === 'checkbox') {
      const updatedProduct = formValues.product.includes(value)
        ? formValues.product.filter((p) => p !== value)
        : [...formValues.product, value];
      setFormValues({ ...formValues, product: updatedProduct });
      return;
    }

    // handle other input types
    setFormValues({ ...formValues, [name]: value });
  };
  return (
    <main>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <Form
        style={{ border: 'solid 2px' }}
        className="align-items-center justify-content-center mt-3"
        onSubmit={handleFormSubmit}
      >
        <Form.Group
          controlId="formBasicDate"
          className="align-items-center justify-content-center mt-3"
        >
          <Row className="align-items-center justify-content-center">
            <Col md={2}>
              <Form.Label>Ngày hẹn *</Form.Label>
            </Col>
            <Col md={4}>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date);
                  setFormValues({
                    ...formValues,
                    date: date,
                  });
                }}
                dateFormat="dd/MM/yyyy"
              />
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col md={2}>
              <Form.Label>Sản phẩm cần tư vấn *</Form.Label>
            </Col>
            <Col md={4}>
              {['checkbox'].map((type) => (
                <div key={`default ${type}`} className="mt-3">
                  <Row>
                    <Col>
                      <Form.Check
                        type={type}
                        name="product"
                        id="default1"
                        label={`Nhẫn`}
                        value="Nhẫn"
                        onChange={handleInputChange}
                      />
                      <Form.Check
                        type={type}
                        name="product"
                        id="default2"
                        label={`Bông tai`}
                        value="Bông tai"
                        onChange={handleInputChange}
                      />
                      <Form.Check
                        type={type}
                        name="product"
                        id="default3"
                        label={`Dây chuyền`}
                        value="Dây chuyền"
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        type={type}
                        name="product"
                        id="default4"
                        label={`Cân`}
                        value="Cân"
                        onChange={handleInputChange}
                      />
                      <Form.Check
                        type={type}
                        name="product"
                        id="default5"
                        label={`Gia công`}
                        value="Gia công"
                        onChange={handleInputChange}
                      />
                      <Form.Check
                        type={type}
                        name="product"
                        id="default6"
                        label={`Cho thuê`}
                        value="Cho thuê"
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Row>
                </div>
              ))}
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col md={2}>
              <Form.Label>Lời nhắn</Form.Label>
            </Col>
            <Col md={4} className="mt-3">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Nội dung lời nhắn"
                name="message"
                value={formValues.message}
                onChange={handleInputChange}
              />
            </Col>
          </Row>
          <div style={{ marginTop: '2rem' }} className="text-center mb-3">
            <Button variant="primary" onClick={handleFormSubmit}>
              Gửi
            </Button>{' '}
          </div>
        </Form.Group>
      </Form>
    </main>
  );
};

export default Datepicker;
