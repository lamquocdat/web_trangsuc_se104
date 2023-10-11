import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Datepicker from './Components/DatePicker';

function Book() {
  return (
    <>
      {/* Header:  */}
      {/* Content: */}
      <Container>
        <div>
          <h4
            style={{ color: 'rgba(0, 0, 0, 0.7)' }}
            className="text-center mt-3"
          >
            ĐẶT LỊCH HẸN TƯ VẤN MUA TRANG SỨC
          </h4>
          <h6 style={{ color: 'rgba(0, 0, 0, 0.7)' }} className="text-center">
            Quý khách vui lòng điền thông tin theo mẫu dưới đây!
          </h6>
          <h6
            style={{ color: 'rgba(0, 0, 0, 0.7)' }}
            className="text-center mb-4"
          >
            Cảm ơn quý khách!
          </h6>
          <div className="d-flex justify-content-center w-full">
              <Datepicker></Datepicker>
          </div>
        </div>
      </Container>
      {/* Footer: */}
    </>
  );
}

export default Book;
