
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import styles from './adjustService.module.css'
const AdjustService = ({ inputs}) => {
  const [file, setFile] = useState("");

  return (
   
      <div className={styles.new}>

      <div className={styles.newContainer}>
       
        <div className={styles.top}>
          <h1><b>Chỉnh Sửa Phiếu Dịch Vụ</b></h1>
        </div>
        <div className={styles.bottom}>
          
          <div className={styles.right}>
            <form>
            
              <div class={styles.formInput}><label>Số phiếu</label>
              <input type="text" placeholder="VD: 5"/>
              </div>

              <div class={styles.formInput}><label>Ngày lập</label>
              <input type="text" placeholder="dd/mm/yyyy"/>
              </div>

              <div class={styles.formInput}><label>Khách hàng</label>
              <input type="text" placeholder="u01"/>
              </div>
              <div class={styles.formInput}><label>Trả Trước</label>
              <input type="text" placeholder="VNĐ"/>
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

export default AdjustService;
