import { Container, Row, Image } from "react-bootstrap";
import ProductList from "../Components/Products";
import banner_bongtai from "../../../assets/images/Products/banner_bongtai.jpg";

// const products = [
//   {
//     id: "p_bt_1",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/300/300/detailed/161/gbtpxmw000213-bong-tai-vang-trang-14k-dinh-da-topaz-pnj-1.png",
//     name: "Bông tai vàng trắng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_bt_2",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/300/300/detailed/161/gbtpxmw000213-bong-tai-vang-trang-14k-dinh-da-topaz-pnj-1.png",
//     name: "Bông tai vàng trắng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_bt_3",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/300/300/detailed/161/gbtpxmw000213-bong-tai-vang-trang-14k-dinh-da-topaz-pnj-1.png",
//     name: "Bông tai vàng trắng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_bt_4",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/300/300/detailed/161/gbtpxmw000213-bong-tai-vang-trang-14k-dinh-da-topaz-pnj-1.png",
//     name: "Bông tai vàng trắng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_bt_5",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/300/300/detailed/161/gbtpxmw000213-bong-tai-vang-trang-14k-dinh-da-topaz-pnj-1.png",
//     name: "Bông tai vàng trắng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_bt_6",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/300/300/detailed/161/gbtpxmw000213-bong-tai-vang-trang-14k-dinh-da-topaz-pnj-1.png",
//     name: "Bông tai vàng trắng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_bt_7",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/300/300/detailed/161/gbtpxmw000213-bong-tai-vang-trang-14k-dinh-da-topaz-pnj-1.png",
//     name: "Bông tai vàng trắng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_bt_8",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/300/300/detailed/161/gbtpxmw000213-bong-tai-vang-trang-14k-dinh-da-topaz-pnj-1.png",
//     name: "Bông tai vàng trắng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_bt_9",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/300/300/detailed/161/gbtpxmw000213-bong-tai-vang-trang-14k-dinh-da-topaz-pnj-1.png",
//     name: "Bông tai vàng trắng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_bt_10",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/300/300/detailed/161/gbtpxmw000213-bong-tai-vang-trang-14k-dinh-da-topaz-pnj-1.png",
//     name: "Bông tai vàng trắng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_bt_11",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/300/300/detailed/161/gbtpxmw000213-bong-tai-vang-trang-14k-dinh-da-topaz-pnj-1.png",
//     name: "Bông tai vàng trắng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_bt_12",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/300/300/detailed/161/gbtpxmw000213-bong-tai-vang-trang-14k-dinh-da-topaz-pnj-1.png",
//     name: "Bông tai vàng trắng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_bt_13",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/300/300/detailed/161/gbtpxmw000213-bong-tai-vang-trang-14k-dinh-da-topaz-pnj-1.png",
//     name: "Bông tai vàng trắng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_bt_14",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/300/300/detailed/161/gbtpxmw000213-bong-tai-vang-trang-14k-dinh-da-topaz-pnj-1.png",
//     name: "Bông tai vàng trắng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_bt_15",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/300/300/detailed/161/gbtpxmw000213-bong-tai-vang-trang-14k-dinh-da-topaz-pnj-1.png",
//     name: "Bông tai vàng trắng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_bt_16",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/300/300/detailed/161/gbtpxmw000213-bong-tai-vang-trang-14k-dinh-da-topaz-pnj-1.png",
//     name: "Bông tai vàng trắng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
// ];

function ProductsPage1() {
  return (
    <>
      <Container fluid className="mb-5">
        <Row>
          <Image src={banner_bongtai} className="px-0"></Image>
        </Row>
        <Row>
          <ProductList/>;
        </Row>
      </Container>
    </>
  );
}

export default ProductsPage1;
