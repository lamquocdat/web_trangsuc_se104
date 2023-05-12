import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';

const ConfirmationNotification = () => {
  const navigate = useNavigate();
  const navigateToPaymentVerfication = () => {
    // 👇️ navigate to /contacts
    navigate('/paymentVerfication');
  };
  const navigateToOrderVerification = () => {
    // 👇️ navigate to /contacts
    navigate('/orderVerification');
  };
    return (
    <>
    {/* Header:  */}
    {/* Content: */}
    <Container>
   
    <Card className="text-center">
      <Card.Header style={{fontSize:"20px"}}><b>Bảng Thông Báo</b></Card.Header>
      <Card.Body>
        <Card.Title style={{color: 'green'}}>Xác Nhận Thành Công</Card.Title>
        <Card.Text>
          Bảng thông tin đã được xác nhận <br/>
          Tin nhắn xác nhận đã được gửi vào gmail đăng ký của bạn!
        </Card.Text>
        
        <Card.Text>
        <Button variant="primary" onClick={navigateToPaymentVerfication} style={{margin:"20px", marginTop:"5px"}}>Quay Lại Xác Nhận Thanh Toán</Button>
        
        <Button variant="primary" onClick={navigateToOrderVerification}  style={{margin:"20px" , marginTop:"5px"}}>Quay Lại Xác Nhận Đặt Hàng</Button>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">05/05/2023</Card.Footer>
    </Card>
     

      
    </Container>
    {/* Footer: */}
    </>
  );
}

export default ConfirmationNotification;
