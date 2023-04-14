import styles from "./Footer.module.css";
import { Link } from "react-router-dom";


function Footer () {
    return (
        <div className={"main-footer " + styles.mainFooter}>
           <Link to="/">
           <img
              src={require('../../assets/images/logo.png')}
              alt=""
              className={styles.logoFooter}
            />
            </Link>
            <div className={styles.footerContainer}>
            <div className={"row " + styles.line}>
                <div className={"col-md-3 col-sm-6 " + styles.column}>
                    <h4>© 2017 Công Ty Cổ Phần Vàng Bạc Đá Quý Phú Nhuận</h4>
                    <ul className="list-unstyled">
                        <p>170E Phan Đăng Lưu, P.3, Q.Phú Nhuận, TP.Hồ Chí Minh ĐT: 028 39951703 - Fax: 028 3995 1702</p>
                        <p><u>Giấy chứng nhận đăng ký doanh nghiệp: 0300521758.</u></p>
                    </ul>
                </div>
                <div className={"col-md-3 col-sm-6 " + styles.column}>
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
                <div className={"col-md-3 col-sm-6 " + styles.column}>
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
                <div className={styles.footerBottom}>
                <div className={"col-md-3 col-sm-6 " + styles.column}>
                    <h4>Phương thức thanh toán</h4>
                    <ul className="list-unstyled">
                        <div className={styles.img}>
                        <img
                            src={require('../../assets/images/visaimg.png')}
                            alt=""
                            className={styles.socialMedia}/>
                        
                        
                        <img
                            src={require('../../assets/images/jcbimg.png')}
                            alt=""
                            className={styles.socialMedia}/>
                        
                        
                        <img
                            src={require('../../assets/images/mastercardimg.png')}
                            alt=""
                            className={styles.socialMedia}/>

                        <img
                            src={require('../../assets/images/cashimg.png')}
                            alt=""
                            className={styles.socialMedia}/>   
                        </div>
                    </ul>
                </div>
                <div className={"col-md-3 col-sm-6 " + styles.column}>
                    <h4>Kết nối với chúng tôi</h4>
                    <ul className="list-unstyled">
                        <div className={styles.img}>
                        <img
                            src={require('../../assets/images/fbimg.png')}
                            alt=""
                            className={styles.socialMedia}/>
                        
                        
                        <img
                            src={require('../../assets/images/instaimg.png')}
                            alt=""
                            className={styles.socialMedia}/>
                        
                        
                        <img
                            src={require('../../assets/images/Twitterimg.png')}
                            alt=""
                            className={styles.socialMedia}/>

                        <img
                            src={require('../../assets/images/mailimg.png')}
                            alt=""
                            className={styles.socialMedia}/>   
                        </div>
                    </ul>
                </div>
                </div>
            
            {/* <div className={styles.footerText}>
                <p className={"text-xs-center "+ styles.textFooterText}>
                    &copy;{new Date().getFullYear()} All Rights Reserved
                </p>
            </div> */}
           </div>
        </div>
    );
}

export default Footer;