import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";


function PaymentFinish () {
    const { mahd } = useParams();

    return (
        <div className="text-center py-5">
            <h1 className="text-success font-bold mb-3">Thông tin thanh toán của bạn đã được ghi nhận</h1>
            <p className="mb-3">Chúng tôi sẽ gửi xác nhận vào email cho bạn khi việc thanh toán được hoàn tất</p>
            <strong className="mb-3">SỐ ĐƠN ĐẶT HÀNG: {mahd}</strong><br/>
            <div className="my-3 py-3">
                <Link to="#" className="text-primary">Nhấp vào đây để biết chi tiết đơn hàng</Link>
            </div>
            <div className="my-3">
                <Link to="/" className="border border-2 rounded px-3 py-3 mx-auto bg-primary text-white" style={{textDecoration: 'none'}}>Tiếp tục mua hàng</Link>
            </div>
        </div>
    );
}

export default PaymentFinish