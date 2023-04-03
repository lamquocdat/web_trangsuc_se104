import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import images from '../../../assets/images'
import Button from 'react-bootstrap/Button';
import DoneIcon from '@mui/icons-material/Done';
export default ({}) => {
    return (
        <div>
            <Container fluid>
            <Row>
                <Col xs={3}>
                    <img src={images.kimcuong} alt='anh san pham' className='w-100 h-auto rounded m-auto'></img>
                </Col>
                <Col className='d-flex flex-column justify-content-between'>
                    <div>
                        <label>Kim cương 99 kara</label><br/>
                        <label>250.000.000 vnđ</label><br/>
                    </div>
                    <p className='text-success mb-0 mt-3'> <DoneIcon sx={{ fontSize: 20 }}></DoneIcon>Còn hàng</p>
                </Col>
                <Col xs={2} className='d-flex flex-column justify-content-between'>
                    <input type='number' min="1" step={1} className='rounded w-100 h-auto p-0'></input>
                    <Button variant="link" className="text-danger pb-0">Xóa</Button>
                </Col>
            </Row>
            </Container>
            <hr/>
        </div>
    );
}