import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Components/Product';
import Bill from './Components/Bill';
import axios from 'axios';
import { useEffect, useState } from "react";
import images from "../../assets/images"

function Cart () {
    //lấy _id của người dùng trong localStorage
    const userId = localStorage.getItem("_id");

    const [cart, setCart] = useState();

    //lấy các sản phẩm từ trong giỏ hàng hiện ra
    useEffect(() => {
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/cart/${userId}`)
          .then((response) => {
            setCart(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      });

    return (
        <div>
            <h1 className='m-4'>Giỏ hàng</h1>
            <Container fluid>
                <Row>
                    <Col xs="12" md="7">
                        <hr/>
                        {(cart !== undefined && cart.sanphams.length !== 0) ? cart.sanphams.map((sp, index)=>{
                            return(
                                <Product productid={sp.productid} image={sp.image} name={sp.name} price={sp.price} category={sp.category} soluong={sp.soluong} state={sp.state} key={sp.productid} index={index}/>
                            )
                        }) : <div className="d-flex flex-column align-items-center">
                                <strong>Giỏ hàng rỗng</strong>
                                <img src={images.cartIsNull} width={500} alt='Giỏ hàng rỗng'/>
                            </div>
                        }
                    </Col>
                    <Col xs="12" md="5" className='px-5 px-md-3 mt-3'>
                        {(cart !== undefined) && <Bill cart={cart}/>}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Cart;