import QRImg from "../Component/QRImg";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import { Button } from "react-bootstrap";

function PaymentInfo () {
    //lấy _id của người dùng trong localStorage
    const userId = localStorage.getItem("_id");

    // lưu dữ liệu truyền vào từ trang giỏ hàng
    const location = useLocation();
    
    //nếu không có dữ liệu truyền vào từ giỏ hàng thì chuyển hướng sang trang chủ
    if (!location.state) {
        window.location.replace("/");
    }

    const [user, setUser] = useState({});

    //lấy _id của đơn hàng truyền vào từ URL
    const [hd, setHd]= useState('');
    useEffect(() => {
        axios.get(`https://dialuxury.onrender.com/order/hd/${location.state.mahd}`)
        .then((response) => {
            setHd(response.data[0]);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    //lấy thông tin user
    useEffect(() => {
        axios.get(`https://dialuxury.onrender.com/user/${userId}`)
        .then((response) => {
            setUser(response.data);
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
   

    //xử lý xác nhận đơn hàng thanh toán (cập nhật lại đơn hàng)
    const navigate = useNavigate();
    const UpdateOrder = ()=>{
        const updateData = new FormData();
        updateData.append('diachigiaohang', user.address);
        updateData.append('hinhanh', fileInputRef.current.files[0]);
        updateData.append('hinhthucthanhtoan', bank);

        //cập nhật lại diachigiaohang và hinhanh của order có location.state.mahd này
        axios.put(`https://dialuxury.onrender.com/order/${hd._id}`, updateData)
            .then((response) => {
                const mahd = location.state.mahd;
                    navigate("/paymentfinish", {
                        state: { mahd },
                    });
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
                            return(<QRImg bank={"MomoQR"} hoadon={hd} kh={user}></QRImg> );
                        else if(bank === "ZalopayQR")
                            return (<QRImg bank={"ZalopayQR"} hoadon={hd} kh={user}></QRImg>);
                        else
                            return (<QRImg bank={"BIDVQR"} hoadon={hd} kh={user}></QRImg>);
                    })()}

                        <div className="d-flex justify-content-center mt-4">
                            <input type="file" accept=".png,.jpg" onChange={handleFileInput} ref={fileInputRef}/>
                            {showErrorAlert && (
                                <Alert variant="danger" onClose={() => setShowErrorAlert(false)} dismissible>
                                    Đây không phải tệp hình ảnh!
                                </Alert>
                            )}
                        </div>
                    <div className="px-4 my-4 my-1 text-center">
                        <p><b>Nếu có thông tin sai sót</b> xin vui lòng gọi số <b className="text-danger">0123456789</b> để được hỗ trợ miễn phí</p>
                    </div>
                </div>
                <div className="text-center my-4">
                    {ok && <Button onClick={UpdateOrder} className="btn btn-primary w-100">Xác nhận</Button>
                    }
                </div>
            </div>
        </div>
    );
}

export default PaymentInfo