
import { DataGrid } from "@mui/x-data-grid";
import { orderColumns, orderRows} from "./orderVerificationData";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./orderVerification.module.css";
const VerifyOrder = () => {


  const [data, setData] = useState(orderRows);

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
            <Link to="/viewOrderVerification" style={{ textDecoration: "none" }}>
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
      {/* PHIẾU DỊCH VỤ */}
    <div className={styles.datatable}>
      <div className={styles.datatableTitle}>
        <b>Danh Sách Xác Nhận Đơn Hàng</b>
        
      </div>
    
      <Box sx={{ height: 400, width: '70%' }}>
      <DataGrid
        className={styles.datagrid}
        rows={data}
        columns={orderColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 6,
            },
          },
        }}
       
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </div>

    </div>
  );
};

export default VerifyOrder;
