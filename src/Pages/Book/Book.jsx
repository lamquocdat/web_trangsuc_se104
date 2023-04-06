import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Datepicker from "./Components/DatePicker";

function Book() {
    return (
      <>
        {/* Header:  */}
        {/* Content: */}
        <Container fluid>
            <h1 className="text-center">ĐẶT LỊCH HẸN TƯ VẤN MUA TRANG SỨC</h1>
            <h5 className="text-center">Quý khách vui lòng điền thông tin theo mẫu dưới đây!</h5>
            <h5 className="text-center">Cảm ơn quý khách!</h5>
            <br />
            <br />
            <Datepicker></Datepicker>
            <br />
            <br />
        </Container>
        {/* Footer: */}
      </>
    );
  }
  
  export default Book;