
import { DataGrid } from "@mui/x-data-grid";
import { warehouseColumns, warehouseRows} from "./warehouse";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./warehouse.module.css";
const WareHouse = () => {


  const [data, setData] = useState(warehouseRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    
    <div className={styles.servicePage}>
      {/* TỒN KHO */}
    <div className={styles.datatable}>
      <div className={styles.datatableTitle}>
        <b>Tồn kho</b>
        
      </div>
    
      <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        className={styles.datagrid}
        rows={data}
        columns={warehouseColumns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
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

export default WareHouse;
