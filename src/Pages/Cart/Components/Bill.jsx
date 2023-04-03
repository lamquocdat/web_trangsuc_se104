import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
export default ({}) => {
    return (
        <div className="">
            <div className="bg-secondary px-3 py-3 rounded mb-4">
                <div className="d-flex justify-content-between">
                    <label>Giá sản phẩm</label> 
                    <span>500.000.000 vnđ</span>
                </div>
                <hr/>
                <div className="d-flex justify-content-between">
                    <label>Phí vận chuyển</label> 
                    <span>200.000 vnđ</span>
                </div>
                <hr/>
                <div className="d-flex justify-content-between">
                    <label>Thuế</label> 
                    <span>100.000 vnđ</span>
                </div>
                <hr/>
                <div className="d-flex justify-content-between">
                    <label><b>Tổng</b></label> 
                    <span>500.300.000 vnđ</span>
                </div>
            </div>
            <div className="px-3 text-center">
                <Button href="/paymentinfo" variant="primary" className="w-100">Thanh toán</Button>{' '}
                <p className="mt-4">Hoặc <Link to="#">tiếp tục mua hàng</Link></p>
            </div>
        </div>
    );
}