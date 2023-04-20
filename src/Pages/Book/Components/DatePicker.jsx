import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form } from 'react-bootstrap';
import {Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Datepicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <Form style={{width : "1000px"}} className="align-items-center justify-content-center">
    <Form.Group controlId="formBasicDate" className="align-items-center justify-content-center">
      <Row> 
          <Col md={4}>
              <Form.Label>Ngày hẹn *</Form.Label>
          </Col>
          <Col md={8}>
              <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              />
          </Col>
      </Row>
      <Row>
          <Col  md={4}>
              <Form.Label>Sản phẩm cần tư vấn *</Form.Label>
          </Col>
          <Col  md={8}>
              <Form.Select aria-label="Default select example">
                  <option>Chọn sản phẩm</option>
                  <option value="1">Nhẫn</option>
                  <option value="2">Dây chuyền</option>
                  <option value="3">Bông tai</option>
                  <option value="4">Vòng tay</option>
              </Form.Select>
          </Col>
      </Row>
      <Row>
          <Col md={4}>
              <Form.Label>Lời nhắn</Form.Label>
          </Col>
          <Col md={8}>
          <Form.Control 
              as="textarea"
              rows={3}
              placeholder="Nội dung lời nhắn"
              />
            <div style={{ marginTop: '2rem' }} className="text-center">
                
                <Button variant="primary">Gửi</Button>{' '}
            </div>
          </Col>
      </Row>
       
      
    </Form.Group>
  </Form>
  
  );
};

export default Datepicker;
