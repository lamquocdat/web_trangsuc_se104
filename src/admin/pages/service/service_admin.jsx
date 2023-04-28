
import { DataGrid } from "@mui/x-data-grid";
import { serviceColumns, serviceRows} from "./service";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./service.module.css";
const Service = () => {


  const [data, setData] = useState(serviceRows);

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
            <Link to="/service/view" style={{ textDecoration: "none" }}>
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
        <b>Danh Sách Phiếu Dịch Vụ</b>
        <Link to="/service/addService" className={styles.link}>
          Thêm Mới
        </Link>
      </div>
    
      <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        className={styles.datagrid}
        rows={data}
        columns={serviceColumns.concat(actionColumn)}
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

export default Service;
