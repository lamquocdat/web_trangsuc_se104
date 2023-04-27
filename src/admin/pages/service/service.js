

export const serviceColumns = [
  { field: "id", headerName: "STT", width: 60 },
  {
    field: "s_name",
    headerName: "Tên Phiếu Dịch Vụ",
    width: 250,
    
  },
  {
    field: "u_id",
    headerName: "Khách Hàng",
    width: 120,
  },
  {
    field: "s_id",
    headerName: "Mã",
    width: 70,
  },
  
  
  

  {
    field: "price",
    headerName: "Tổng Tiền",
    width: 150,
  },
  {
    field: "priceLeft",
    headerName: "Còn Lại",
    width: 150,
  },
  {
    field: "date",
    headerName: "Ngày Lập",
    width: 120,
    
  },
  {
    field: "status",
    headerName: "Trạng Thái",
    width: 160,
    renderCell: (params) => {
      return (
      
      <div className={`cellWithStatus ${params.row.status}`} style={{ backgroundColor: "rgba(0, 128, 0, 0.05)",
      color: "green"}}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const serviceRows = [
  {
    id: 1,
    s_name: "Phiếu dịch vụ 30/4",
    status: "active",
    s_id: "s01",
    u_id: "u01",
    date: "1/4/2023",
    price: "10.500.000 VNĐ",
    priceLeft: "5.500.000 VNĐ"
  },
  {
    id: 2,
    s_name: "Phiếu sale khi mua 5 sản phẩm",
    s_id: "s02",
    u_id: "u01",
    date: "1/4/2023",
    status: "unactive" ,
    price: "4.200.200 VNĐ",
    priceLeft: "5.500.000 VNĐ"
  },
  {
    id: 3,
    s_name: "Phiếu sale khi mua 5 sản phẩm",
    s_id: "s03",
    u_id: "u01",
    date: "1/4/2023",
    status: "unactive" ,
    price: "4.200.200 VNĐ",
    priceLeft: "5.500.000 VNĐ"
  },

  {
    id: 4,
    s_name: "Phiếu sale khi mua 5 sản phẩm",
    s_id: "s04",
    u_id: "u01",
    date: "1/4/2023",
    status: "unactive" ,
    price: "4.200.200 VNĐ",
    priceLeft: "5.500.000 VNĐ"
  },
  {
    id: 5,
    s_name: "Phiếu sale khi mua 5 sản phẩm",
    s_id: "s05",
    u_id: "u01",
    date: "1/4/2023",
    status: "active" ,
    price: "4.200.200 VNĐ",
    priceLeft: "5.500.000 VNĐ"
  },
  {
    id: 6,
    s_name: "Phiếu sale khi mua 5 sản phẩm",
    s_id: "s06",
    u_id: "u01",
    date: "1/4/2023",
    status: "unactive" ,
    price: "4.200.200 VNĐ",
    priceLeft: "5.500.000 VNĐ"
  },
  {
    id: 7,
    s_name: "Phiếu sale khi mua 5 sản phẩm",
    s_id: "s06",
    u_id: "u01",
    date: "1/4/2023",
    status: "unactive" ,
    price: "4.200.200 VNĐ",
    priceLeft: "5.500.000 VNĐ"
  },
  {
    id: 8,
    s_name: "Phiếu sale khi mua 5 sản phẩm",
    s_id: "s06",
    u_id: "u01",
    date: "1/4/2023",
    status: "unactive" ,
    price: "4.200.200 VNĐ",
    priceLeft: "5.500.000 VNĐ"
  },
  {
    id: 9,
    s_name: "Phiếu sale khi mua 5 sản phẩm",
    s_id: "s06",
    u_id: "u01",
    date: "1/4/2023",
    status: "unactive" ,
    price: "4.200.200 VNĐ",
    priceLeft: "5.500.000 VNĐ"
  },

  
];


//service type

export const serviceTypeColumns = [
  { field: "id", headerName: "STT", width: 60 },
  
  
  {
    field: "si_id",
    headerName: "Mã",
    width: 70,
  },
  {
    field: "si_name",
    headerName: "Tên Loại Dịch Vụ",
    width: 250,
    
  },
  
  {
    field: "price",
    headerName: "Giá",
    width: 150,
  },
  
];

//temporary data
export const serviceTypeRows = [
  {
    id: 1,
    si_id: "si01",
    si_name: "Đánh bóng nhẫn",
    si_id: "si01",
    price: "500.000 VNĐ",
    
  },
  {
    id: 2,
    si_id: "si02",
    si_name: "Đánh bóng nhẫn",
    si_id: "si01",
    price: "500.000 VNĐ",
    
  },
  {
    id: 3,
    si_id: "si03",
    si_name: "Đánh bóng nhẫn",
    si_id: "si01",
    price: "500.000 VNĐ",
    
  },
  {
    id: 4,
    si_id: "si04",
    si_name: "Đánh bóng nhẫn",
    si_id: "si01",
    price: "500.000 VNĐ",
    
  },
  {
    id: 5,
    si_id: "si05",
    si_name: "Đánh bóng nhẫn",
    si_id: "si01",
    price: "500.000 VNĐ",
    
  },
  {
    id: 6,
    si_id: "si06",
    si_name: "Đánh bóng nhẫn",
    si_id: "si01",
    price: "500.000 VNĐ",
    
  },
  {
    id: 7,
    si_id: "si07",
    si_name: "Đánh bóng nhẫn",
    si_id: "si01",
    price: "500.000 VNĐ",
    
  },
  

  
];