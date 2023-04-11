import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import blog1 from "../../assets/images/Blog/blog1.png";
import blog2 from "../../assets/images/Blog/blog2.png";
import blog3 from "../../assets/images/Blog/blog3.png";

function Blog() {
  return (
    <>
      {/* Header:  */}
      {/* Content: */}
      <Container fluid>
        <Row>
          <img src={blog1} className="px-0"></img>
        </Row>
        <Row className="pb-5 pt-4 px-5">
          <h4 className="pb-3">Cẩm nang cưới</h4>
          <Col lg="5">
            <img src={blog2} style={{ width: "400px" }}></img>
          </Col>
          <Col>
            <div>
              <p>
                Top những món trang sức phù hợp nhất cho những bữa tiệc cưới
                cuối, gồm: Dây chuyền, nhẫn, bông tai, vòng, lắc tay,...
              </p>
              <p>
                Một mùa cưới nữa đã đến, hội chị em lại bắt đầu chuẩn bị trang
                phục thật đẹp để diện trong ngày vui.
              </p>
              <p>
                Hãy đến cửa hàng của chúng tôi để sắm những đồ trang sức đẹp
                nhất cho ngày cưới của các bạn.
              </p>
            </div>
            <Link to="/products/nhan">Tham khảo các sản phẩm</Link>
          </Col>
        </Row>

        <Row className=" px-5">
          <h4 className="pb-3">Gợi ý quà tặng</h4>
          <Col lg="5">
            <div>
              <img
                src={blog3}
                style={{ width: "400px", height: "240px" }}
              ></img>
            </div>
          </Col>
          <Col>
            <div>
              <p>
                Top 10 món quà trang sức đẹp, phù hợp, ý nghĩa cho người thân,
                bạn bè và người xung quanh.
              </p>
              <p>
                Hãy tặng cô gái của bạn những món quà thật đẹp từ cửa hàng của
                chúng tôi, bạn sẽ lấy lòng được cô ấy.
              </p>
              <p>
                Một người con gái đẹp thì phải biết chọn những món đồ trang sức
                đẹp, nó sẽ tôn lên sự quyến rủ của họ.
              </p>
            </div>
            <Link to="/products/nhan">Tham khảo các sản phẩm</Link>
          </Col>
        </Row>
      </Container>
      {/* Footer: */}
    </>
  );
}

export default Blog;
