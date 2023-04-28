import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Datepicker from "./Components/DatePicker";

function Book() {
    return (
      <>
        {/* Header:  */}
        {/* Content: */}
        <Container>
          <Form>
          <h2 style={{ color:'rgba(0, 0, 0, 0.7)'  }} className="text-center mt-3">ĐẶT LỊCH HẸN TƯ VẤN MUA TRANG SỨC</h2>
              <h5 style={{color: 'rgba(0, 0, 0, 0.7)' }} className="text-center">Quý khách vui lòng điền thông tin theo mẫu dưới đây!</h5>
              <h5 style={{ color:'rgba(0, 0, 0, 0.7)'  }} className="text-center mb-4">Cảm ơn quý khách!</h5>
              
              <Datepicker></Datepicker>
          </Form>
            
            
        </Container>
        {/* Footer: */}
      </>
    );
  }
  
  export default Book;