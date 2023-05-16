

import { useState } from "react";
import styles from './addService.module.css'
const AddService = ({ inputs}) => {
  const [serviceList, setServiceList] = useState([{ service: "" }]);



  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };


  return (
   
      <div className={styles.new}  style={{width:"1300px"}}>

      <div className={styles.newContainer}>
       
        <div className={styles.top}>
          <h1 style={{fontSize:"25px"}}><b>Thêm Phiếu Dịch Vụ </b></h1>
        </div>
        <div className={styles.bottom}>
          
          <div className={styles.right}>
            <form>
              
              <div class={styles.formInput}><label>Mã Dịch Vụ</label>
              <input type="text" placeholder="VD: si01"/>
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

            </form>
            <div className={styles.buttonAdd}>
            <button className={styles.myButton}>Thêm Phiếu</button>
            </div>
          </div>
          
        </div>
        
      </div>
      {serviceList.map((singleService, index) => (
          <div key={index} className="services">
            <div className="first-division">
            <div className={styles.newContainer}>
       
       <div className={styles.top}>
         <h1 ><b>Thêm Loại Dịch Vụ {index+1} </b></h1>
       </div>
       <div className={styles.bottom}>
         
         <div className={styles.right}>
           
           <form>
             
             <div class={styles.formInput}><label>Mã Loại Dịch Vụ</label>
             <input type="text" placeholder="VD: st01"/>
             </div>

             <div class={styles.formInput}><label>Tên Loại Dịch Vụ</label>
             <input type="text" placeholder="VD: Gia Công Nữ Trang"/>
             </div>

             <div class={styles.formInput}><label>Giá Tiền</label>
             <input type="text" placeholder="VD: 50000 VNĐ"/>
             </div>

           </form>
           <div className={styles.buttonUpdate}>
           {/* <button className={styles.myButton}>Thêm</button> */}
           {serviceList.length - 1 === index && serviceList.length < 5 && (
                <button
                  type="button"
                  onClick={handleServiceAdd}
                  className={styles.myButtonAdd}
                >
                  Thêm
                </button>
              )}
              {serviceList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleServiceRemove(index)}
                  className={styles.myButtonDelete}
                >
                  Xoá
                </button>
              )}
           </div>
         </div>
         
       </div>
       
     </div>
              
            </div>
            
          </div>
        ))}
     
      </div>
  );
};

export default AddService;
