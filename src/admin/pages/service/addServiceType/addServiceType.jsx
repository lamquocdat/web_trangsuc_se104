import React, { useState } from 'react';
import axios from 'axios';
import styles from './addServiceType.module.css';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
const AddServiceType = ({ inputs }) => {
  const [svt_id, setSvt_id] = useState('');
  const [svt_name, setSvt_name] = useState('');
  const [svt_price, setSvt_price] = useState('');

  const navigate = useNavigate();
  const navigateToServicePage = () => {
    // 👇️ navigate to /contacts
    navigate('/service');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!svt_id || !svt_name || !svt_price)
      toast.error('Xin hãy điền đầy đủ thông tin dịch vụ');
    else {
      try {
        const response = await axios.post('https://dialuxury.onrender.com/serviceType', {
          svt_id,
          svt_name,
          svt_price,
        });
        if (response.data === 'existedID') {
          toast.error(<b>Mã dịch vụ đã tồn tại</b>);
          setSvt_id('');
        }
        if (response.data === 'existedNAME') {
          toast.error(<b>Tên dịch vụ đã tồn tại</b>);
          setSvt_name('');
        }
        if (response.data === 'OK') {
          console.log(response.data);
          setSvt_id('');
          setSvt_name('');

          setSvt_price('');
          navigateToServicePage();
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <div className={styles.new} style={{ width: '1300px' }}>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className={styles.newContainer}>
        <div className={styles.top}>
          <h1 style={{ fontSize: '25px' }}>
            <b>Thêm Loại Dịch Vụ </b>
          </h1>
        </div>
        <div className={styles.bottom}>
          <div className={styles.right}>
            <form>
              <div class={styles.formInput}>
                <label>Mã Loại Vụ</label>
                <input
                  type="text"
                  value={svt_id}
                  onChange={(e) => setSvt_id(e.target.value)}
                  placeholder="VD: svt01"
                />
              </div>

              <div class={styles.formInput}>
                <label>Tên Loại Dịch Vụ</label>
                <input
                  type="text"
                  value={svt_name}
                  onChange={(e) => setSvt_name(e.target.value)}
                  placeholder="VD: Mài Nữ Trang"
                />
              </div>

              <div class={styles.formInput}>
                <label>Giá</label>
                <input
                  type="number"
                  value={svt_price}
                  onChange={(e) => setSvt_price(e.target.value)}
                  placeholder="VD: 50000 VNĐ"
                />
              </div>
            </form>
            <div className={styles.buttonUpdate}>
              <button
                type="submit"
                onClick={handleSubmit}
                className={styles.myButton}
              >
                Thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddServiceType;
