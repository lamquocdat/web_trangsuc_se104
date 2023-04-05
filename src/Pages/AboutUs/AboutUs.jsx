import { Container, Row, Col } from 'react-bootstrap';
import aboutus1 from "../../assets/images/avatar.png";
import aboutus2 from "../../assets/images/logo.png";

function AboutUs() {
    // const backgroundImage = {
    //     backgroundImage: `url('../../assets/images/background-aboutus.png')`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //   };
    return (
    <>
    {/* Header:  */}
    {/* Content: */}
    <Container>
      <Row >
        <h1 className="d-flex align-items-center justify-content-center">Thông tin về PNJ | Trang Sức Cao Cấp PNJ</h1>
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
      </Row>
      <Row>
        <Col className="d-flex align-items-center justify-content-center">
            <img src={aboutus2} style={{ width: "400px" }}></img>
        </Col>
        <Col>
            <h4>Ý nghĩa logo:</h4>
            <p>Hội Tụ và Tỏa Sáng.</p>
            <h4>Biểu tượng:</h4>
            <p>Việc thiết kế logo được lấy ý tưởng từ viên kim cương, loại đá quý nhất trong các loại đá quý, là biểu tượng của sự trường tồn và minh bạch.
                <br />Biểu tượng thiết kế logo của PNJ thể hiện rõ nét rằng các lãnh vực hoạt động của công ty rất đa dạng nhưng đều dựa trên nền tảng là những giá trị cốt lõi đã được xây dựng và không ngừng được củng cố.
                <br />5 tia sáng của biểu tượng rất đơn giản, mạnh mẽ nhưng không kém phần mềm mại, uyển chuyển, đặc trưng cho ngành chế tác kim hoàn vốn là hoạt động cốt lõi của doanh nghiệp. 5 tia sáng đó tượng trưng cho 5 nguyên tố ngũ hành, thể hiện sự vận động và phát triển không ngừng của PNJ.
                <br />PNJ là chữ viết tắt của tên doanh nghiệp, một tài sản vô giá được xây dựng và phát triển trong suốt 20 năm qua.
            </p>
            <h4>Màu sắc</h4>
            <p>Hai màu chủ đạo là vàng nhũ và xanh dương.
                <br />  - Màu vàng nhũ: là màu của kim loại vàng, chất liệu chính trong lãnh vực chế tác trang sức quý. Đó cũng là biểu tượng của sự phồn thịnh, giàu có, mang lại cảm xúc vui tươi và may mắn.
                <br />  - Màu xanh dương: là màu của bầu trời, của đại dương và là biểu tượng của niềm tin. Màu xanh dương được xem như là màu của sự hợp tác, thành công và bền vững.
                <br />Sự phối hợp giữa vàng nhũ và xanh dương đậm thể hiện tính thời trang, phong cách và một niềm tin vững chắc
            </p>
            <h4>Slogon</h4>
            <p>Niềm Tin và Phong Cách</p>
        </Col>
      </Row>
    </Container>
    {/* Footer: */}
    </>
  );
}

export default AboutUs;
