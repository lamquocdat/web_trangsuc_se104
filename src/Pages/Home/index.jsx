import styles from "./Home.module.css";
import { Container, Row, Col } from "react-bootstrap";
function Home() {
  return (
    <div>
      <Container fluid>
        <Row>
          <img
            src={require("../../assets/images/banner-main-homepage-img.jpg")}
            alt=""
            className={styles.banner}
          />
        </Row>

        {/* Xu hướng tìm kiếm */}

        <Row className={"pb-5 pt-4 px-5 " + styles.line}>
          <h4 className="pb-3" style={{ color: "blue" }}>
            Xu hướng tìm kiếm
          </h4>
          <Col className={styles.item}>
            <div className={styles.goods}>
              <img
                src={require("../../assets/images/trang-suc-vang.png")}
                alt=""
                className={styles.pic}
              />
              <div className={styles.name}>trang sức vàng</div>
            </div>
          </Col>
          <Col className={styles.item}>
            <div className={styles.goods}>
              <img
                src={require("../../assets/images/trang-suc-vang.png")}
                alt=""
                className={styles.pic}
              />
              <div className={styles.name}>trang sức vàng</div>
            </div>
          </Col>
          <Col className={styles.item}>
            <div className={styles.goods}>
              <img
                src={require("../../assets/images/trang-suc-vang.png")}
                alt=""
                className={styles.pic}
              />
              <div className={styles.name}>trang sức vàng</div>
            </div>
          </Col>
          <Col className={styles.item}>
            <div className={styles.goods}>
              <img
                src={require("../../assets/images/trang-suc-vang.png")}
                alt=""
                className={styles.pic}
              />
              <div className={styles.name}>trang sức vàng</div>
            </div>
          </Col>
        </Row>

        {/* Sản phẩm bán chạy */}

        <Row className={"pb-5 pt-4 px-5 " + styles.line}>
          <h4 className="pb-3" style={{ color: "blue" }}>
            Sản phẩm bán chạy
          </h4>
          <Col className={styles.item}>
            <div className={styles.goods}>
              <img
                src={require("../../assets/images/trang-suc-vang.png")}
                alt=""
                className={styles.pic}
              />
              <div className={styles.name}>trang sức vàng</div>
              <div className={styles.price} style={{ color: "orange" }}>
                <b>10.900.000đ</b>
              </div>

              <div className={styles.count}>
                <b>1000</b>+ đã bán được
              </div>
            </div>
          </Col>
          <Col className={styles.item}>
            <div className={styles.goods}>
              <img
                src={require("../../assets/images/trang-suc-vang.png")}
                alt=""
                className={styles.pic}
              />
              <div className={styles.name}>trang sức vàng</div>
              <div className={styles.price} style={{ color: "orange" }}>
                <b>10.900.000đ</b>
              </div>
              <div className={styles.count}>
                <b>1000</b>+ đã bán được
              </div>
            </div>
          </Col>
          <Col className={styles.item}>
            <div className={styles.goods}>
              <img
                src={require("../../assets/images/trang-suc-vang.png")}
                alt=""
                className={styles.pic}
              />
              <div className={styles.name}>trang sức vàng</div>
              <div className={styles.price} style={{ color: "orange" }}>
                <b>10.900.000đ</b>
              </div>
              <div className={styles.count}>
                <b>1000</b>+ đã bán được
              </div>
            </div>
          </Col>
          <Col className={styles.item}>
            <div className={styles.goods}>
              <img
                src={require("../../assets/images/trang-suc-vang.png")}
                alt=""
                className={styles.pic}
              />
              <div className={styles.name}>trang sức vàng</div>
              <div className={styles.price} style={{ color: "orange" }}>
                <b>10.900.000đ</b>
              </div>
              <div className={styles.count}>
                <b>1000</b>+ đã bán được
              </div>
            </div>
          </Col>
        </Row>

        {/* Sản phẩm mới */}

        <Row className={"pb-5 pt-4 px-5 " + styles.line}>
          <h4 className="pb-3" style={{ color: "blue" }}>
            Sản phẩm mới
          </h4>
          <Col className={styles.item}>
            <div className={styles.goods}>
              <img
                src={require("../../assets/images/trang-suc-vang.png")}
                alt=""
                className={styles.pic}
              />
              <div className={styles.name}>trang sức vàng</div>
              <div className={styles.price} style={{ color: "orange" }}>
                <b>10.900.000đ</b>
              </div>
            </div>
          </Col>
          <Col className={styles.item}>
            <div className={styles.goods}>
              <img
                src={require("../../assets/images/trang-suc-vang.png")}
                alt=""
                className={styles.pic}
              />
              <div className={styles.name}>trang sức vàng</div>
              <div className={styles.price} style={{ color: "orange" }}>
                <b>10.900.000đ</b>
              </div>
            </div>
          </Col>
          <Col className={styles.item}>
            <div className={styles.goods}>
              <img
                src={require("../../assets/images/trang-suc-vang.png")}
                alt=""
                className={styles.pic}
              />
              <div className={styles.name}>trang sức vàng</div>
              <div className={styles.price} style={{ color: "orange" }}>
                <b>10.900.000đ</b>
              </div>
            </div>
          </Col>
          <Col className={styles.item}>
            <div className={styles.goods}>
              <img
                src={require("../../assets/images/trang-suc-vang.png")}
                alt=""
                className={styles.pic}
              />
              <div className={styles.name}>trang sức vàng</div>
              <div className={styles.price} style={{ color: "orange" }}>
                <b>10.900.000đ</b>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
