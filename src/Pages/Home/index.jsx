import styles from "./Home.module.css"
import { Container, Row, Col } from "react-bootstrap";
function Home () {
    return (
        <div>
            <Container fluid>
        <Row>
        <a className="homepage text-info" href="#">
            <img src={require('../../assets/images/banner-main-homepage-img.jpg')} alt="" className="banner" style={{ display: "block", marginLeft: "auto", marginRight: "auto"}}/>
        </a>
        </Row>

        {/* Xu hướng tìm kiếm */}

        <Row className="pb-5 pt-4 px-5" style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
          <h4 className="pb-3" style={{color:"blue"}}>Xu hướng tìm kiếm</h4>
          <Col style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
                <div className="goods" >
                    <img src={require('../../assets/images/trang-suc-vang.png')} alt="" className="pic"/>
                    <div className="name">trang sức vàng</div>
                </div>
            </Col>
            <Col style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
                <div className="goods" >
                    <img src={require('../../assets/images/trang-suc-vang.png')} alt="" className="pic"/>
                    <div className="name">trang sức vàng</div>
                </div>
            </Col>
            <Col style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
                <div className="goods" >
                    <img src={require('../../assets/images/trang-suc-vang.png')} alt="" className="pic"/>
                    <div className="name">trang sức vàng</div>
                </div>
            </Col>
            <Col style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
                <div className="goods" >
                    <img src={require('../../assets/images/trang-suc-vang.png')} alt="" className="pic"/>
                    <div className="name">trang sức vàng</div>
                </div>
            </Col>
        </Row>

        {/* Sản phẩm bán chạy */}

        <Row className="pb-5 pt-4 px-5" style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
          <h4 className="pb-3" style={{color:"blue"}}>Sản phẩm bán chạy</h4>
            <Col style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
                <div className="goods">
                    <img src={require('../../assets/images/trang-suc-vang.png')} alt="" className="pic"/>
                    <div className="name">trang sức vàng</div>
                    <div className="price" style={{color:"rgb(255, 217, 1)"}}>10.900.000đ</div>
                        <div className="goods-info" style={{display: "flex"}}>
                            <div className="rating" >5(3)</div>
                            <div className="counts" >1000+ bán được</div>
                        </div>
                </div>
            </Col>
            <Col style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
                <div className="goods">
                    <img src={require('../../assets/images/trang-suc-vang.png')} alt="" className="pic"/>
                    <div className="name">trang sức vàng</div>
                    <div className="price" style={{color:"rgb(255, 217, 1)"}}>10.900.000đ</div>
                    <div className="goods-info" style={{display: "flex"}}>
                            <div className="rating" >5(3)</div>
                            <div className="counts" >1000+ bán được</div>
                        </div>
                </div>
            </Col>
            <Col style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
                <div className="goods">
                    <img src={require('../../assets/images/trang-suc-vang.png')} alt="" className="pic"/>
                    <div className="name">trang sức vàng</div>
                    <div className="price" style={{color:"rgb(255, 217, 1)"}}>10.900.000đ</div>
                    <div className="goods-info" style={{display: "flex"}}>
                            <div className="rating" >5(3)</div>
                            <div className="counts" >1000+ bán được</div>
                        </div>
                </div>
            </Col>
            <Col style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
                <div className="goods">
                    <img src={require('../../assets/images/trang-suc-vang.png')} alt="" className="pic"/>
                    <div className="name">trang sức vàng</div>
                    <div className="price" style={{color:"rgb(255, 217, 1)"}}>10.900.000đ</div>
                    <div className="goods-info" style={{display: "flex"}}>
                            <div className="rating" >5(3)</div>
                            <div className="counts" >1000+ bán được</div>
                        </div>
                </div>
            </Col>
        </Row>

        {/* Sản phẩm mới */}

        <Row className="pb-5 pt-4 px-5" style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
          <h4 className="pb-3" style={{color:"blue"}}>Sản phẩm mới</h4>
            <Col style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
                <div className="goods">
                    <img src={require('../../assets/images/trang-suc-vang.png')} alt="" className="pic"/>
                    <div className="name">trang sức vàng</div>
                    <div className="price" style={{color:"rgb(255, 217, 1)"}}>10.900.000đ</div>
                </div>
            </Col>
            <Col style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
                <div className="goods">
                    <img src={require('../../assets/images/trang-suc-vang.png')} alt="" className="pic"/>
                    <div className="name">trang sức vàng</div>
                    <div className="price" style={{color:"rgb(255, 217, 1)"}}>10.900.000đ</div>
                </div>
            </Col>
            <Col style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
                <div className="goods">
                    <img src={require('../../assets/images/trang-suc-vang.png')} alt="" className="pic"/>
                    <div className="name">trang sức vàng</div>
                    <div className="price" style={{color:"rgb(255, 217, 1)"}}>10.900.000đ</div>
                </div>
            </Col>
            <Col style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
                <div className="goods">
                    <img src={require('../../assets/images/trang-suc-vang.png')} alt="" className="pic"/>
                    <div className="name">trang sức vàng</div>
                    <div className="price" style={{color:"rgb(255, 217, 1)"}}>10.900.000đ</div>
                </div>
            </Col>
        </Row>
        

        
      </Container>
        </div>
    );
}

export default Home;