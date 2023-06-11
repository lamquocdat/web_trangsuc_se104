import { Container, Row, Image } from "react-bootstrap";
import ProductList from "../Components/Products";
import ImageBanner from "../../../assets/images/Products/Banner.png";
import { useState, useEffect } from "react";
import axios from "axios";
import Slider from '@mui/material/Slider';
import styles from './StyleProduct.module.css'
import { useDebounce } from "../../../hooks/useDebounce";
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
function ProductsPage() {
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
  useEffect(() => {
    axios
      .get("https://dialuxury.onrender.com/product/category/Nh%E1%BA%ABn")
      .then((response) => {
        productsSet(response.data);
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true)
    const newProducts = axios
      .get("https://dialuxury.onrender.com/product/category/Nh%E1%BA%ABn")
      .then((response) => {

        if (quality !== "") {
          const newData = response.data.filter(product => (product.price >= value[0] && product.price <= value[1] && product.quality == quality))
          productsSet(newData)
          setIsLoading(false)
        }
        else {
          const newData = response.data.filter(product => (product.price >= value[0] && product.price <= value[1]))
          productsSet(newData)
          setIsLoading(false)
        }
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
          <Image src={ImageBanner} className="px-0"></Image>
        </Row>
        <Row>
          <div className={styles.mySpace} >

            <div className={styles.myDropdown}>
              <h3 style={{ margin: "20px", fontSize: "18px" }}>Bộ lọc:</h3>
              <NavDropdown
                className={styles.page}
                style={{ fontSize: "25px", fontWeight: "bold" }}
                title="Giá trị sản phẩm"
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
                    aria-label="Small"
                    size="small"

                    className={styles.SliderCSS}
                  />
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className={styles.page}
                style={{ fontSize: "25px", fontWeight: "bold" }}
                title="Chất lượng sản phẩm"
              >
                <NavDropdown.Item>
                  <Button onClick={() => handleChangeQuality("")}>Tất cả</Button>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Button onClick={() => handleChangeQuality("Vàng")}>Vàng</Button>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Button onClick={() => handleChangeQuality("Bạc")}>Bạc</Button>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Button onClick={() => handleChangeQuality("Kim cương")}>Kim Cương</Button>
                </NavDropdown.Item>

              </NavDropdown>
            </div>

          </div>
        </Row>

        <Row>
          <ProductList products={products} />
        </Row>
      </Container>
    </>
  );
}

export default ProductsPage;
