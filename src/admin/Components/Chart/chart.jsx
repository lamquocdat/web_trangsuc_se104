import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AreaChart,
  Area,
  XAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip
} from "recharts";

export default function Chart({aspect, title} ) {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; //lấy tháng hiện tại

  const [thangHienTai, setThangHienTai] = useState({thang: currentMonth , tien:0})
  const [thangTruoc, setThangTruoc] = useState({thang: currentMonth-1, tien:0})
  const [haiThangTruoc, setHaiThangTruoc] = useState({thang: currentMonth-2, tien:0})
  const [baThangTruoc,setBaThangTruoc] = useState({thang: currentMonth-3, tien:0})
  const [bonThangTruoc, setBonThanTruoc] = useState({thang: currentMonth-4, tien:0}) 
  const [namThangTruoc, setNamThangTruoc] = useState({thang: currentMonth-5, tien:0})
  //lấy dữ liệu các order đã giao hàng
useEffect(()=>{
  axios.get("https://dialuxury.onrender.com/order/tinhtrang/Đã%20giao%20hàng")
  .then((res)=>{
    for(const order of res.data){
      const month = parseInt(order.ngaylap.split("/")[1], 10); // lấy tháng từ ngày lập
        switch (month) {
          case currentMonth:
            for(const sp of order.sanphams)
              setThangHienTai((prevThangHienTai) => ({
                thang: month,
                tien: prevThangHienTai.tien + sp.thanhtien
              }));
            break;
          case currentMonth-1:
            for(const sp of order.sanphams)
              setThangTruoc((prevThangTruoc) => ({
                thang: month,
                tien: prevThangTruoc.tien + sp.thanhtien
              }));
            break;
          case currentMonth-2:
            for(const sp of order.sanphams)
              setHaiThangTruoc((prevHaiThangTruoc) => ({
                thang: month,
                tien: prevHaiThangTruoc.tien + sp.thanhtien
              }));
            break;
          case currentMonth-3:
            for(const sp of order.sanphams)
              setBaThangTruoc((prevBaThangTruoc) => ({
                thang: month,
                tien: prevBaThangTruoc.tien + sp.thanhtien
              }));
            break;
          case currentMonth-4:
            for(const sp of order.sanphams)
              setBonThanTruoc((prevBonThanTruoc) => ({
                thang: month,
                tien: prevBonThanTruoc.tien + sp.thanhtien
              }));
            break;
          case currentMonth-5:
            for(const sp of order.sanphams)
              setNamThangTruoc((prevNamThangTruoc) => ({
                thang: month,
                tien: prevNamThangTruoc.tien + sp.thanhtien
              }));
            break;
          default:
            break;
        }
      }
  })
  .catch((e)=>{
    console.log(e);
  })
},[])

const [data, setData ] = useState([]);
useEffect(()=>{
  setData([
    { name: namThangTruoc.thang, Total: namThangTruoc.tien },
    { name: bonThangTruoc.thang, Total: bonThangTruoc.tien},
    { name: baThangTruoc.thang, Total: baThangTruoc.tien },
    { name: haiThangTruoc.thang, Total: haiThangTruoc.tien },
    { name: thangTruoc.thang, Total: thangTruoc.tien },
      { name: thangHienTai.thang, Total: thangHienTai.tien },
    ]);
    //phải chia hai vì component render 2 lần làm thuộc tính tien = tien *2
},[thangHienTai,thangTruoc,haiThangTruoc,baThangTruoc,bonThangTruoc,namThangTruoc])
  

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={100}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"/>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
