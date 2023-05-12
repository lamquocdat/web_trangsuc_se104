import QRImg from "../Component/QRImg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import { Button } from "react-bootstrap";
import { useRef } from "react";

function PaymentInfo () {
    const { mahd } = useParams();
    //lấy _id của đơn hàng truyền vào trừ URL
    const [hd, setHd]= useState('');
    useEffect(() => {
        axios.get(`https://dialuxury.onrender.com/order/hd/${mahd}`)
        .then((response) => {
            setHd(response.data[0]);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    //chọn phương thức thanh toán
    const [bank, setbank] = useState("MomoQR");
    const handleSelectChange = (event) => {
        setbank(event.target.value);
    }

    //chọn địa chỉ
    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [ward, setWard] = useState("");
    const[addressdetail, setDetail] = useState('');
  
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    let tinh='Tỉnh/TP ?', quan='Quận ?',xa='Xã ?';

    //chọn hình ảnh xác thực
    const fileInputRef = useRef(null);
    const [ok, setOk] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const handleFileInput = (event)=>{
        const file = event.target.files[0];
        const fileType = file.type;
        if (fileType === "image/png" || fileType === "image/jpeg") {
            // File là file ảnh
            setOk(true);
        } else {
            // File không phải là file ảnh
            setOk(false);
            setShowErrorAlert(true);
        }
    }
   
    //hiển thị tỉnh, thành phố, quận, huyện
    useEffect(() => {
        axios.get("https://vapi.vnappmob.com/api/province")
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
    axios.get(`https://vapi.vnappmob.com/api/province/district/${selectedProvince}`)
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
    axios.get(`https://vapi.vnappmob.com/api/province/ward/${selectedDistrict}`)
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

    const handleDetail = (e)=> {
        setDetail(e.target.value);
    }

    //xử lý xác nhận đơn hàng thanh toán (cập nhật lại đơn hàng)
    const UpdateOrder = ()=>{
        const updateData = new FormData();
        updateData.append('diachigiaohang', addressdetail + ', ' + xa + ', ' + quan + ', ' + tinh);
        updateData.append('hinhanh', fileInputRef.current.files[0]);

        //cập nhật lại diachigiaohang và hinhanh của order có mahd này
        axios.put(`https://dialuxury.onrender.com/order/${hd._id}`, updateData)
            .then((response) => {
                window.location.href = `/paymentfinish/${mahd}`;
            })
            .catch((error) => {
                console.log(error);
            });
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
                            return(<QRImg bank={"MomoQR"} hoadon={hd}></QRImg>);
                        else if(bank === "ZalopayQR")
                            return (<QRImg bank={"ZalopayQR"} hoadon={hd}></QRImg>);
                        else
                            return (<QRImg bank={"BIDVQR"} hoadon={hd}></QRImg>);
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
                                    {(()=>{tinh=province.province_name})()}
                                </option>
                                ))}
                            </select>
                            <select value={district} onChange={handleDistrictChange} className="rounded px-2 py-2 mt-2">
                                <option key="" value="">Chọn Quận/Huyện</option>
                                {districts.map((district) => (
                                <option key={district.district_id} value={district.district_id}>
                                    {district.district_name}
                                    {(()=>{quan=district.district_name})()}
                                </option>
                                ))}
                            </select>
                            <select value={ward} onChange={handleWardChange} className="rounded px-2 py-2 mt-2">
                                <option key="" value="">Chọn Xã/Phường</option>
                                {wards.map((ward) => (
                                <option key={ward.ward_id} value={ward.ward_id}>
                                    {ward.ward_name}
                                    {(()=>{xa=ward.ward_name})()}
                                </option>
                                ))}
                            </select>
                        </div>
                        <textarea className="w-100 rounded" placeholder="Địa chỉ chi tiểt" value={addressdetail} onChange={handleDetail}/>
                        <div className="d-flex justify-content-center mt-4">
                            <input type="file" accept=".png,.jpg" onChange={handleFileInput} ref={fileInputRef}/>
                            {showErrorAlert && (
                                <Alert variant="danger" onClose={() => setShowErrorAlert(false)} dismissible>
                                    Đây không phải tệp hình ảnh!
                                </Alert>
                            )}
                        </div>
                    </div>
                    <div className="px-4 my-4 my-1 text-center">
                        <p><b>Nếu có thông tin sai sót</b> xin vui lòng gọi số <b className="text-danger">0123456789</b> để được hỗ trợ miễn phí</p>
                    </div>
                </div>
                <div className="text-center my-4">
                    {ok && province && district && <Button onClick={UpdateOrder} className="btn btn-primary w-100">Xác nhận</Button>
                    }
                </div>
            </div>
        </div>
    );
}

export default PaymentInfo