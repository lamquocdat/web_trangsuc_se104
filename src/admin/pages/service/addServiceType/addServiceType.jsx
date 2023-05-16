

import styles from './addServiceType.module.css'
const AddServiceType = ({ inputs}) => {



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
              <input type="text" placeholder="VD: svt01"/>
              </div>

              <div class={styles.formInput}><label>Tên Loại Dịch Vụ</label>
              <input type="text" placeholder="VD: Mài Nữ Trang"/>
              </div>

              <div class={styles.formInput}><label>Giá</label>
              <input type="number" placeholder="VD: 50000 VNĐ"/>
              </div>

              

            </form>
            <div className={styles.buttonUpdate}>
            <button className={styles.myButton}>Thêm</button>
            </div>
          </div>
          
        </div>
        
      </div>
      </div>
  )
      
};

export default AddServiceType;
