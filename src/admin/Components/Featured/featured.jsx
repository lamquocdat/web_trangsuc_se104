import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./featured.module.css"
function Featured() {
  // {styles.}
  return (
    <Container fluid className={styles.featured} >
      <Row>
        <Col>
          <div className={styles.top}>
            <h1 className={styles.title}>Total Revenue</h1>
            <MoreVertIcon fontSize="small" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={styles.bottom}>
            <div className={styles.featuredChart}>
              <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
            </div>
            <p className={styles.title}>Total sales made today</p>
            <p className={styles.amount}>$420</p>
            <p className={styles.desc}>
              Previous transactions processing. Last payments may not be
              included.
            </p>
            <div className={styles.summary}>
              <div className={styles.item}>
                <div className={styles.itemTitle}>Target</div>
                <div className={"itemResult negative " + styles.itemResult}>
                  <KeyboardArrowDownIcon fontSize="small" />
                  <div className={styles.resultAmount}>$12.4k</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.itemTitle}>Last Week</div>
                <div className={"itemResult positive " + styles.itemResult}>
                  <KeyboardArrowUpOutlinedIcon fontSize="small" />
                  <div className={styles.resultAmount}>$12.4k</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.itemTitle}>Last Month</div>
                <div className={"itemResult positive " + styles.itemResult}>
                  <KeyboardArrowUpOutlinedIcon fontSize="small" />
                  <div className={styles.resultAmount}>$12.4k</div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      
      </Row>

    </Container>
  );
}

export default Featured;
