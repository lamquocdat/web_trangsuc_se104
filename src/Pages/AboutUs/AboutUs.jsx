import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import aboutus1 from "../../assets/images/avatar.png";
import aboutus2 from "../../assets/images/logo.png";

function AboutUs() {
    return (
    <>
    {/* Header:  */}
    {/* Content: */}
    <Container>
    <h1 className="d-flex align-items-center justify-content-center">Thông tin về Dialuxury | Trang Sức Cao Cấp Dialuxury</h1>
    <br />
    <Card className="bg-secondary mb-3" >
      <Card.Body>
        <div className='card-text'>
        <Row >
        
        <Col>
          <br />
            <p>Tên doanh nghiệp: CÔNG TY CỔ PHẦN VÀNG BẠC ĐÁ QUÝ Dialuxury 
                <br />Tên tiếng Anh: Dialuxury Joint Stock Company
                <br />Địa chỉ: 170E Phan Đăng Lưu – Phường 3 – Quận Phú Nhuận – Thành phố Hồ Chí Minh
                <br />Điện thoại: (84-28) 39951703 – Fax: (84-28) 39951702 – Email: dialuxury@dialuxury .com.vn
                <br />Ngành nghề kinh doanh chính:
                <br />Sản xuất kinh doanh trang sức bằng vàng, bạc, đá quý, phụ kiện thời trang, quà lưu niệm. Kinh doanh đồng hồ và mua bán vàng miếng
                <br />Dịch vụ kiểm định kim cương, đá quý, kim loại quý
                <br />
                <br />
                <br />
            </p>
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
            <img src={aboutus1} style={{ width: "5rem"}}></img> 
            <p>Ông Nguyễn Thành Long<br/>Chủ tịch HĐQT DIALUXURY</p>
        </Col>
      </Row>
        </div>
      </Card.Body>
    </Card>
      {/* <Row >
        
        <Col>
          <br />
            <p>Tên doanh nghiệp: CÔNG TY CỔ PHẦN VÀNG BẠC ĐÁ QUÝ PHÚ NHUẬN
                <br />Tên tiếng Anh: Phu Nhuan Jewelry Joint Stock Company
                <br />Tên viết tắt: PNJ.,JSC
                <br />Địa chỉ: 170E Phan Đăng Lưu – Phường 3 – Quận Phú Nhuận – Thành phố Hồ Chí Minh
                <br />Điện thoại: (84-28) 39951703 – Fax: (84-28) 39951702 – Email: pnj@pnj.com.vn
                <br />Ngành nghề kinh doanh chính:
                <br />Sản xuất kinh doanh trang sức bằng vàng, bạc, đá quý, phụ kiện thời trang, quà lưu niệm. Kinh doanh đồng hồ và mua bán vàng miếng
                <br />Dịch vụ kiểm định kim cương, đá quý, kim loại quý
                <br />
                <br />
                <br />
            </p>
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
            <img src={aboutus1} style={{ width: "100px"}}></img> 
            <p>Ông Nguyễn Văn A<br/> Chủ tịch HĐQT PNJ </p>
        </Col>
      </Row> */}
      <Row>
        <Col className="d-flex align-items-center justify-content-center">
            <img src={aboutus2} style={{ width: "20rem" }}></img>
        </Col>
        <Col>
            <br />  
            <br />
            <h4>Tầm nhìn</h4>
            <p>Trở thành công ty hàng đầu châu Á về chế tác trang sức và bán lẻ sản phẩm tôn vinh vẻ đẹp, vươn tầm thế giới.</p>
            <h4>Sứ mệnh</h4>
            <p>PNJ không ngừng sáng tạo để mang lại những sản phẩm tinh tế với giá trị thật để tôn vinh vẻ đẹp cho con người và cuộc sống.
            </p>
            <h4>Giá trị cốt lõi</h4>
            <p>1. CHÍNH TRỰC ĐỂ TRƯỜNG TỒN
                <br /> 2. KIÊN ĐỊNH BÁM MỤC TIÊU
                <br /> 3. QUAN TÂM CÙNG PHÁT TRIỂN
                <br /> 4. TẬN TÂM VÌ KHÁCH HÀNG
                <br /> 5. TIÊN PHONG TẠO KHÁC BIỆT
            </p>
            <br />  
            <br />
        </Col>
      </Row>
      
    </Container>
    {/* Footer: */}
    </>
  );
}

export default AboutUs;
