
import styles from "./home_admin.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Widget from "../../Components/Widget/widget";
import Featured from "../../Components/Featured/featured";
import Chart from "../../Components/Chart/chart";
// import TableHome from "../../Components/TableHome/tableHome";
function HomeAdmin() {
  return (
    <Container fluid>
      <div className={styles.homeContainer}>
        <div className={styles.widgets}>
          <Widget />
        </div>

        <div className={styles.center}>
          <Row>
            <Col sm={9}>
              <div
                className={styles.chart}
                style={{ fontSize: "16px", fontWeight: "500", color: "gray" }}
              >
                <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
              </div>
            </Col>
            <Col sm={3}>
              <div className={styles.featured}>
                {/* <Featured /> */}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default HomeAdmin;
