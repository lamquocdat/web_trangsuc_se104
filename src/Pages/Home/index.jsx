import styles from './Home.module.css';
import { useState, useEffect } from 'react';

import ProductHomepage from './Components/MostSoldProducts';
import NewProductHomepage from './Components/NewProduct';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams) {
      const responseDataString = urlParams.get('responseData');
      const responseDataObject = JSON.parse(responseDataString);
      if (responseDataObject) {
        localStorage.setItem('token', responseDataObject.token);
        localStorage.setItem('_id', responseDataObject._id);
        localStorage.setItem('username', responseDataObject.name);
        localStorage.setItem('role', responseDataObject.role);
        navigate('/');
      }
      // Use the responseData as needed
    }
  }, []);
  const [newProduct, setNewProduct] = useState([]);
  const [soldProduct, setSoldProduct] = useState([]);
  useEffect(() => {
    loadNewProduct();
    loadSoldProduct();
  }, []);

  const loadNewProduct = async () => {
    axios
      .get('https://dialuxury.onrender.com/sortedProduct')
      .then((response) => {
        setNewProduct(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadSoldProduct = async () => {
    axios
      .get('https://dialuxury.onrender.com/soldNumbersOfProducts')
      .then((response) => {
        setSoldProduct(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div>
      <Container fluid>
        <Row>
          <img
            src={require('../../assets/images/banner-main-homepage-img.jpg')}
            alt=""
            className={styles.banner}
            style={{ maxWidth: '100%', padding: '0' }}
          />
        </Row>
        <Row>
          <h4
            className="pb-3"
            style={{
              color: 'rgb(189, 120, 189)',
              marginTop: '40px',
              textAlign: 'center',
              fontSize: '27px',
            }}
          >
            Sản phẩm bán chạy
          </h4>
          <ProductHomepage products={soldProduct} />;
        </Row>
        <Row>
          <h4
            className="pb-3"
            style={{
              color: 'rgb(189, 120, 189)',
              marginTop: '40px',
              textAlign: 'center',
              fontSize: '27px',
            }}
          >
            Sản phẩm mới
          </h4>
          <NewProductHomepage products={newProduct} />;
        </Row>
      </Container>
    </div>
  );
}

export default Home;
