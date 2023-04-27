import Container from "react-bootstrap/Container";
import Table from "../../Components/Table";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Hoadon.module.css"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function Hoadon () {
    const list = [
        {
          id: 1143155,
          date: "1 March",
          customer: "John Smith",
          img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
          product: "Acer Nitro 5",
          producttype: "Laptop",
          SL: 1,
          DV: "Chiếc",
          cost: "20.000.000 vnđ",
          total: "20.000.000 vnđ",
        },
        {
          id: 2235235,
          date: "1 March",
          customer: "Michael Doe",
          img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
          product: "Playstation 5",
          producttype: "Laptop",
          SL: 1,
          DV: "Chiếc",
          cost: "20.000.000 vnđ",
          total: "20.000.000 vnđ",
        },
        {
          id: 2342353,
          customer: "John Smith",
          date: "1 March",
          product: "Redragon S101",
          img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
          producttype: "Laptop",
          SL: 1,
          DV: "Chiếc",
          cost: "20.000.000 vnđ",
          total: "20.000.000 vnđ",
        },
        {
          id: 2357741,
          customer: "Jane Smith",
          date: "1 March",
          product: "Razer Blade 15",
          img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
          producttype: "Laptop",
          SL: 1,
          DV: "Chiếc",
          cost: "20.000.000 vnđ",
          total: "20.000.000 vnđ",
        },
        {
          id: 2342355,
          customer: "Harold Carol",
          date: "1 March",
          product: "ASUS ROG Strix",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          producttype: "Laptop",
          SL: 1,
          DV: "Chiếc",
          cost: "20.000.000 vnđ",
          total: "20.000.000 vnđ",
        },
    ];
    return (
        <Container fluid>
          <Form className={"d-flex justify-content-between mt-3 " + styles.form}>
            <div className={"d-flex"}>
              <Form.Control
                type="search"
                placeholder="Tìm kiếm"
                className={"me-2 " + styles.formcontrol}
                aria-label="Search"/>
              <Button variant="secondary" className={styles.button}><SearchIcon /></Button>
            </div>
            <Button variant="success">Thêm mới</Button>{' '}
          </Form>
          <div className={"border-l-3 py-4"}><Table rows={list}/></div>
        </Container>
    );
}

export default Hoadon;