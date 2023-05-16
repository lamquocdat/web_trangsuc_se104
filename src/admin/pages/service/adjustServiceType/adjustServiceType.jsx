

//import { useState } from "react";
import styles from './adjustServiceType.module.css'
const AdjustServiceType = ({ inputs}) => {


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
              <input type="text" placeholder="svt01"/>
              </div>

              <div class={styles.formInput}><label>Tên Loại Dịch Vụ</label>
              <input type="text" placeholder="Mài Vàng"/>
              </div>

              <div class={styles.formInput}><label>Giá</label>
              <input type="number" placeholder="VD: 50000 VNĐ"/>
              </div>

              
              
            </form>
            <div className={styles.buttonUpdate}>
            <button className={styles.myButton}>Cập Nhật</button>
            </div>
          </div>
          
        </div>
        
      </div>
      </div>
  );
};

export default AdjustServiceType;
