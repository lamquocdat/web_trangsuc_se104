import { Link } from "react-router-dom";
import QRImg from "../Component/QRImg";
import React, { useState, useEffect } from "react";
import axios from "axios";

function PaymentInfo () {
    const [bank, setbank] = useState("MomoQR");

    const handleSelectChange = (event) => {
        setbank(event.target.value);
    }
    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [ward, setWard] = useState("");
  
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    const madonhang = "1234";
    
    useEffect(() => {
        axios
          .get("https://vapi.vnappmob.com/api/province")
          .then((response) => {
            setProvinces(response.data.results);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    
      const handleProvinceChange = (e) => {
        const selectedProvince = e.target.value;
        setProvince(selectedProvince);
        setDistrict("");
        setWard("");
        axios
          .get(`https://vapi.vnappmob.com/api/province/district/${selectedProvince}`)
          .then((response) => {
            setDistricts(response.data.results);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      const handleDistrictChange = (e) => {
        const selectedDistrict = e.target.value;
        setDistrict(selectedDistrict);
        setWard("");
        axios
          .get(`https://vapi.vnappmob.com/api/province/ward/${selectedDistrict}`)
          .then((response) => {
            setWards(response.data.results);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      const handleWardChange = (e) => {
        const selectedWard = e.target.value;
        setWard(selectedWard);
      };

    return (
        <div className={" d-flex justify-content-center"}>
            <div className="w-75">

                <h1 className="text-center pt-4 pb-1">Thông tin thanh toán</h1>

                <div className="my-12 px-4 py-2">
                    <p className="text-center">Quý khách vui lòng chọn phương thức thanh toán</p>
                    <div className={" d-flex justify-content-center my-4 "}>
                        <select className="text-center py-2 px-2 rounded" onChange={handleSelectChange}>
                            <option key={1} value="MomoQR">Momo</option>
                            <option key={2} value="BIDVQR">BIDV</option>
                            <option key={3} value="ZalopayQR">ZalopayQR</option>
                        </select>
                    </div>

                    {(()=>{
                        if(bank === "MomoQR")
                            return(<QRImg bank={"MomoQR"}></QRImg>);
                        else if(bank === "ZalopayQR")
                            return (<QRImg bank={"ZalopayQR"}></QRImg>);
                        else
                            return (<QRImg bank={"BIDVQR"}></QRImg>);
                    })()}

                    <div className="text-center pb-1">
                        <h2>Địa chỉ nhận hàng</h2>
                        <div className="d-flex flex-wrap justify-content-evenly my-4">
                            <select className="rounded px-2 py-2 mt-2">
                                <option key="1" value="VN">Việt Nam</option>
                            </select>
                            <select value={province} onChange={handleProvinceChange} className="rounded px-2 py-2 mt-2">
                                <option key="" value="">Chọn Tỉnh/Thành phố</option>
                                {provinces.map((province) => (
                                <option key={province.province_id} value={province.province_id}>
                                    {province.province_name}
                                </option>
                                ))}
                            </select>
                            <select value={district} onChange={handleDistrictChange} className="rounded px-2 py-2 mt-2">
                                <option key="" value="">Chọn Quận/Huyện</option>
                                {districts.map((district) => (
                                <option key={district.district_id} value={district.district_id}>
                                    {district.district_name}
                                </option>
                                ))}
                            </select>
                            <select value={ward} onChange={handleWardChange} className="rounded px-2 py-2 mt-2">
                                <option key="" value="">Chọn Xã/Phường</option>
                                {wards.map((ward) => (
                                <option key={ward.ward_id} value={ward.ward_id}>
                                    {ward.ward_name}
                                </option>
                                ))}
                            </select>
                        </div>
                        <textarea className="w-100 rounded" placeholder="Địa chỉ chi tiểt"/>
                    </div>
                    <div className="px-4 my-4 my-1 text-center">
                        <p><b>Nếu có thông tin sai sót</b> xin vui lòng gọi số <b className="text-danger">0123456789</b> để được hỗ trợ miễn phí</p>
                    </div>
                </div>
                <div className="text-center my-4">
                    <Link to={{ pathname: `/paymentfinish/${madonhang}` }} className="rounded w-50 px-3 py-3 bg-primary text-white" style={{textDecoration: 'none'}}>Xác nhận</Link>
                </div>
            </div>
        </div>
    );
}

export default PaymentInfo