import Container from "react-bootstrap/Container";
import Table from "../../Components/Table";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Hoadon.module.css"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useEffect, useState } from "react";
function Hoadon () {
  const [list, setList] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:3001/order/tinhtrang/done")
      .then((response) => {
        setList(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
      <Container fluid>
        <div className={"border-l-3 py-4"}>
          <Table rows={list}/>
        </div>
      </Container>
  );
}

export default Hoadon;