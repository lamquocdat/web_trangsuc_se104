import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./table.module.css";
import { Image } from "react-bootstrap";
import  toast, { Toaster } from 'react-hot-toast';

function ProductsPage() {
  //Hiển thị dữ liệu các sản phẩm:
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/product`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let navigate = useNavigate();

  //Xoá sản phẩm:

  // const handleEditClick = ({ id }) => {
  //   // Gọi API để lấy thông tin sản phẩm
  //   axios
  //     .get(`${process.env.REACT_APP_BACKEND_URL}/product/${id}`)
  //     .then((response) => {
  //       // Cập nhật state với thông tin sản phẩm
  //       console.log(response.data);
  //       setProducts(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  // const deleteProduct = (id) => {
  //   axios
  //     .delete(`${process.env.REACT_APP_BACKEND_URL}/product/${id}`)
  //     .then((response) => {
  //       //Load lại các sản phẩm:
  //       loadProducts();
  //       console.log("Sản phẩm đã được xóa thành công");
  //     })
  //     .catch((error) => {
  //       // Xử lý lỗi từ API
  //       console.error("Lỗi khi xóa sản phẩm:", error);
  //     });
  // };
  const deleteProduct = (id) => {
    toast.loading('Deleting...');
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/product/${id}`)
      .then((response) => {
        toast.dismiss();
        toast.success(<b>Xóa sản phẩm thành công</b>);
        //Load lại các sản phẩm:
        loadProducts();
        console.log("Sản phẩm đã được xóa thành công");
      })
      .catch((error) => {
        toast.dismiss();
        toast.error(<b>Xóa sản phẩm thất bại</b>);
        // Xử lý lỗi từ API
        console.error("Lỗi khi xóa sản phẩm:", error);
      });
  };

  return (
    <Container fluid>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "20px",
          marginTop: "20px",
        }}
      >
        <Link to="/admin/productsPage/add">
          {" "}
          <Button variant="primary">Thêm mới</Button>{" "}
        </Link>
      </div>

      <div className={"border-l-3 py-4"}>
        <TableContainer component={Paper} className={styles.table}>
          <Table sx={{ minWidth: 1200 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  STT
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Mã sản phẩm
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Tên Sản phẩm
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Ảnh sản phẩm
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Loại sản phẩm
                </TableCell>
                {/* <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Số lượng
                </TableCell> */}
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Đơn vị tính
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Giá
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Hoạt động
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product, index) => {
                return (
                  <TableRow key={product._id}>
                    <TableCell
                      className={styles.tableCell + " text-center"}
                      onClick={() => {
                        navigate(`/admin/productsPage/${product._id}`);
                      }}
                    >
                      {index + 1}
                    </TableCell>

                    <TableCell
                      className={styles.tableCell + " text-center"}
                      onClick={() => {
                        navigate(`/admin/productsPage/${product._id}`);
                      }}
                    >
                      {product.productid}
                    </TableCell>
                    <TableCell
                      className={styles.tableCell + " text-center"}
                      onClick={() => {
                        navigate(`/admin/productsPage/${product._id}`);
                      }}
                    >
                      {product.name}
                    </TableCell>
                    <TableCell
                      className={styles.tableCell + " text-center"}
                      onClick={() => {
                        navigate(`/admin/productsPage/${product._id}`);
                      }}
                    >
                      <Image
                        src={product.image}
                        roundedCircle="true"
                        style={{ width: "50px", height: "50px" }}
                      ></Image>
                    </TableCell>
                    <TableCell
                      className={styles.tableCell + " text-center"}
                      onClick={() => {
                        navigate(`/admin/productsPage/${product._id}`);
                      }}
                    >
                      {product.category}
                    </TableCell>
                    {/* <TableCell
                      className={styles.tableCell + " text-center"}
                      onClick={() => {
                        navigate(`/admin/productsPage/${product._id}`);
                      }}
                    >
                      {product.quantity_sold}
                    </TableCell> */}

                    <TableCell
                      className={styles.tableCell + " text-center"}
                      onClick={() => {
                        navigate(`/admin/productsPage/${product._id}`);
                      }}
                    >
                      {product.dvt}
                    </TableCell>
                    <TableCell
                      className={styles.tableCell + " text-center"}
                      onClick={() => {
                        navigate(`/admin/productsPage/${product._id}`);
                      }}
                    >
                      {product.price} đ
                    </TableCell>

                    <TableCell className={styles.tableCell + " text-center"}>
                      <div className="d-flex">
                        <Button
                          variant="warning"
                          className="me-1"
                          onClick={() => {
                            return navigate(
                              `/admin/productsPage/edit/${product._id}`
                            );
                            // { handleEditClick }
                          }}
                        >
                          Sửa
                        </Button>{" "}
                        <Button
                          variant="danger"
                          onClick={() => deleteProduct(product._id)}
                        >
                          Xóa
                        </Button>{" "}
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  );
}

export default ProductsPage;
