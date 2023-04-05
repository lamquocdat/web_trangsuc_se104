import { Container, Row, Col } from 'react-bootstrap';
import aboutus1 from "../../assets/images/avatar.png";
import { CenterFocusStrong } from '@mui/icons-material';
function AboutUs() {
  return (
    <>
    {/* Header:  */}
    {/* Content: */}
    <Container>
      <Row className="my-4">
        <h1>Thông tin về PNJ | Trang Sức Cao Cấp PNJ</h1>
        <Col>
          
          <p>Tên doanh nghiệp: CÔNG TY CỔ PHẦN VÀNG BẠC ĐÁ QUÝ PHÚ NHUẬN</p>
          <p>Tên tiếng Anh: Phu Nhuan Jewelry Joint Stock Company</p>
          <p>Tên doanh nghiệp: CÔNG TY CỔ PHẦN VÀNG BẠC ĐÁ QUÝ PHÚ NHUẬN</p>
          <p>Tên doanh nghiệp: CÔNG TY CỔ PHẦN VÀNG BẠC ĐÁ QUÝ PHÚ NHUẬN</p>
          <p>Tên doanh nghiệp: CÔNG TY CỔ PHẦN VÀNG BẠC ĐÁ QUÝ PHÚ NHUẬN</p>
        </Col>
        <Col>
            <img src={aboutus1} style={{ width: "400px" }}></img>
          <p>Tên doanh nghiệp: CÔNG TY CỔ PHẦN VÀNG BẠC ĐÁ QUÝ PHÚ NHUẬN</p>
          <p>Tên tiếng Anh: Phu Nhuan Jewelry Joint Stock Company</p>
          <p>Tên doanh nghiệp: CÔNG TY CỔ PHẦN VÀNG BẠC ĐÁ QUÝ PHÚ NHUẬN</p>
          <p>Tên doanh nghiệp: CÔNG TY CỔ PHẦN VÀNG BẠC ĐÁ QUÝ PHÚ NHUẬN</p>
          <p>Tên doanh nghiệp: CÔNG TY CỔ PHẦN VÀNG BẠC ĐÁ QUÝ PHÚ NHUẬN</p>
        </Col>
      </Row>
      <Row className="my-4">
        <Col sm={4}>
          {/* <Image src="https://via.placeholder.com/300" rounded /> */}
          <h4>Tầm nhìn</h4>
          <p>Chúng tôi mong muốn trở thành một trong những công ty hàng đầu trong ngành công nghệ.</p>
        </Col>
        <Col sm={4}>
          {/* <Image src="https://via.placeholder.com/300" rounded /> */}
          <h4>Sứ mệnh</h4>
          <p>Chúng tôi luôn nỗ lực để mang đến cho khách hàng những sản phẩm và dịch vụ tốt nhất.</p>
        </Col>
        <Col sm={4}>
          {/* <Image src="https://via.placeholder.com/300" rounded /> */}
          <h4>Giá trị cốt lõi</h4>
          <p>Chúng tôi luôn đặt lợi ích của khách hàng lên hàng đầu và luôn tuân thủ các tiêu chuẩn chất lượng cao nhất.</p>
        </Col>
      </Row>
    </Container>
    {/* Footer: */}
    </>
  );
}

export default AboutUs;
