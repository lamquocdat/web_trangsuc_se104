import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { ListGroup, ListGroupItem, Badge } from 'react-bootstrap';
import { Form, FormControl } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import { yellow } from '@mui/material/colors';
import Modal from 'react-bootstrap/Modal';
function Product() {
  const scrollRef = useRef(null);
  const { id } = useParams(); //lấy id từ url
  const [product, setProduct] = useState(); //lấy sản phẩm từ api
  const [sl, setSL] = useState(1); //lấy số lượng sản phẩm người dùng muốn thêm vào giỏ hàng
  const idUserString = localStorage.getItem('_id');
  const navigate = useNavigate();
  //hàm tăng số lượng sản phẩm
  const HandleIncreaseSL = () => {
    setSL((prevSL) => prevSL + 1);
  };

  //hàm giảm số lượng sản phẩm
  const HandleDecreaseSL = () => {
    if (sl !== 1) setSL((prevSL) => prevSL - 1);
  };

  //lấy thông tin sản phẩm
  useEffect(() => {
    axios
      .get(`https://dialuxury.onrender.com/product/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  //thêm sản phẩm vào giỏ hàng
  const AddToCart = async () => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (token && role === 'user') {
      await axios
        .post('https://dialuxury.onrender.com/cart', {
          userId: idUserString,
          productid: product.productid,
          soluong: sl,
        })
        .then((res) => {
          console.log('Mua thành công');
        })
        .catch((e) => {
          console.log('Mua thất bại');
          console.log(e);
        });
    } else {
      navigate('/login');
    }
  };

  //lấy thông tin người dùng
  const [user, setUser] = useState();
  useEffect(() => {
    axios
      .get(`https://dialuxury.onrender.com/user/${idUserString}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  });
  //lấy thông tin bình luận về sản phẩm này
  const pagesize = 10; // mỗi trang có bao nhiêu phần tử
  const [currentPage, setCurrentPage] = useState(1); //trang hiện tại
  const [totalPage, setTotalPage] = useState(1); //tổng số trang
  const [totalComment, setTotalComment] = useState(1);
  const [pageRange, setPageRange] = useState([1]); //dải phân trang
  const [isLeftMost, setIsLeftMost] = useState(false); //nút mũi tên trái
  const [isRightMost, setIsRightMost] = useState(false); //nút mũi tên phải
  const [commentList, setCommentList] = useState();
  useEffect(() => {
    if (product !== undefined)
      axios
        .get(
          `https://dialuxury.onrender.com/danhgia/${
            product.productid
          }?perPage=${pagesize}&page=${currentPage - 1}&sortOrder=desc`
        )
        .then((res) => {
          setCommentList(res.data.listDanhGia);
          setTotalPage(res.data.pages);
          setTotalComment(res.data.totalDG);
        })
        .catch((e) => {
          console.log(e);
        });
  }, [pagesize, currentPage, product]);

  //lấy số điểm đánh giá từ các bình luận
  const [diem, setDiem] = useState(5);
  useEffect(() => {
    if (commentList !== undefined) {
      let rating = 0;
      for (const comment of commentList) rating += comment.rating;
      setDiem(Math.ceil(rating / totalComment));
    }
  }, [commentList]);

  //hàm chuyển trang
  const changePage = (index) => {
    window.scrollTo(0, 0);
    if (index !== currentPage) setCurrentPage(index);
  };

  //hàm chuyển sang trang trước đó
  const decreasePage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  //hàm chuyển sang trang phía sau
  const increasePage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  //hàm đi đến trang đầu tiên
  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  //hàm đi đên trang cuối cùng
  const goToLastPage = () => {
    setCurrentPage(totalPage);
  };

  //xử lý thay đổi trang
  useEffect(() => {
    if (totalPage === 1) {
      setIsLeftMost(true);
      setIsRightMost(true);
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (currentPage === 1) {
      setIsLeftMost(true);
      setIsRightMost(false);
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (currentPage === totalPage) {
      setIsRightMost(true);
      setIsLeftMost(false);
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsLeftMost(false);
      setIsRightMost(false);
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    const arr = [];
    for (let i = currentPage - 2; i <= currentPage + 2; i++)
      if (i >= 1 && i <= totalPage) arr.push(i);
    setPageRange(arr);
  }, [currentPage, totalPage]);

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const HandleChangeComment = (e) => {
    setComment(e.target.value);
  };
  const HandleChangeRating = (e) => {
    setRating(e.target.value);
  };

  //Gửi bình luận
  const SendComment = async () => {
    axios
      .post('https://dialuxury.onrender.com/danhgia', {
        productid: product.productid,
        userid: user._id,
        name: user.name,
        content: comment,
        rating: rating,
      })
      .then((res) => {})
      .catch((e) => {
        console.log(e);
      });
  };

  //xóa bình luận
  const deleteReview = (reviewId) => {
    axios
      .delete(`https://dialuxury.onrender.com/danhgia/${reviewId}`)
      .then((response) => {
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //sửa bình luận
  const [editContent, setEditContent] = useState('');
  const [editRating, setEditRating] = useState(5);
  const handleChangeEditContent = (e) => {
    setEditContent(e.target.value);
  };
  const handleChangeEditRating = (e) => {
    setEditRating(e.target.value);
  };
  const [show, setShow] = useState(false);
  const [reviewId, setReviewId] = useState('');
  const handleClose = () => {
    setShow(false);
    setEditContent('');
    setEditRating(5);
  };
  const handleShow = (id) => {
    setReviewId(id);
    setShow(true);
  };
  const handleSave = () => {
    axios
      .put(`https://dialuxury.onrender.com/danhgia/${reviewId}`, {
        content: editContent,
        rating: editRating,
      })
      .then((res) => {
        setShow(false);
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //hàm fomat định dạng tiền việt nam
  const formatCurrency = (value) => {
    const formattedValue = value
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `${formattedValue} đ`;
  };
  //hàm lấy giờ , phút, ngay tháng năm của updateAt
  const fomatTime = (value) => {
    const date = new Date(value);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}   ${day}/${month}/${year}`;
  };

  return (
    <Container>
      <div ref={scrollRef} />
      <Row className="align-align-items-center justify-content-center">
        <Col md={4}>
          <Image src={product?.image || ''} alt="Hình ảnh sản phẩm" fluid />
        </Col>
        <Col md={6}>
          <h2>{product?.name || 'Product'}</h2>
          <p>Mã: {product?.productid || 'Product'}</p>
          <p>
            Điểm đánh giá:{' '}
            <span>
              {diem !== undefined &&
                [...Array(diem)].map((_, index) => (
                  <StarIcon
                    key={index}
                    sx={{ color: yellow[500], fontSize: 20 }}
                  />
                ))}
              {totalComment !== undefined && <span>({totalComment})</span>}
            </span>
          </p>
          <Row>
            <Col md={2}>
              <p>Đã bán: {product?.quantity_sold}</p>
            </Col>
            <Col>
              <p>Còn hàng: {product?.quantity} </p>
            </Col>
          </Row>
          <h4>Giá: {formatCurrency(product?.price || 1000000)}</h4>
          <div className="d-flex align-align-items-center mb-3">
            <span className="me-3">Số lượng:</span>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={HandleDecreaseSL}
            >
              -
            </Button>
            <span className="mx-3">{sl}</span>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={HandleIncreaseSL}
            >
              +
            </Button>
          </div>
          <Button
            variant="primary"
            size="md"
            className="mb-3"
            onClick={AddToCart}
          >
            Thêm vào giỏ hàng <br />
          </Button>
        </Col>
      </Row>
      <div>
        <h3>Thông số</h3>
        <Row>
          <Col md={4}>
            <ListGroup className="w-100">
              <ListGroupItem>
                <strong>Chất liệu: </strong>{' '}
                {product?.quality || 'Chưa có thông số'}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Khối lượng: </strong>{' '}
                {product?.mass || 'Chưa có thông số'}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Kích thước: </strong>{' '}
                {product?.size || 'Chưa có thông số'}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Màu sắc: </strong>{' '}
                {product?.color || 'Chưa có thông số'}
              </ListGroupItem>
              {/* <ListGroupItem>
            <strong>Giá:</strong> 1,200,000đ <Badge variant="danger">-10%</Badge>
          </ListGroupItem> */}
            </ListGroup>
          </Col>
        </Row>
      </div>
      {/* <h3 className="mt-3">Bình luận</h3> */}
      <Form>
        {/* <Form.Group controlId="formBasicEmail">
        <Form.Label>Nhập tên của bạn:</Form.Label>
        <FormControl type="text" placeholder="Nhập tên của bạn" />
      </Form.Group> */}

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="mt-4">Nhập bình luận của bạn:</Form.Label>
          <br />
          <FormControl
            as="textarea"
            placeholder="Nhập bình luận của bạn"
            value={comment}
            onChange={HandleChangeComment}
          />
          <Form.Label className="mt-1">Số điểm đánh giá:</Form.Label>
          <FormControl
            style={{ width: 50, height: 30 }}
            as="input"
            type="number"
            min={1}
            max={5}
            step={1}
            value={rating}
            onChange={HandleChangeRating}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="mt-3 mb-3"
          onClick={SendComment}
        >
          Gửi bình luận
        </Button>
      </Form>
      <h2>Bình luận</h2>
      <div>
        {commentList !== undefined &&
          commentList.map((item) => {
            return (
              <div
                key={item._id}
                className="border border-secondary p-2 rounded my-1"
              >
                <p className="fw-bold m-0">
                  {item.name} <span>({fomatTime(item.updatedAt)})</span>
                </p>
                {[...Array(item.rating)].map((_, index) => (
                  <StarIcon
                    key={index}
                    sx={{ color: yellow[500], fontSize: 20 }}
                  />
                ))}
                <p className="my-1">{item.content}</p>
                {user !== undefined && item.userid === user._id && (
                  <div>
                    <Button
                      variant="warning"
                      className="me-2"
                      onClick={() => handleShow(item._id)}
                    >
                      {' '}
                      Edit{' '}
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => deleteReview(item._id)}
                    >
                      Delete
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        {/* Phân trang */}
        {totalPage !== 0 && (
          <div className="d-flex align-items-center ms-1 justify-content-center gap-3 mt-5">
            <div className="d-flex align-items-center ms-1 justify-content-center gap-3 w-25">
              {!isLeftMost && (
                <>
                  <div
                    onClick={goToFirstPage}
                    className="d-flex align-items-center justify-content-center bg-light rounded hover:bg-primary fs-6 text-secondary hover:text-white w-25 h-25 pe-auto user-select-none"
                  >
                    <KeyboardDoubleArrowLeft />
                  </div>
                  <div
                    onClick={decreasePage}
                    className="d-flex align-items-center justify-content-center bg-light rounded hover:bg-primary fs-6 text-secondary hover:text-white w-25 h-25 pe-auto user-select-none"
                  >
                    <KeyboardArrowLeft />
                  </div>
                </>
              )}
              {pageRange.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`d-flex align-items-center justify-content-center rounded fs-6 text-secondary w-25 h-25 pe-auto user-select-none ${
                      item === currentPage
                        ? 'text-white bg-primary'
                        : 'bg-light hover:text-white hover:bg-primary'
                    }`}
                    onClick={() => changePage(item)}
                  >
                    {item}
                  </div>
                );
              })}
              {!isRightMost && (
                <>
                  <div
                    onClick={increasePage}
                    className="d-flex align-items-center justify-content-center bg-light rounded hover:bg-primary fs-6 text-secondary hover:text-white w-25 h-25 pe-auto user-select-none"
                  >
                    <KeyboardArrowRight />
                  </div>
                  <div
                    onClick={goToLastPage}
                    className="d-flex align-items-center justify-content-center bg-light rounded hover:bg-primary fs-6 text-secondary hover:text-white w-25 h-25 pe-auto user-select-none"
                  >
                    <KeyboardDoubleArrowRight />
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Chỉnh sửa bình luận</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Số điểm đánh giá</Form.Label>
              <Form.Control
                as="input"
                type="number"
                min={1}
                max={5}
                step={1}
                value={editRating}
                onChange={handleChangeEditRating}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Nội dung</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={editContent}
                onChange={handleChangeEditContent}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Product;
