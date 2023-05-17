import React, { useState } from "react";
import axios from "axios";
import styles from './addServiceType.module.css'
import {useNavigate} from 'react-router-dom';
const AddServiceType = ({ inputs}) => {
  const [svt_id, setSvt_id] = useState("");
  const [svt_name, setSvt_name] = useState("");
  const [svt_price, setSvt_price] = useState("");

  const navigate = useNavigate();
  const navigateToServicePage = () => {
    // 👇️ navigate to /contacts
    navigate('/service');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/serviceType", {
        svt_id,
        svt_name,
        svt_price,

      });
      console.log(response.data);
      setSvt_id("");
      setSvt_name("");

      setSvt_price("");

    } catch (error) {
      console.error(error);
    }
    navigateToServicePage()
  };
  return (
   
      <div className={styles.new}  style={{width:"1300px"}}>

      <div className={styles.newContainer}>
       
        <div className={styles.top}>
          <h1 style={{fontSize:"25px"}}><b>Thêm Loại Dịch Vụ </b></h1>
        </div>
        <div className={styles.bottom}>
          
          <div className={styles.right}>
            <form>
              
              <div class={styles.formInput}><label>Mã Loại Vụ</label>
              <input type="text" value={svt_id}
                onChange={(e) => setSvt_id(e.target.value)} placeholder="VD: svt01"/>
              </div>

              <div class={styles.formInput}><label>Tên Loại Dịch Vụ</label>
              <input type="text" value={svt_name}
                onChange={(e) => setSvt_name(e.target.value)} placeholder="VD: Mài Nữ Trang"/>
              </div>

              <div class={styles.formInput}><label>Giá</label>
              <input type="number" value={svt_price}
                onChange={(e) => setSvt_price(e.target.value)} placeholder="VD: 50000 VNĐ"/>
              </div>

              

            </form>
            <div className={styles.buttonUpdate}>
            <button type="submit" onClick={handleSubmit} className={styles.myButton}>Thêm</button>
            </div>
          </div>
          
        </div>
        
      </div>
      </div>
  )
      
};

export default AddServiceType;
