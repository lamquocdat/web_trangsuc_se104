import Container from "react-bootstrap/Container";
import Table from "../../Components/Table";

import axios from "axios";
import { useEffect, useState } from "react";
function Hoadon () {
  const [list, setList] = useState([]);
  
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/order/tinhtrang/Đã%20giao%20hàng`)
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