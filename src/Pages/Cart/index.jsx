import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Components/Product';
import Bill from './Components/Bill';
function Cart () {
    
    return (
        <div>
            <h1>Giỏ hàng</h1>
            <Container fluid>
                <Row>
                    <Col xs="12" md="7">
                        <hr/>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                    </Col>
                    <Col xs="12" md="5" className='px-5 px-md-3 mt-3'>
                        <Bill></Bill>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Cart;