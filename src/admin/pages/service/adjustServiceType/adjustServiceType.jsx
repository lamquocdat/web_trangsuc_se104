

//import { useState } from "react";
import React, { useState, useParams  } from "react";
import axios from "axios";
import styles from './adjustServiceType.module.css'
import {useNavigate} from 'react-router-dom';
const AdjustServiceType = ({ inputs}) => {
  const [svt_id, setSvt_id] = useState("");
  const [svt_name, setSvt_name] = useState("");
  const [svt_price, setSvt_price] = useState("");
  const navigate = useNavigate();
  const navigateToServicePage = () => {
    // 👇️ navigate to /contacts
    navigate('/service');
  };



  const handleSubmit = (event) => {
    event.preventDefault();

    // Gửi yêu cầu PUT đến API để sửa phiếu mua hàng
    axios
      .put(`http://localhost:3001/serviceType/svtid/${svt_id}`, {
        svt_id,
        svt_name,
        svt_price,
        
      })
      .then((response) => {
        console.log("Sửa thành công:", response.data);
        // Xử lý kết quả thành công tại đây
      })
      .catch((error) => {
        console.error("Lỗi:", error);
        // Xử lý lỗi tại đây
      });
      navigateToServicePage()
  };
  return (
   
      <div className={styles.new} style={{width: "1300px"}}>

      <div className={styles.newContainer}>
       
        <div className={styles.top}>
          <h1><b>Chỉnh Sửa Loại Dịch Vụ </b></h1>
        </div>
        <div className={styles.bottom}>
          
          <div className={styles.right}>
            <form>
         
              <div class={styles.formInput}><label>Mã Loại Dịch Vụ</label>
              <input value={svt_id}
                onChange={(e) => setSvt_id(e.target.value)} type="text" placeholder="svt01"/>
              </div>

              <div class={styles.formInput}><label>Tên Loại Dịch Vụ</label>
              <input value={svt_name}
                onChange={(e) => setSvt_name(e.target.value)} type="text" placeholder="Mài Vàng"/>
              </div>

              <div class={styles.formInput}><label>Giá</label>
              <input value={svt_price}
                onChange={(e) => setSvt_price(e.target.value)} type="number" placeholder="VD: 50000 VNĐ"/>
              </div>

              
              
            </form>
            <div className={styles.buttonUpdate}>
            <button onClick={handleSubmit} className={styles.myButton}>Cập Nhật</button>
            </div>
          </div>
          
        </div>
        
      </div>
      </div>
  );
};

export default AdjustServiceType;
