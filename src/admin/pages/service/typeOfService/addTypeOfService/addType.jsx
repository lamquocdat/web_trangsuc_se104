
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import styles from './addType.module.css'
const AddType = ({ inputs}) => {
  const [file, setFile] = useState("");

  return (
   
      <div className={styles.new}>

      <div className={styles.newContainer}>
       
        <div className={styles.top}>
          <h1><b>Thêm Loại Dịch Vụ </b></h1>
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

              <div class={styles.formInput}><label>Giá</label>
              <input type="text" placeholder="VNĐ"/>
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

export default AddType;
