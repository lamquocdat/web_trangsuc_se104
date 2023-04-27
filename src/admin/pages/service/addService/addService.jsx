

import { useState } from "react";
import styles from './addService.module.css'
const AddService = ({ inputs}) => {
  const [file, setFile] = useState("");

  return (
   
      <div className={styles.new}>

      <div className={styles.newContainer}>
       
        <div className={styles.top}>
          <h1><b>Thêm Phiếu Dịch Vụ </b></h1>
        </div>
        <div className={styles.bottom}>
          
          <div className={styles.right}>
            <form>
              
              <div class={styles.formInput}><label>Mã Dịch Vụ</label>
              <input type="text" placeholder="si01"/>
              </div>

              <div class={styles.formInput}><label>Tên Dịch Vụ</label>
              <input type="text" placeholder="VD: Dịch Vụ 3"/>
              </div>

              <div class={styles.formInput}><label>Số Lượng</label>
              <input type="text" placeholder="VD: 5"/>
              </div>

              <div class={styles.formInput}><label>Khách Hàng </label>
              <input type="text" placeholder="VD: u05"/>
              </div>

              <div class={styles.formInput}><label>Ngày Lập</label>
              <input type="text" placeholder="dd/mm/yyyy"/>
              </div>

           

              <div class={styles.formInput}><label>Trạng Thái</label>
              <input type="text" placeholder="active or unactive"/>
              </div>

              
             
              
            </form>
            <div className={styles.buttonUpdate}>
            <button className={styles.myButton}>Thêm</button>
            </div>
          </div>
          
        </div>
        
      </div>
      </div>
  );
};

export default AddService;
