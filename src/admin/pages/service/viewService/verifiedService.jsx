import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';

const ConfirmationServiceNotification = () => {
  const navigate = useNavigate();
  const navigateToPaymentVerfication = () => {
    // 👇️ navigate to /contacts
    navigate('/service');
  };
  const navigateToOrderVerification = () => {
    // 👇️ navigate to /contacts
    navigate('/homeAdmin');
  };
    return (
    <>
    {/* Header:  */}
    {/* Content: */}
    <Container >
   
    <Card className="text-center" style={{width:"1300px"}}>
      <Card.Header style={{fontSize:"20px"}}><b>Bảng Thông Báo</b></Card.Header>
      <Card.Body>
        <Card.Title style={{color: 'green'}}>Xác Nhận Thành Công</Card.Title>
        <Card.Text>
          Phiếu dịch vụ đã được xác nhận <br/>
          Tin nhắn xác nhận đã được gửi vào gmail đăng ký của bạn!
        </Card.Text>
        
        <Card.Text>
        <Button variant="primary" onClick={navigateToPaymentVerfication} style={{margin:"20px", marginTop:"5px"}}>Quay Lại Phiếu Dịch Vụ</Button>
        
        <Button variant="primary" onClick={navigateToOrderVerification}  style={{margin:"20px" , marginTop:"5px"}}>Quay Lại Trang Chủ </Button>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">05/05/2023</Card.Footer>
    </Card>
     

      
    </Container>
    {/* Footer: */}
    </>
  );
}

export default ConfirmationServiceNotification;
