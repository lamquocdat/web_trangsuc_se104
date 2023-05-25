import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Components/Product';
import Bill from './Components/Bill';
import axios from 'axios';
import { useEffect, useState } from "react";

function Cart () {
    //lấy _id của người dùng trong localStorage
    const userId = localStorage.getItem("_id");
    const [cart, setCart] = useState();

    //lấy các sản phẩm từ trong giỏ hàng hiện ra
    useEffect(() => {
        axios
          .get(`https://dialuxury.onrender.com/cart/${userId}`)
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
                                <Product productid={sp.productid} image={sp.image} name={sp.name} price={sp.price} category={sp.category} soluong={sp.soluong} state={sp.state} key={sp.productid}/>
                            )
                        })}
                        {cart !== undefined && (!Array.isArray(cart.sanphams) || cart.sanphams.length === 0) && (()=>{
                            <div className='d-flex justify-content-center'>
                                Giỏ hàng rỗng
                            </div>
                        })}
                    </Col>
                    <Col xs="12" md="5" className='px-5 px-md-3 mt-3'>
                        {(cart !== undefined) && <Bill cart={cart}/>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Cart;