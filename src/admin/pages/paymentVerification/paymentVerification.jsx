
import { DataGrid } from "@mui/x-data-grid";
import { paymentColumns, paymentRows} from "./paymantData";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./paymentVerification.module.css";
const PaymentAdmin = () => {


  const [data, setData] = useState(paymentRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Lựa Chọn",
      width: 150,
      renderCell: (params) => {
        return (
          <div className={styles.cellAction}>
            <Link to="/paymentView" style={{ textDecoration: "none" }}>
              <div className={styles.viewButton}>View</div>
            </Link>
            <div
              className={styles.deleteButton}
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];


  return (
    
    <div className={styles.servicePage}>
     
    <div className={styles.datatable}>
      <div className={styles.datatableTitle}>
        <b>Danh Sách Xác Nhận Thanh Toán</b>
        
      </div>
    
      <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        className={styles.datagrid}
        rows={data}
        columns={paymentColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </div>



    
    </div>
  );
};

export default PaymentAdmin;
