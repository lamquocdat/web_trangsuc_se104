import styles from "./Footer.module.css";
//material icons

function Footer () {
    return (
        <div className="main-footer">
           <a href="http://localhost:3000/">
           <img
              src={require('../../assets/images/logo.png')}
              alt=""
              className="logo-footer"
            />
            </a>
            <div className="footer-container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <h4>© 2017 Công Ty Cổ Phần Vàng Bạc Đá Quý Phú Nhuận</h4>
                    <ul className="list-unstyled">
                        <p>170E Phan Đăng Lưu, P.3, Q.Phú Nhuận, TP.Hồ Chí Minh ĐT: 028 39951703 - Fax: 028 3995 1702</p>
                        <p><u>Giấy chứng nhận đăng ký doanh nghiệp: 0300521758.</u></p>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h4>Về Dialuxury</h4>
                    <ul className="list-unstyled">
                        <li>Câu chuyện PNJ</li>
                        <li>Tuyển dụng</li>
                        <li>Xuất khẩu</li>
                        <li>Kinh doanh sỉ</li>
                        <li>Kiểm định kim cương</li>
                        <li>Kinh doanh vàng miếng</li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h4>Dịch vụ khách hàng</h4>
                    <ul className="list-unstyled">
                        <li>Hướng dẫn đo size trang sức</li>
                        <li>Mua hàng trả góp</li>
                        <li>Hướng dẫn mua hàng và thanh toán</li>
                        <li>Chính sách hoàn tiền</li>
                        <li>Chính sách giao hàng</li>
                        <li>Cẩm nang sử dụng trang sức</li>
                        
                    </ul>
                </div>
                </div>
                <div className="footer-bottom">
                <div className="col-md-3 col-sm-6">
                    <h4>Phương thức thanh toán</h4>
                    <ul className="list-unstyled">
                        <div className="img">
                        <img
                            src={require('../../assets/images/visaimg.png')}
                            alt=""
                            className="socialMedia"/>
                        
                        
                        <img
                            src={require('../../assets/images/jcbimg.png')}
                            alt=""
                            className="socialMedia"/>
                        
                        
                        <img
                            src={require('../../assets/images/mastercardimg.png')}
                            alt=""
                            className="socialMedia"/>

                        <img
                            src={require('../../assets/images/cashimg.png')}
                            alt=""
                            className="socialMedia"/>   
                        </div>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h4>Kết nối với chúng tôi</h4>
                    <ul className="list-unstyled">
                        <div className="img">
                        <img
                            src={require('../../assets/images/fbimg.png')}
                            alt=""
                            className="socialMedia"/>
                        
                        
                        <img
                            src={require('../../assets/images/instaimg.png')}
                            alt=""
                            className="socialMedia"/>
                        
                        
                        <img
                            src={require('../../assets/images/Twitterimg.png')}
                            alt=""
                            className="socialMedia"/>

                        <img
                            src={require('../../assets/images/mailimg.png')}
                            alt=""
                            className="socialMedia"/>   
                        </div>
                    </ul>
                </div>
                </div>
            
            <div className="footer-text">
                <p className="text-xs-center">
                    &copy;{new Date().getFullYear()} All Rights Reserved
                </p>
            </div>
           </div>
        </div>
    );
}

export default Footer;