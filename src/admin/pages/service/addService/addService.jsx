
import {useNavigate} from 'react-router-dom';
import React, { useState } from "react";
import axios from "axios";
import styles from './addService.module.css'
import { useFormik } from 'formik';
const AddService = ({ inputs}) => {
  //add 
  const [s_id, setS_id] = useState("");
  const [s_name, setS_name] = useState("");
  const [makh, setMaKH] = useState("");
  const [s_number, setS_number] = useState("");
  const [s_date, setS_date] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [price, setPrice] = useState("");
  const [total, setTotal] = useState("");
  const [payFirst, setPayFirst] = useState("");
  const [payLeft, setPayLeft] = useState("");
  const [ngaygiao, setNgaygiao] = useState("");

  const navigate = useNavigate();
  const navigateToServicePage = () => {
    // 👇️ navigate to /contacts
    navigate('/service');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/service", {
        s_id,
        s_name,
        s_number,
        makh,
        s_date,
        name,
        number,
        price,
        total,
        payFirst,
        payLeft,
        ngaygiao,
      });
      console.log(response.data);
      setS_id("");
      setS_name("");
      setMaKH("")
      setS_number("");
      setS_date("");
      setName("");
      setNumber("");
      setPrice("");
      setTotal("");
      setPayFirst("");
      setPayLeft("");
      setNgaygiao("");

    } catch (error) {
      console.error(error);
    }
    navigateToServicePage()
  };
  const initialValues = {
    
  }
  const formik = useFormik({
    initialValues: {
      s_id: " ",
    s_name: " ",
    makh: " ",
    s_number: " ",
    s_date: " ",
    serviceTypes: {
      name: "rửa dây chuyền",
      number: 1,
      price: 1,
      total: 1,
      payFirst: 1,
      payLeft: 1,
      ngaygiao: "26/4/2023",
    },
    
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      const response = axios.post("http://localhost:3001/service", {
        values
      });
      console.log("form data:", values)
    },
  });


// create forms
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
           <form onSubmit={formik.handleSubmit}>
             
             <div class={styles.formInput}><label>Mã Dịch Vụ</label>
             <input id="s_id"
         name="s_id" onChange={formik.handleChange}
         value={formik.values.s_id} type="text" placeholder="VD: si01"/>
    
             </div>

             <div class={styles.formInput}><label>Tên Dịch Vụ</label>
             <input id="s_name"
         name="s_name" onChange={formik.handleChange}
         value={formik.values.s_name} type="text" placeholder="VD: Dịch Vụ 3"/>
             </div>

             <div class={styles.formInput}><label>Số Lượng</label>
             <input id="s_number"
         name="s_number" onChange={formik.handleChange}
         value={formik.values.s_number} type="number" placeholder="VD: 5"/>
             </div>

             <div class={styles.formInput}><label>Khách Hàng </label>
             <input id="makh"
         name="makh" onChange={formik.handleChange}
         value={formik.values.makh} type="text" placeholder="VD: u05"/>
             </div>

             <div class={styles.formInput}><label>Ngày Lập</label>
             <input id="s_date"
         name="s_date" onChange={formik.handleChange}
         value={formik.values.s_date} type="date" placeholder="dd/mm/yyyy"/>
             </div>
             <div className={styles.buttonAdd}>
           <button type='submit' className={styles.myButton}>Thêm Phiếu</button>
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
            
          

            <div class={styles.formInput}><label>Tên Loại Dịch Vụ</label>
            <input id="name"
         name="serviceTypes.name" onChange={formik.handleChange}
         value={formik.values.serviceTypes.name}  type="text" placeholder="VD: Gia Công Nữ Trang"/>
            </div>

            <div class={styles.formInput}><label>Giá Tiền</label>
            <input id="price"
         name="serviceTypes.price" onChange={formik.handleChange}
         value={formik.values.serviceTypes.price}  type="number" placeholder="VD: 50000 VNĐ"/>
            </div>
            <div class={styles.formInput}><label>Số Lượng</label>
            <input id="number"
         name="serviceTypes.number" onChange={formik.handleChange}
         value={formik.values.serviceTypes.number}  type="number" placeholder="VD: 1"/>
            </div>
            <div class={styles.formInput}><label>Trả Trước</label>
            <input id="payFirst"
         name="serviceTypes.payFirst" onChange={formik.handleChange}
         value={formik.values.serviceTypes.payFirst}   type="text" placeholder="VD: 50000 VNĐ"/>
            </div>

            <div class={styles.formInput}><label>Còn Lại</label>
            <input id="payLeft"
         name="serviceTypes.payLeft" onChange={formik.handleChange}
         value={formik.values.serviceTypes.payLeft}  type="text" placeholder=""/>
            </div>
            <div class={styles.formInput}><label>Ngày Giao</label>
            <input id="ngaygiao"
         name="serviceTypes.ngaygiao" onChange={formik.handleChange}
         value={formik.values.serviceTypes.ngaygiao}  type="date" placeholder=""/>
            </div>
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

          </form>
          
        </div>
        
      </div>
      
    </div>
             
           </div>
           
         </div>
       ))}
           </form>
           
         </div>
         
       </div>
       
     </div>
     
      </div>


    /////////////////////////
   
    //   <div className={styles.new}  style={{width:"1300px"}}>

    //   <div className={styles.newContainer}>
       
    //     <div className={styles.top}>
    //       <h1 style={{fontSize:"25px"}}><b>Thêm Phiếu Dịch Vụ </b></h1>
    //     </div>
    //     <div className={styles.bottom}>
          
    //       <div className={styles.right}>
    //         <form>
              
    //           <div class={styles.formInput}><label>Mã Dịch Vụ</label>
    //           <input value={s_id}
    //             onChange={(e) => setS_id(e.target.value)} type="text" placeholder="VD: si01"/>
     
    //           </div>

    //           <div class={styles.formInput}><label>Tên Dịch Vụ</label>
    //           <input value={s_name}
    //             onChange={(e) => setS_name(e.target.value)} type="text" placeholder="VD: Dịch Vụ 3"/>
    //           </div>

    //           <div class={styles.formInput}><label>Số Lượng</label>
    //           <input value={s_number}
    //             onChange={(e) => setS_number(e.target.value)} type="number" placeholder="VD: 5"/>
    //           </div>

    //           <div class={styles.formInput}><label>Khách Hàng </label>
    //           <input value={makh}
    //             onChange={(e) => setMaKH(e.target.value)} type="text" placeholder="VD: u05"/>
    //           </div>

    //           <div class={styles.formInput}><label>Ngày Lập</label>
    //           <input value={s_date}
    //             onChange={(e) => setS_date(e.target.value)} type="text" placeholder="dd/mm/yyyy"/>
    //           </div>

    //         </form>
    //         <div className={styles.buttonAdd}>
    //         <button onClick={handleSubmit} className={styles.myButton}>Thêm Phiếu</button>
    //         </div>
    //       </div>
          
    //     </div>
        
    //   </div>
    //   {serviceList.map((singleService, index) => (
    //       <div key={index} className="services">
    //         <div className="first-division">
    //         <div className={styles.newContainer}>
       
    //    <div className={styles.top}>
    //      <h1 ><b>Thêm Loại Dịch Vụ {index+1} </b></h1>
    //    </div>
    //    <div className={styles.bottom}>
         
    //      <div className={styles.right}>
           
    //        <form>
             
           

    //          <div class={styles.formInput}><label>Tên Loại Dịch Vụ</label>
    //          <input value={name}
    //             onChange={(e) => setName(e.target.value)}  type="text" placeholder="VD: Gia Công Nữ Trang"/>
    //          </div>

    //          <div class={styles.formInput}><label>Giá Tiền</label>
    //          <input value={price}
    //             onChange={(e) => setPrice(e.target.value)}  type="text" placeholder="VD: 50000 VNĐ"/>
    //          </div>
    //          <div class={styles.formInput}><label>Số Lượng</label>
    //          <input value={number}
    //             onChange={(e) => setNumber(e.target.value)}  type="number" placeholder="VD: 1"/>
    //          </div>
    //          <div class={styles.formInput}><label>Trả Trước</label>
    //          <input value={payFirst}
    //             onChange={(e) => setPayFirst(e.target.value)}   type="text" placeholder="VD: 50000 VNĐ"/>
    //          </div>

    //          <div class={styles.formInput}><label>Còn Lại</label>
    //          <input value={payLeft}
    //             onChange={(e) => setPayLeft(e.target.value)}  type="text" placeholder=""/>
    //          </div>
    //          <div class={styles.formInput}><label>Ngày Giao</label>
    //          <input value={ngaygiao}
    //             onChange={(e) => setNgaygiao(e.target.value)}  type="text" placeholder=""/>
    //          </div>
             

    //        </form>
    //        <div className={styles.buttonUpdate}>
    //        {/* <button className={styles.myButton}>Thêm</button> */}
    //        {serviceList.length - 1 === index && serviceList.length < 5 && (
    //             <button
    //               type="button"
    //               onClick={handleServiceAdd}
    //               className={styles.myButtonAdd}
    //             >
    //               Thêm
    //             </button>
    //           )}
    //           {serviceList.length !== 1 && (
    //             <button
    //               type="button"
    //               onClick={() => handleServiceRemove(index)}
    //               className={styles.myButtonDelete}
    //             >
    //               Xoá
    //             </button>
    //           )}
    //        </div>
    //      </div>
         
    //    </div>
       
    //  </div>
              
    //         </div>
            
    //       </div>
    //</div>
    //     ))}


     
  );
};

export default AddService;
