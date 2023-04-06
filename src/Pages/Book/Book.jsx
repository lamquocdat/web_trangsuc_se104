import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Datepicker from "./Components/DatePicker";

function Book() {
    return (
      <>
        {/* Header:  */}
        {/* Content: */}
        <Container>
            <h1 className="text-center">ĐẶT LỊCH HẸN TƯ VẤN MUA TRANG SỨC</h1>
            <h5 className="text-center">Quý khách vui lòng điền thông tin theo mẫu dưới đây!</h5>
            <h5 style={{ marginBottom: '2rem' }} className="text-center">Cảm ơn quý khách!</h5>
            
            <Datepicker></Datepicker>
            <div style={{marginBottom: '2rem'}}></div>
        </Container>
        {/* Footer: */}
      </>
    );
  }
  
  export default Book;