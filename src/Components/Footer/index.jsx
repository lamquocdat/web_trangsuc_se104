import styles from "./Footer.module.css";
import { Link } from "react-router-dom";


function Footer () {
    return (
        <div className={"main-footer mt-3 " + styles.mainFooter}>
           <Link to="/">
                <img src={require('../../assets/images/logo.png')} alt="Logo Image" className={styles.logoFooter}/>
            </Link>
            <div className={styles.footerContainer}>
                <div className={"row " + styles.line}>
                    <div className={"col-sm-12 col-md-6 col-lg-3 " + styles.column}>
                        <h4>© 2017 Công Ty Cổ Phần Vàng Bạc Đá Quý Phú Nhuận</h4>
                        <ul className="list-unstyled">
                            <p>170E Phan Đăng Lưu, P.3, Q.Phú Nhuận, TP.Hồ Chí Minh.</p>
                            <p>ĐT: 028 39951703</p>
                            <p>Fax: 028 3995 1702</p> 
                            <p>Email: <Link to="#">abcde@gmail.com</Link></p>
                            <p><u><Link to="#" style={{color: "#212536"}}>Giấy chứng nhận đăng ký doanh nghiệp: 0300521758.</Link></u></p>
                        </ul>
                    </div>
                    <div className={"col-sm-12 col-md-4 col-lg-3 " + styles.column}>
                        <h4>Về Dialuxury</h4>
                        <ul className="list-unstyled">
                            <li><Link to="#" style={{textDecoration: "none", color: "#212536"}}>Câu chuyện PNJ</Link></li>
                            <li><Link to="#" style={{textDecoration: "none", color: "#212536"}}>Tuyển dụng</Link></li>
                            <li><Link to="#" style={{textDecoration: "none", color: "#212536"}}>Xuất khẩu</Link></li>
                            <li><Link to="#" style={{textDecoration: "none", color: "#212536"}}>Kinh doanh sỉ</Link></li>
                            <li><Link to="#" style={{textDecoration: "none", color: "#212536"}}>Kiểm định kim cương</Link></li>
                            <li><Link to="#" style={{textDecoration: "none", color: "#212536"}}>Kinh doanh vàng miếng</Link></li>
                        </ul>
                    </div>
                    <div className={"col-sm-12 col-md-5 col-lg-3 " + styles.column}>
                        <h4>Dịch vụ khách hàng</h4>
                        <ul className="list-unstyled">
                            <li><Link to="#" style={{textDecoration: "none", color: "#212536"}}>Hướng dẫn đo size trang sức</Link></li>
                            <li><Link to="#" style={{textDecoration: "none", color: "#212536"}}>Mua hàng trả góp</Link></li>
                            <li><Link to="#" style={{textDecoration: "none", color: "#212536"}}>Hướng dẫn mua hàng và thanh toán</Link></li>
                            <li><Link to="#" style={{textDecoration: "none", color: "#212536"}}>Chính sách hoàn tiền</Link></li>
                            <li><Link to="#" style={{textDecoration: "none", color: "#212536"}}>Chính sách giao hàng</Link></li>
                            <li><Link to="#" style={{textDecoration: "none", color: "#212536"}}>Cẩm nang sử dụng trang sức</Link></li>
                            
                        </ul>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <div className={"col-md-6 col-sm-6 m-0 " + styles.column}>
                        <h4 className="text-center">Phương thức thanh toán</h4>
                        <ul className="list-unstyled">
                            <div className={styles.img + " d-flex flex-wrap justify-content-center"}>
                                <Link to="#" className="mb-4 mr-1 ms-1">
                                    <img
                                        src={require('../../assets/images/visaimg.png')}
                                        alt="Visa"
                                        className={styles.socialMedia}/>
                                </Link>
                                <Link to="#" className="mb-4 mr-1 ms-1">
                                    <img
                                        src={require('../../assets/images/jcbimg.png')}
                                        alt="jcb"
                                        className={styles.socialMedia}/>
                                </Link>
                                <Link to="#" className="mb-4 mr-1 ms-1">
                                    <img
                                        src={require('../../assets/images/mastercardimg.png')}
                                        alt="mastercard"
                                        className={styles.socialMedia}/>
                                </Link>
                                <Link to="#" className="mb-4 mr-1 ms-1">
                                    <img
                                        src={require('../../assets/images/cashimg.png')}
                                        alt="cash"
                                        className={styles.socialMedia}/>   
                                </Link>
                            </div>
                        </ul>
                    </div>
                    <div className={"col-md-6 col-sm-6 m-0 " + styles.column}>
                        <h4 className="text-center">Kết nối với chúng tôi</h4>
                        <ul className="list-unstyled">
                            <div className={styles.img + " d-flex flex-wrap justify-content-center"}>
                                <Link to="#" className="mb-4 mr-1 ms-1">
                                    <img
                                        src={require('../../assets/images/fbimg.png')}
                                        alt="Facebook"
                                        className={styles.socialMedia}/>
                                </Link>
                            
                                <Link to="#" className="mb-4 mr-1 ms-1">
                                    <img
                                        src={require('../../assets/images/instaimg.png')}
                                        alt="Instagram"
                                        className={styles.socialMedia}/>
                                </Link>
                                
                                <Link to="#" className="mb-4 mr-1 ms-1"> 
                                    <img
                                        src={require('../../assets/images/Twitterimg.png')}
                                        alt="Twitter"
                                        className={styles.socialMedia}/>
                                </Link>

                                <Link to="#" className="mb-4 mr-1 ms-1">
                                    <img
                                        src={require('../../assets/images/mailimg.png')}
                                        alt="Mailing"
                                        className={styles.socialMedia}/>   
                                </Link>
                            </div>
                        </ul>
                    </div>
                </div>
           </div>
        </div>
    );
}

export default Footer;