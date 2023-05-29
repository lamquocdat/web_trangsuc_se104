import { useState } from "react";
import styles from "./viewPayment.module.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
const ViewPayment = ({ inputs }) => {
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const navigateToConfirmationForm = () => {
    // 👇️ navigate to /contacts
    navigate("/ConfirmationNotification");
  };
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
            <img
              src="https://static.mservice.io/img/momo-upload-api-220530104935-637895045756411980.jpg"
              alt=""
              className={styles.img}
            />
          </div>
          <div className={styles.right}>
            <form>
              <div class={styles.formInput}>
                <div className="row my-2">
                  <div className="col text-end">
                    <label style={{ fontSize: "16px", fontWeight: "500" }}>
                      Mã TT: p01
                    </label>
                  </div>
                </div>
              </div>

              <div class={styles.formInput}>
                <div className="row my-2">
                  <div className="col text-end">
                    <label style={{ fontSize: "16px", fontWeight: "500" }}>
                      Mã KH:
                    </label>
                  </div>
                </div>
              </div>
              <div class={styles.formInput}>
                <div className="row my-2">
                  <div className="col text-end">
                    <label style={{ fontSize: "16px", fontWeight: "500" }}>
                      Tên KH:
                    </label>
                  </div>
                </div>
              </div>
              <div class={styles.formInput}>
                <div className="row my-2">
                  <div className="col text-end">
                    <label style={{ fontSize: "16px", fontWeight: "500" }}>
                      Ngày TT:
                    </label>
                  </div>
                </div>
              </div>
              <div class={styles.formInput}>
                <div className="row my-2">
                  <div className="col text-end">
                    <label style={{ fontSize: "16px", fontWeight: "500" }}>
                      Hình thức TT:
                    </label>
                  </div>
                </div>
              </div>

              <div class={styles.formInput}>
                <div className="row my-2">
                  <div className="col text-end">
                    <label style={{ fontSize: "16px", fontWeight: "500" }}>
                      Tổng số tiền:
                    </label>
                  </div>
                </div>
              </div>
            </form>
            <Button
              variant="primary"
              onClick={navigateToConfirmationForm}
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
