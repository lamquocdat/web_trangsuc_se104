import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import toast, { Toaster } from 'react-hot-toast';
import {
  getServiceType,
  getUserbyId,
  scheduleMail,
} from '../../Login1/helpers/helper';
import { useParams } from 'react-router-dom';
import Multiselect from 'multiselect-react-dropdown';
const Datepicker = () => {
  const { _id } = useParams();
  const ten = localStorage.getItem('ten');
  const [selectedDate, setSelectedDate] = useState(null);
  const [email, setEmail] = useState('');
  const [nameAndid, setNameandId] = useState();
  const [option1, setOptions1] = useState([
    'dv1',
    'dv2',
    'dv3',
    'dv4',
    'dv5',
    'dv6',
    'dv7',
    'dv8',
    'dv9',
  ]);
  const [options2, setOptions2] = useState([]);
  const [total, setTotal] = useState(0);
  const [selected, setSelected] = useState([]);
  const [allids, setIds] = useState();
  const [formValues, setFormValues] = useState({
    message: '',

    date: null,
  });
  useEffect(() => {
    // This function will run once when the component mounts.
    let forgotPromise = getUserbyId(_id);
    forgotPromise.then(function (res) {
      let { email } = res.data;
      setEmail(email);
    });
    let serviceTypePromise = getServiceType();
    serviceTypePromise.then(function (res) {
      console.log(res.data);
      const svtNameandPrice = res.data.map((item) => ({
        label: item.svt_name,
        value: item.svt_price,
      }));
      const svtNameandId = res.data.map((item) => ({
        label: item.svt_name,
        value: item._id,
      }));
      const svtNames = res.data.map((item) => item.svt_name);
      setOptions1(svtNames);
      setOptions2(svtNameandPrice);
      setNameandId(svtNameandId);
    });
  }, []); // The empty array as the second argument means this effect will only run once.

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!formValues.date || !allids || !formValues.message) {
      toast.error('Xin hãy điền đầy đủ vào mẫu');
      return;
    }
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() - 1);
    if (formValues.date < tomorrow) {
      toast.error('Hãy chọn ngày hợp lệ ');
      return;
    }
    var date = new Date(selectedDate);
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    date = date.toLocaleDateString(undefined, options);
    console.log(date);
    const body = {
      makh: email,
      tenkh: ten,
      serviceTypes: allids,
      s_date: date,
      total: total,
    };
    console.log(body);
    await toast.promise(scheduleMail(formValues.date, email, body), {
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
              <Form.Label>Dịch vụ cần tư vấn *</Form.Label>
            </Col>
            <Col md={4}>
              <Multiselect
                isObject={false}
                options={option1}
                onSelect={(event) => {
                  console.log(event);
                  setSelected(event);
                  const totalPrice = event.reduce((total, option) => {
                    const selectedOption = options2.find(
                      (o) => o.label === option
                    );
                    if (selectedOption) {
                      return total + selectedOption.value;
                    }
                    return total;
                  }, 0);
                  const ids = event.reduce((id, option) => {
                    const selectedOption = nameAndid.find(
                      (o) => o.label === option
                    );
                    if (selectedOption) {
                      return [...id, selectedOption.value];
                    }
                    return id;
                  }, []);
                  setIds(ids);
                  setTotal(totalPrice);
                  console.log('Total Price:', totalPrice);
                }}
                onRemove={(event) => {
                  setSelected(event);
                  const totalPrice = event.reduce((total, option) => {
                    const selectedOption = options2.find(
                      (o) => o.label === option
                    );
                    if (selectedOption) {
                      return total + selectedOption.value;
                    }
                    return total;
                  }, 0);
                  const ids = event.reduce((id, option) => {
                    const selectedOption = nameAndid.find(
                      (o) => o.label === option
                    );
                    if (selectedOption) {
                      return [...id, selectedOption.value];
                    }
                    return id;
                  }, []);
                  setIds(ids);
                  setTotal(totalPrice);
                  console.log('Total Price:', totalPrice);
                }}
                showCheckbox
              ></Multiselect>
              <div>Total Price: {total.toLocaleString()} VND</div>
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
