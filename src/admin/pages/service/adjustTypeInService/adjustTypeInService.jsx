
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import styles from './adjustTypeInService.module.css'
const AdjustTypeInService = ({ inputs}) => {
  const [file, setFile] = useState("");

  return (
   
      <div className={styles.new}>

      <div className={styles.newContainer}>
       
        <div className={styles.top}>
          <h1><b>Chỉnh Sửa Loại Dịch Vụ Trong Phiếu</b></h1>
        </div>
        <div className={styles.bottom}>
          
          <div className={styles.right}>
            <form>
         
              <div class={styles.formInput}><label>Mã Loại Dịch Vụ</label>
              <input type="text" placeholder="si01"/>
              </div>

              <div class={styles.formInput}><label>Tên Loại Dịch Vụ</label>
              <input type="text" placeholder="Cân Thử Vàng"/>
              </div>

              <div class={styles.formInput}><label>Số Lượng</label>
              <input type="text" placeholder="VD: 5"/>
              </div>

              

        

              <div class={styles.formInput}><label>Trả Trước</label>
              <input type="text" placeholder="VNĐ"/>
              </div>

              <div class={styles.formInput}><label>Ngày Giao</label>
              <input type="text" placeholder="dd/mm/yyyy"/>
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

export default AdjustTypeInService;
