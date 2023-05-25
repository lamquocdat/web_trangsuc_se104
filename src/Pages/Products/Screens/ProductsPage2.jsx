import { Container, Row, Image } from "react-bootstrap";
import ProductList from "../Components/Products";
import banner_daychuyen from "../../../assets/images/Products/banner_daychuyen.png";

// const products = [
//   {
//     id: "p_dc_1",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/485/485/detailed/119/gcxmxmy000021-day-co-vang-18k-dinh-da-cz-pnj-hinh-trai-tim-001.png",
//     name: "Dây chuyền vàng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_dc_2",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/485/485/detailed/119/gcxmxmy000021-day-co-vang-18k-dinh-da-cz-pnj-hinh-trai-tim-001.png",
//     name: "Dây chuyền vàng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_dc_3",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/485/485/detailed/119/gcxmxmy000021-day-co-vang-18k-dinh-da-cz-pnj-hinh-trai-tim-001.png",
//     name: "Dây chuyền vàng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_dc_4",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/485/485/detailed/119/gcxmxmy000021-day-co-vang-18k-dinh-da-cz-pnj-hinh-trai-tim-001.png",
//     name: "Dây chuyền vàng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_dc_5",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/485/485/detailed/119/gcxmxmy000021-day-co-vang-18k-dinh-da-cz-pnj-hinh-trai-tim-001.png",
//     name: "Dây chuyền vàng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_dc_6",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/485/485/detailed/119/gcxmxmy000021-day-co-vang-18k-dinh-da-cz-pnj-hinh-trai-tim-001.png",
//     name: "Dây chuyền vàng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_dc_7",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/485/485/detailed/119/gcxmxmy000021-day-co-vang-18k-dinh-da-cz-pnj-hinh-trai-tim-001.png",
//     name: "Dây chuyền vàng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_dc_8",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/485/485/detailed/119/gcxmxmy000021-day-co-vang-18k-dinh-da-cz-pnj-hinh-trai-tim-001.png",
//     name: "Dây chuyền vàng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_dc_9",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/485/485/detailed/119/gcxmxmy000021-day-co-vang-18k-dinh-da-cz-pnj-hinh-trai-tim-001.png",
//     name: "Dây chuyền vàng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_dc_10",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/485/485/detailed/119/gcxmxmy000021-day-co-vang-18k-dinh-da-cz-pnj-hinh-trai-tim-001.png",
//     name: "Dây chuyền vàng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_dc_11",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/485/485/detailed/119/gcxmxmy000021-day-co-vang-18k-dinh-da-cz-pnj-hinh-trai-tim-001.png",
//     name: "Dây chuyền vàng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_dc_12",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/485/485/detailed/119/gcxmxmy000021-day-co-vang-18k-dinh-da-cz-pnj-hinh-trai-tim-001.png",
//     name: "Dây chuyền vàng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_dc_13",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/485/485/detailed/119/gcxmxmy000021-day-co-vang-18k-dinh-da-cz-pnj-hinh-trai-tim-001.png",
//     name: "Dây chuyền vàng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_dc_14",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/485/485/detailed/119/gcxmxmy000021-day-co-vang-18k-dinh-da-cz-pnj-hinh-trai-tim-001.png",
//     name: "Dây chuyền vàng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_dc_15",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/485/485/detailed/119/gcxmxmy000021-day-co-vang-18k-dinh-da-cz-pnj-hinh-trai-tim-001.png",
//     name: "Dây chuyền vàng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
//   {
//     id: "p_dc_16",
//     productimage:
//       "https://cdn.pnj.io/images/thumbnails/485/485/detailed/119/gcxmxmy000021-day-co-vang-18k-dinh-da-cz-pnj-hinh-trai-tim-001.png",
//     name: "Dây chuyền vàng",
//     price: "10.000.000 đ",
//     sold: "100 đã bán",
//   },
// ];

function ProductsPage2() {
  return (
    <>
      <Container fluid className="mb-5">
        <Row>
          <Image src={banner_daychuyen} className="px-0"></Image>
        </Row>
        <Row>
          <ProductList/>;
        </Row>
      </Container>
    </>
  );
}

export default ProductsPage2;
