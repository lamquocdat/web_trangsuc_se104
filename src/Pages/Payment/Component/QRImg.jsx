import images from "../../../assets/images/index";

export default ({bank}) => {
    return (
        <div>
            <div className="my-10 d-flex justify-content-center mb-4">
                <img src={images[bank]} alt="ma QR" className="w-50 h-50 rounded border border-3 border-black" style={{maxWidth: '300px'}}></img>
            </div>
            <div className="row my-2">
                <div className="col text-end">
                    <label>Tên tài khoản:</label> 
                </div>
                <div className="col">
                    <span>Nguyễn Văn A</span>
                </div>
            </div>
            <div className="row my-2">
                <div className="col text-end">
                    <label>Số tài khoản:</label> 
                </div>
                <div className="col">
                    <span>0123456789</span>
                </div>
            </div>
            <div className="row my-2">
                <div className="col text-end">
                    <label>Ví điện tử:</label>
                </div>
                <div className="col">
                    {(()=>{
                        if(bank === "MomoQR")
                            return(<span>MomoQR</span>);
                        else if(bank === "ZalopayQR")
                            return (<span>Zalopay</span>);
                        else
                            return (<span>BIDV</span>);
                    })()}
                </div>
            </div>
            <div className="row my-2">
                <div className="col text-end">
                    <label>Nội dung chuyển khoảng:</label>
                </div>
                <div className="col">
                    <span>Thanh toán hóa đơn ...</span>
                </div>
            </div>
            <div className="row mt-2 mb-4">
                <div className="col text-end">
                    <label>Số tiền:</label>
                </div>
                <div className="col">
                    <span>350.000₫</span>
                </div>
            </div>     
        </div>
    );
}
