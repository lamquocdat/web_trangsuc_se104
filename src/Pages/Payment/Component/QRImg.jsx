import images from "../../../assets/images/index";

export default ({bank, hoadon, kh}) => {
    const getTotal = (hoadon)=>{
        let total = 0;
        for(const sanpham of hoadon.sanphams){
            total+=sanpham.thanhtien;
        }
        return total;
    }

    return (
        <div>
            <div className="my-10 d-flex justify-content-center mb-4">
                <img src={images[bank]} alt="ma QR" className="w-50 h-50 rounded border border-3 border-black" style={{maxWidth: '300px'}}></img>
            </div>
            <div className="row my-2">
                <div className="col text-end">
                    <label>Nội dung chuyển khoảng:</label>
                </div>
                <div className="col">
                    <span>Thanh toán hóa đơn - {kh.name}</span>
                </div>
            </div>
            <div className="row mt-2 mb-4">
                <div className="col text-end">
                    <label>Số tiền:</label>
                </div>
                <div className="col">
                    <span>{getTotal(hoadon)} ₫</span>
                </div>
            </div>     
        </div>
    );
}
