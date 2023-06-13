import { useState, useEffect } from "react";
import styles from "./viewPayment.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
const ViewPayment = ({ inputs }) => {
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const navigateToConfirmationForm = () => {
    // 👇️ navigate to /contacts
    navigate("/ConfirmationNotification");
  };

  const { id } = useParams(); //lấy id từ url
  console.log(id);
  const [payments, setPayments] = useState(); //lấy sản phẩm từ api

  //lấy thông tin sản phẩm
  useEffect(() => {
    axios
      .get(`https://dialuxury.onrender.com/order/${id}`)
      .then((response) => {
        setPayments(response.data);
        console.log("Sản phẩm");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className={styles.new}>
      <div className={styles.newContainer}>
        <div>
          <h3>
            <b>Xác Nhận Thanh Toán</b>
          </h3>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <img src={payments?.hinhanh} alt="" className={styles.img} />
          </div>
          <div className={styles.right}>
            <form>
              <div class={styles.formInput}>
                <div className="row my-2">
                  <div className="col text-end">
                    <label style={{ fontSize: "17px", fontWeight: "500" }}>
                      Mã HĐ: <span>{payments?.mahd}</span>
                    </label>
                  </div>
                </div>
              </div>

              <div class={styles.formInput}>
                <div className="row my-2">
                  <div className="col text-end">
                    <label style={{ fontSize: "17px", fontWeight: "500" }}>
                      Mã KH: <span>{payments?.userId}</span>
                    </label>
                  </div>
                </div>
              </div>
              {/* <div class={styles.formInput}>
                <div className="row my-2">
                  <div className="col text-end">
                    <label style={{ fontSize: "17px", fontWeight: "500" }}>
                      Tên KH:
                    </label>
                  </div>
                </div>
              </div> */}
              <div class={styles.formInput}>
                <div className="row my-2">
                  <div className="col text-end">
                    <label style={{ fontSize: "17px", fontWeight: "500" }}>
                      Ngày TT:<span>{payments?.ngaylap}</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class={styles.formInput}>
                <div className="row my-2">
                  <div className="col text-end">
                    <label style={{ fontSize: "17px", fontWeight: "500" }}>
                      Hình thức TT: <span>{payments?.hinhthucthanhtoan}</span>
                    </label>
                  </div>
                </div>
              </div>

              <div class={styles.formInput}>
                <div className="row my-2">
                  <div className="col text-end">
                    <label
                      style={{
                        fontSize: "17px",
                        fontWeight: "500",
                      }}
                    >
                      Tổng số tiền: <span>{payments?.tongtien}</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class={styles.formInput}>
                <div className="row my-2">
                  <div className="col text-end">
                    <label
                      style={{
                        fontSize: "17px",
                        fontWeight: "500",
                      }}
                    ></label>
                  </div>
                </div>
              </div>
            </form>
            <Button
              variant="primary"
              onClick={() => {
                navigate(`/order/detail/${payments?._id}`);
              }}
              style={{ float: "right", margin: "30px" }}
            >
              Xác Nhận
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPayment;
