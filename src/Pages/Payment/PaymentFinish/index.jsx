import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";


function PaymentFinish () {
    // lưu dữ liệu truyền vào từ trang giỏ hàng
    const location = useLocation();
    
    //nếu không có dữ liệu truyền vào từ giỏ hàng thì chuyển hướng sang trang chủ
    if (!location.state) {
        window.location.replace("/");
    }

    return (
        <div className="text-center py-5">
            <h1 className="text-success font-bold mb-3">Thông tin thanh toán của bạn đã được ghi nhận</h1>
            <p className="mb-3">Chúng tôi sẽ gửi xác nhận vào email cho bạn khi việc thanh toán được hoàn tất</p>
            <div className="my-3 py-3">
                <Link to={`/orders/${localStorage.getItem('_id')}`} className="text-primary">Nhấp vào đây để biết chi tiết đơn hàng</Link>
            </div>
            <div className="my-3">
                <Link to="/" className="border border-2 rounded px-3 py-3 mx-auto bg-primary text-white" style={{textDecoration: 'none'}}>Tiếp tục mua hàng</Link>
            </div>
        </div>
    );
}

export default PaymentFinish