import { Container, Row, Image } from "react-bootstrap";
import ProductList from "../Components/Products";
import ImageBanner from "../../../assets/images/Products/Banner.png";

const products = [
  {
    id: "p1",
    productimage:
      "https://cdn.pnj.io/images/thumbnails/300/300/detailed/124/gnxmxmy006396-nhan-vang-18k-dinh-da-cz-pnj.png",
    name: "Nhẫn vàng CZ",
    price: "10.000.000 đ",
    sold: "100 đã bán",
  },
  {
    id: "p2",
    productimage:
      "https://cdn.pnj.io/images/thumbnails/300/300/detailed/124/gnxmxmy006396-nhan-vang-18k-dinh-da-cz-pnj.png",
    name: "Nhẫn vàng CZ",
    price: "10.000.000 đ",
    sold: "100 đã bán",
  },
  {
    id: "p3",
    productimage:
      "https://cdn.pnj.io/images/thumbnails/300/300/detailed/124/gnxmxmy006396-nhan-vang-18k-dinh-da-cz-pnj.png",
    name: "Nhẫn vàng CZ",
    price: "10.000.000 đ",
    sold: "100 đã bán",
  },
  {
    id: "p4",
    productimage:
      "https://cdn.pnj.io/images/thumbnails/300/300/detailed/124/gnxmxmy006396-nhan-vang-18k-dinh-da-cz-pnj.png",
    name: "Nhẫn vàng CZ",
    price: "10.000.000 đ",
    sold: "100 đã bán",
  },
  {
    id: "p5",
    productimage:
      "https://cdn.pnj.io/images/thumbnails/300/300/detailed/124/gnxmxmy006396-nhan-vang-18k-dinh-da-cz-pnj.png",
    name: "Nhẫn vàng CZ",
    price: "10.000.000 đ",
    sold: "100 đã bán",
  },
  {
    id: "p6",
    productimage:
      "https://cdn.pnj.io/images/thumbnails/300/300/detailed/124/gnxmxmy006396-nhan-vang-18k-dinh-da-cz-pnj.png",
    name: "Nhẫn vàng CZ",
    price: "10.000.000 đ",
    sold: "100 đã bán",
  },
  {
    id: "p7",
    productimage:
      "https://cdn.pnj.io/images/thumbnails/300/300/detailed/124/gnxmxmy006396-nhan-vang-18k-dinh-da-cz-pnj.png",
    name: "Nhẫn vàng CZ",
    price: "10.000.000 đ",
    sold: "100 đã bán",
  },
  {
    id: "p8",
    productimage:
      "https://cdn.pnj.io/images/thumbnails/300/300/detailed/124/gnxmxmy006396-nhan-vang-18k-dinh-da-cz-pnj.png",
    name: "Nhẫn vàng CZ",
    price: "10.000.000 đ",
    sold: "100 đã bán",
  },
  {
    id: "p9",
    productimage:
      "https://cdn.pnj.io/images/thumbnails/300/300/detailed/124/gnxmxmy006396-nhan-vang-18k-dinh-da-cz-pnj.png",
    name: "Nhẫn vàng CZ",
    price: "10.000.000 đ",
    sold: "100 đã bán",
  },
  {
    id: "p10",
    productimage:
      "https://cdn.pnj.io/images/thumbnails/300/300/detailed/124/gnxmxmy006396-nhan-vang-18k-dinh-da-cz-pnj.png",
    name: "Nhẫn vàng CZ",
    price: "10.000.000 đ",
    sold: "100 đã bán",
  },
  {
    id: "p11",
    productimage:
      "https://cdn.pnj.io/images/thumbnails/300/300/detailed/124/gnxmxmy006396-nhan-vang-18k-dinh-da-cz-pnj.png",
    name: "Nhẫn vàng CZ",
    price: "10.000.000 đ",
    sold: "100 đã bán",
  },
  {
    id: "p12",
    productimage:
      "https://cdn.pnj.io/images/thumbnails/300/300/detailed/124/gnxmxmy006396-nhan-vang-18k-dinh-da-cz-pnj.png",
    name: "Nhẫn vàng CZ",
    price: "10.000.000 đ",
    sold: "100 đã bán",
  },
  {
    id: "p13",
    productimage:
      "https://cdn.pnj.io/images/thumbnails/300/300/detailed/124/gnxmxmy006396-nhan-vang-18k-dinh-da-cz-pnj.png",
    name: "Nhẫn vàng CZ",
    price: "10.000.000 đ",
    sold: "100 đã bán",
  },
  {
    id: "p14",
    productimage:
      "https://cdn.pnj.io/images/thumbnails/300/300/detailed/124/gnxmxmy006396-nhan-vang-18k-dinh-da-cz-pnj.png",
    name: "Nhẫn vàng CZ",
    price: "10.000.000 đ",
    sold: "100 đã bán",
  },
  {
    id: "p15",
    productimage:
      "https://cdn.pnj.io/images/thumbnails/300/300/detailed/124/gnxmxmy006396-nhan-vang-18k-dinh-da-cz-pnj.png",
    name: "Nhẫn vàng CZ",
    price: "10.000.000 đ",
    sold: "100 đã bán",
  },
  {
    id: "p16",
    productimage:
      "https://cdn.pnj.io/images/thumbnails/300/300/detailed/124/gnxmxmy006396-nhan-vang-18k-dinh-da-cz-pnj.png",
    name: "Nhẫn vàng CZ",
    price: "10.000.000 đ",
    sold: "100 đã bán",
  },
];

function ProductsPage() {
  return (
    <>
      <Container fluid className="mb-5">
        <Row>
          <Image src={ImageBanner} className="px-0"></Image>
        </Row>
        <Row>
          <ProductList products={products} />;
        </Row>
      </Container>
    </>
  );
}

export default ProductsPage;
