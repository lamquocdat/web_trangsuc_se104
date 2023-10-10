import { Container, Row, Image } from "react-bootstrap";
import ProductList from "../Components/Products";
import banner_daychuyen from "../../../assets/images/Products/banner_daychuyen.png";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import Navbar from 'react-bootstrap/Navbar';
import Slider from '@mui/material/Slider';
import styles from './StyleProduct.module.css'
import { useDebounce } from "../../../hooks/useDebounce";
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';


function ProductsPage2() {

  const [isLoading, setIsLoading] = useState(false);
  const [products, productsSet] = useState([]);
  const [value, setValue] = useState([0, 10000000]);
  const [quality, setQuality] = useState("");
  const debouncedValue = useDebounce(value, 500)
  const handleChange = async (event, newValue) => {
    setValue(newValue);

  };
  const handleChangeQuality = async (qualityValue) => {
    setQuality(qualityValue);

  };

  const handleChangeSort = async (sortValue) => {
    //setSort(sortValue);
    if(sortValue == "newest")
    {
      setIsLoading(true)
      console.log(sortValue)
      const newProducts = axios
        .get("https://dialuxury.onrender.com/product/category/newest/D%C3%A2y%20chuy%E1%BB%81n")
        .then((response) => {
          console.log("newest filter")
          console.log(response.data)
          filterProducts(response.data);
        })
        .catch((error) => {
          setIsLoading(false)
          console.log(error);
        });
    }
    if(sortValue == "descending")
    {
      setIsLoading(true)
      console.log(sortValue)
      const newProducts = axios
        .get("https://dialuxury.onrender.com/product/category/descendingPrice/D%C3%A2y%20chuy%E1%BB%81n")
        .then((response) => {
          console.log(response.data)
          filterProducts(response.data);
        })
        .catch((error) => {
          setIsLoading(false)
          console.log(error);
        });
    }
    if(sortValue == "ascending")
    {
      setIsLoading(true)
      console.log(sortValue)
      const newProducts = axios
        .get("https://dialuxury.onrender.com/product/category/ascendingPrice/D%C3%A2y%20chuy%E1%BB%81n")
        .then((response) => {
          console.log(response.data)
          console.log("ascending filter")
          filterProducts(response.data);
        })
        .catch((error) => {
          setIsLoading(false)
          console.log(error);
        });
    }
    if(sortValue == "mostSold")
    {
      setIsLoading(true)
      console.log(sortValue)
      const newProducts = axios
        .get("https://dialuxury.onrender.com/product/category/mostSold/D%C3%A2y%20chuy%E1%BB%81n")
        .then((response) => {
          console.log(response.data)
          filterProducts(response.data);
        })
        .catch((error) => {
          setIsLoading(false)
          console.log(error);
        });
    }
    if(sortValue==""){
      setIsLoading(true)
      const newProducts = axios
        .get("https://dialuxury.onrender.com/product/category/D%C3%A2y%20chuy%E1%BB%81n")
        .then((response) => {
          console.log(response.data)
          console.log(sortValue)
          filterProducts(response.data);
        })
        .catch((error) => {
          setIsLoading(false)
          console.log(error);
        });
    
    
    }
  };

 
  useEffect(() => {
    setIsLoading(true)
    axios
      .get("https://dialuxury.onrender.com/product/category/D%C3%A2y%20chuy%E1%BB%81n")
      .then((response) => {
        productsSet(response.data);
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error);
      });
  }, []);

  const filterProducts = async (action) => {
    if (quality !== "") {
      const newData = action.filter(product => (product.price >= value[0] && product.price <= value[1] && product.quality == quality))
      productsSet(newData)
      setIsLoading(false)
    }
    else {
      const newData = action.filter(product => (product.price >= value[0] && product.price <= value[1]))
      productsSet(newData)
      setIsLoading(false)
    }

  };

  //Sắp xếp products
  useEffect(() => {
    setIsLoading(true)
    const newProducts = axios
      .get("https://dialuxury.onrender.com/product/category/D%C3%A2y%20chuy%E1%BB%81n")
      .then((response) => {

        filterProducts(response.data);
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error);
      });

    //console.log(debouncedValue)
  }, [debouncedValue, quality]);


  return (
    <>
      <Container fluid className="mb-5">
        <Row>
          <Image src={banner_daychuyen} className="px-0"></Image>
        </Row>
        <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className={styles.firstNav}
      >
        <Container className={styles.myContainer}>
          <Navbar.Brand href="#home">
       
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
        
            <Nav className={styles.navTop}>
            <NavDropdown
                className={styles.page}
                style={{ fontWeight: '500' }}
                title="Chất lượng sản phẩm"
              >
                <NavDropdown.Item>
                  <Button style={{color:"black", backgroundColor:"white", borderColor:"white", fontSize:"18px", fontWeight:"15px"}} onClick={() => handleChangeQuality("")}>Tất cả</Button>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Button style={{color:"black", backgroundColor:"white", borderColor:"white", fontSize:"18px", fontWeight:"15px"}} onClick={() => handleChangeQuality("Vàng")}>Vàng</Button>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Button style={{color:"black", backgroundColor:"white", borderColor:"white", fontSize:"18px", fontWeight:"15px"}} onClick={() => handleChangeQuality("Bạc")}>Bạc</Button>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Button style={{color:"black", backgroundColor:"white", borderColor:"white", fontSize:"18px", fontWeight:"15px"}} onClick={() => handleChangeQuality("Kim cương")}>Kim Cương</Button>
                </NavDropdown.Item>
              </NavDropdown>


              <NavDropdown
                className={styles.page}
                style={{ fontWeight: '500' }}
                title="Giá"
              >
                <NavDropdown.Item>
                  <h3 style={{ margin: "20px", fontSize: "18px" }}>Min: {value[0].toLocaleString('vi', {style : 'currency', currency : 'VND'})}</h3>
                  <h3 style={{ margin: "20px", fontSize: "18px" }}>Max: {value[1].toLocaleString('vi', {style : 'currency', currency : 'VND'})}</h3>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    disabled={isLoading}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="off"
                    step={10}
                    min={0}
                    max={10000000}
                    size="small"

                    className={styles.SliderCSS}
                  />
                </NavDropdown.Item>
              </NavDropdown>
              
             
            </Nav>
            <Nav className={styles.navTop}>
            <NavDropdown
                className={styles.page}
                style={{ fontWeight: '500' }}
                title="Sắp xếp"
              >
                <NavDropdown.Item>
                  <Button style={{color:"black", backgroundColor:"white", borderColor:"white", fontSize:"18px", fontWeight:"15px"}} onClick={() => handleChangeSort("")}>Tất cả</Button>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Button style={{color:"black", backgroundColor:"white", borderColor:"white", fontSize:"18px", fontWeight:"15px"}} onClick={() => handleChangeSort("newest")}>Các sản phẩm mới nhất</Button>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Button style={{color:"black", backgroundColor:"white", borderColor:"white", fontSize:"18px", fontWeight:"15px"}} onClick={() => handleChangeSort("descending")}>Sắp xếp giá từ cao đến thấp</Button>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Button style={{color:"black", backgroundColor:"white", borderColor:"white", fontSize:"18px", fontWeight:"15px"}} onClick={() => handleChangeSort("ascending")}>Sắp xếp giá từ thấp đến cao</Button>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Button style={{color:"black", backgroundColor:"white", borderColor:"white", fontSize:"18px", fontWeight:"15px"}} onClick={() => handleChangeSort("mostSold")}>Các sản phẩm bán chạy nhất</Button>
                </NavDropdown.Item>
              </NavDropdown>


              
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>    
        <Row>
          <ProductList products={products} />
        </Row>
      </Container>
    </>
  );
}

export default ProductsPage2;
