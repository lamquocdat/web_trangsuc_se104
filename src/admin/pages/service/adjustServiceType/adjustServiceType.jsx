//import { useState } from "react";
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import styles from './adjustServiceType.module.css';
import { useNavigate } from 'react-router-dom';
const AdjustServiceType = () => {
  const { svt_id } = useParams();
  const [svt_name, setSvt_name] = useState('');
  const [svt_price, setSvt_price] = useState('');
  const navigate = useNavigate();
  const navigateToServicePage = () => {
    // 👇️ navigate to /contacts
    navigate('/service');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!svt_name || !svt_price)
      toast.error('Xin hãy điền đầy đủ thông tin dịch vụ');
    else {
      const response = await axios.put(
        `http://localhost:3001/serviceType/svtid/${svt_id}`,
        {
          svt_name,
          svt_price,
        }
      );
      if (response.data === 'existedNAME') {
        toast.error(<b>Tên dịch vụ đã tồn tại</b>);
        setSvt_name('');
      } else navigateToServicePage();
    }
  };

  // Gửi yêu cầu PUT đến API để sửa phiếu mua hàng

  return (
    <div className={styles.new} style={{ width: '1300px' }}>
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className={styles.newContainer}>
        <div className={styles.top}>
          <h1>
            <b>Chỉnh Sửa Loại Dịch Vụ </b>
          </h1>
        </div>
        <div className={styles.bottom}>
          <div className={styles.right}>
            <form>
              <div class={styles.formInput}>
                <label>Tên Loại Dịch Vụ</label>
                <input
                  value={svt_name}
                  onChange={(e) => setSvt_name(e.target.value)}
                  type="text"
                  placeholder="Mài Vàng"
                />
              </div>

              <div class={styles.formInput}>
                <label>Giá</label>
                <input
                  value={svt_price}
                  onChange={(e) => setSvt_price(e.target.value)}
                  type="number"
                  placeholder="VD: 50000 VNĐ"
                />
              </div>
            </form>
            <div className={styles.buttonUpdate}>
              <button onClick={handleSubmit} className={styles.myButton}>
                Cập Nhật
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdjustServiceType;
