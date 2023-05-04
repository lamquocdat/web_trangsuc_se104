import Dropdown from 'react-bootstrap/Dropdown';
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
      <div className='mb-2'>
        <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Tháng
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="">1</Dropdown.Item>
          <Dropdown.Item href="">2</Dropdown.Item>
          <Dropdown.Item href="">3</Dropdown.Item>
          <Dropdown.Item href="">4</Dropdown.Item>
          <Dropdown.Item href="">5</Dropdown.Item>
          <Dropdown.Item href="">6</Dropdown.Item>
          <Dropdown.Item href="">7</Dropdown.Item>
          <Dropdown.Item href="">8</Dropdown.Item>
          <Dropdown.Item href="">9</Dropdown.Item>
          <Dropdown.Item href="">10</Dropdown.Item>
          <Dropdown.Item href="">11</Dropdown.Item>
          <Dropdown.Item href="">12</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
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
