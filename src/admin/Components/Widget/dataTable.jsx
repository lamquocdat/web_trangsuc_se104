import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Container, Row, Col, Card} from "react-bootstrap";
import styles from './dataTable.module.css'

function DataTable({ products }) {
  const amount = 100;
  const visibleProducts = products;

  return (
      <Container fluid>
        <Row className="mx-4 mt-5">
          {visibleProducts.map((product) => (
            <Col key={product.id} sm={6} md={4} lg={3}>
              <Card style={{ background: "#f7f7f7", marginBottom: "30px"}}>
                <Card.Body className={styles.widget} >
                <div className={styles.left}>
                  <span className={styles.title}>
                    <Card.Title >{product.title}</Card.Title>
                  </span>
                  <span className={styles.counter}>
                    <Card.Text style={{color:"green", fontWeight:"bold", fontSize:"23px"}}>{product.isMoney && "$"} {amount}</Card.Text>
                  </span>
                  <span className={styles.link}>
                    <Card.Link href="#" style={{color:"grey", textDecorationLine:"none"}}>{product.link}</Card.Link>
                  </span>
                </div>
                <div className={styles.right}>
                  <div className={styles.percentage}>
                  </div>
                  <div className={styles.icon} style={{fontSize:"18px", padding:"5px",borderRadius:"5px", alignSelf:"flex-end"}}>{product.icon}</div>
                </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
  );
}

export default DataTable;
