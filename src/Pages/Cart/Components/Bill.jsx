import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Bill ({total}) {
    return (
        <div className="">
            <div className="px-3 py-3 rounded mb-4" style={{backgroundColor: '#ced4da'}}>
                <div className="d-flex justify-content-between">
                    <label>Tổng tiền</label> 
                    <span>{total} vnđ</span>
                </div>
            </div>
            <div className="px-3 text-center">
                <Button href="/paymentinfo" variant="primary" className="w-100">Thanh toán</Button>{' '}
                <p className="mt-4">Hoặc <Link to="#">tiếp tục mua hàng</Link></p>
            </div>
        </div>
    );
}

export default Bill;