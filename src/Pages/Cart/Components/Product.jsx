import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DoneIcon from '@mui/icons-material/Done';
import axios from 'axios';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import ConfirmationModal from "./ConfirmationModal";

function Product ({productid,image, name, price, category, soluong, state}) {
    const [sl, setSL ] = useState(soluong);

    const handleSetSL = (event) => {
        setSL(event.target.value);
    }

    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {
        setShowModal(true);
    };

    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    const handleConfirmDelete = async () => {
        try{
            await axios.delete(`https://dialuxury.onrender.com/cart/u01/${productid}`)
            setShowSuccessAlert(true);
        }
        catch(error){
            setShowErrorAlert(true);
        }
        setShowModal(false);
    };

    const handleCancelDelete = () => {
        setShowModal(false);
    };

    return (
        <div>
            <Container fluid>
            {showSuccessAlert && (
                <Alert variant="success" onClose={() => setShowSuccessAlert(false)} dismissible>
                Xóa thành công!
                </Alert>
            )}
            {showErrorAlert && (
                <Alert variant="danger" onClose={() => setShowErrorAlert(false)} dismissible>
                Xóa thất bại!
                </Alert>
            )}
            <Row>
                <Col xs={3}>
                    <img src={image} alt='anh san pham' className='w-100 h-auto rounded m-auto'></img>
                </Col>
                <Col className='d-flex flex-column justify-content-between'>
                    <div>
                        <label>{name}</label><br/>
                        <label>{price} vnđ</label><br/>
                    </div>
                    <p className='text-success mb-0 mt-3'> 
                        <DoneIcon sx={{ fontSize: 20 }}></DoneIcon>
                        Còn hàng
                    </p>
                </Col>
                <Col xs={2} className='d-flex flex-column justify-content-between'>
                    <input type='number' min="1" step={1} className='rounded w-100 h-auto p-0 text-center' value={sl} onChange={handleSetSL}></input>
                    <Button variant="link" className="text-danger pb-0" style={{textDecoration: 'none'}} onClick={handleDelete}>Xóa</Button>
                    <ConfirmationModal
                        show={showModal}
                        message="Bạn có chắc chắn muốn xóa?"
                        onConfirm={handleConfirmDelete}
                        onCancel={handleCancelDelete}
                    />
                </Col>
            </Row>
            </Container>
            <hr/>
        </div>
    );
}

export default Product;