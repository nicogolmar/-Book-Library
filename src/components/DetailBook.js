import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../Features/books/booksSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Layout } from "antd";
import "../Styles/detail.css";
import { Button } from "antd";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UpdateBook from "./UpdateBook";
import CallJson from "./CallJson";
const { Content } = Layout;

const DetailBook = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: 0,
    imageLink: "",
    id: "",
  });
  const notify = () => {
    toast("Book was deleted successfully");
  };
  const books = useSelector((state) => state.books);
  const sysInfo = useSelector((state) => state.sysConfig);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("params", id);

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
    setTimeout(() => {
      navigate("/home");
    }, 2000);
    notify();
  };

  useEffect(() => {
    if (id) {
      const bookFound = books.find((book) => book.id == id);
      if (bookFound) {
        setBook(books.find((book) => book.id == id));
        console.log("book", book);
      }
    }
  }, [id, books]);

  return (
    <Layout>
      <Content className="main-container">
        <CallJson />
        <Row className="align-items-end row-container  ">
          <Col
            xs={6}
            md={6}
            sm={3}
            className="justify-content-md-center img-container animate__animated animate__fadeInTopLeft"
          >
            <img src={book.imageLink} className="detail-img" alt="" />
            {sysInfo.logued && (
              <>
                <Button
                  className="detail-button"
                  onClick={() => handleDelete(book.id)}
                >
                  Delete
                </Button>
                <UpdateBook />
              </>
            )}
          </Col>
          <Col
            xs={12}
            md={6}
            className="content-description animate__animated animate__fadeInRightBig"
          >
            <h1 className="detail-title">{book.title}</h1>
            <p className="detail-description">{book.description}</p>
            <p className="detail-price">Price: ${book.price}</p>
          </Col>

          <ToastContainer
            position="top-left"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Row>
      </Content>
    </Layout>
  );
};

export default DetailBook;
