

import { useState } from "react";
import styles from './viewPayment.module.css'
import {useNavigate} from 'react-router-dom';
const ViewPayment = ({ inputs}) => {
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const navigateToConfirmationForm = () => {
    // 👇️ navigate to /contacts
    navigate('/ConfirmationNotification');
  };
  return (
   
      <div className={styles.new}>

      <div className={styles.newContainer}>
       
        <div className={styles.top}>
          <h1><b>Xác Nhận Thanh Toán</b></h1>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
          <img
                src="https://static.mservice.io/img/momo-upload-api-220530104935-637895045756411980.jpg"
                alt=""
                className={styles.img}
              />
          </div>
          <div className={styles.right}>
            <form>
         
              <div class={styles.formInput}>
              <div className="row my-2">
                <div className="col text-end">
                    <label>Mã xác nhận:</label> 
                </div>
                <div className="col">
                    <span><b>p01</b></span>
                </div>
            </div>
              </div>

              <div class={styles.formInput}>
              <div className="row my-2">
                <div className="col text-end">
                    <label>Mã khách hàng:</label> 
                </div>
                <div className="col">
                    <span><b>u01</b></span>
                </div>
            </div>
              </div>
              <div class={styles.formInput}>
              <div className="row my-2">
                <div className="col text-end">
                    <label>Tên khách hàng:</label> 
                </div>
                <div className="col">
                    <span><b>Nguyễn Văn A</b></span>
                </div>
            </div>
              </div>
              <div class={styles.formInput}>
              <div className="row my-2">
                <div className="col text-end">
                    <label>Số tài khoản:</label> 
                </div>
                <div className="col">
                    <span><b>0123456789</b></span>
                </div>
            </div>
              </div>
              <div class={styles.formInput}>
              <div className="row my-2">
                <div className="col text-end">
                    <label>Ví điện tử:</label> 
                </div>
                <div className="col">
                    <span><b>Momo</b></span>
                </div>
            </div>
              </div>

              <div class={styles.formInput}>
              <div className="row my-2">
                <div className="col text-end">
                    <label>Nội dung:</label>
                </div>
                <div className="col">
                    <span><b>Thanh toán đơn hàng mã c01.</b></span>
                </div>
            </div>
              </div>

              <div class={styles.formInput}>
              <div className="row my-2">
                <div className="col text-end">
                    <label>Ngày:</label>
                </div>
                <div className="col">
                    <span><b>10/4/2023</b></span>
                </div>
            </div>
              </div>

              <div class={styles.formInput}>
              <div className="row mt-2 mb-4">
                <div className="col text-end">
                    <label>Số tiền:</label>
                </div>
                <div className="col">
                    <span><b>350.000₫</b></span>
                </div>
            </div>  
              </div>

            </form>
            <div className={styles.buttonUpdate}>
            <button onClick={navigateToConfirmationForm} className={styles.myButton}>Xác Nhận</button>
            </div>
          </div>
          
        </div>
        
      </div>
      </div>
  );
};

export default ViewPayment;
