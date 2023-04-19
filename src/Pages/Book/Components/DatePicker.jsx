import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Datepicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <Form style={{ border:'solid 2px'}} className="align-items-center justify-content-center mt-3" >
    <Form.Group controlId="formBasicDate" className="align-items-center justify-content-center mt-3" >
      <Row className="align-items-center justify-content-center"> 
          <Col md={2}>
              <Form.Label>Ngày hẹn *</Form.Label>
          </Col>
          <Col md={4}>
              <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              />
          </Col>
      </Row>
      <Row className="align-items-center justify-content-center">
          <Col  md={2}>
              <Form.Label>Sản phẩm cần tư vấn *</Form.Label>
          </Col>
          <Col  md={4}>
          {['checkbox'].map((type) => (
          <div key={`default ${type}`} className="mt-3">
            <Row>
              <Col>
                <Form.Check 
                type={type}
                id={`default`}
                label={`Nhẫn`}
                />
                <Form.Check 
                type={type}
                id={`default`}
                label={`Bông tai`}
                />
                <Form.Check 
                type={type}
                id={`default`}
                label={`Dây chuyền`}
                />
              </Col>
            </Row>
            
          </div>
        ))}
              {/* <Form.Select aria-label="Default select example">
                  <option>Chọn sản phẩm</option>
                  <option value="1">Nhẫn</option>
                  <option value="2">Dây chuyền</option>
                  <option value="3">Bông tai</option>
              </Form.Select> */}
          </Col>
      </Row>
      <Row className="align-items-center justify-content-center">
          <Col md={2}>
              <Form.Label>Lời nhắn</Form.Label>
          </Col>
          <Col md={4} className='mt-3'>
          <Form.Control 
              as="textarea"
              rows={3}
              placeholder="Nội dung lời nhắn"
              />
           
          </Col>
      </Row>
      <div style={{ marginTop: '2rem' }} className="text-center mb-3">
                
                <Button variant="primary">Gửi</Button>{' '}
            </div>
    </Form.Group>
  </Form>
  
  );
};

export default Datepicker;
