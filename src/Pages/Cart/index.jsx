import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Components/Product';
import Bill from './Components/Bill';
import axios from 'axios';
import { useEffect, useState } from "react";

function Cart () {
    const [cart, setCart] = useState();

    useEffect(() => {
        axios
          .get("https://dialuxury.onrender.com/cart/u01")
          .then((response) => {
            setCart(response.data)
          })
          .catch((error) => {
            console.log(error);
          });
      });

    return (
        <div>
            <h1>Giỏ hàng</h1>
            <Container fluid>
                <Row>
                    <Col xs="12" md="7">
                        <hr/>
                        {cart !== undefined && cart.sanphams.map((sp)=>{
                            return(
                                <Product productid={sp.productid} image={sp.image} name={sp.name} price={sp.price} category={sp.category} soluong={sp.soluong} state={sp.state}/>
                            )
                        })}
                    </Col>
                    <Col xs="12" md="5" className='px-5 px-md-3 mt-3'>
                        {(cart !== undefined) && <Bill total={cart.tongtrigia}/>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Cart;