import { Button, Modal, Form, Input } from "antd";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateBook } from "../Features/books/booksSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateBook = () => {
  const { Item } = Form;
  const { TextArea } = Input;
  const books = useSelector((state) => state.books);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const notify = (notificationText) => {
    toast(notificationText);
  };

  const [book, setBook] = useState({
    id: "",
    author: "",
    title: "",
    imageLink: "",
    year: 0,
    description: "",
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setBook({ ...book, [name]: value });
  };
  const handleUpdate = () => {
    if (id) {
      dispatch(updateBook(book));
    }
    handleCancel();
    notify("Book was updated successfully");
  };
  useEffect(() => {
    if (id) {
      setBook(books.find((book) => book.id == id));
    }
  }, [id]);

  const dispatch = useDispatch();

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Edit book
      </Button>
      <Modal
        title="Update Book"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button onClick={handleCancel}>Cancelar</Button>,
          <Button type="primary" onClick={() => handleUpdate()}>
            Update
          </Button>,
        ]}
        centered
      >
        <Form {...layout}>
          <Item label="Title">
            <Input name="title" onChange={handleChange} value={book.title} />
          </Item>
          <Item label="Image">
            <Input
              name="imageLink"
              onChange={handleChange}
              value={book.imageLink}
            />
          </Item>
          <Item label="Author">
            <Input name="author" onChange={handleChange} value={book.author} />
          </Item>
          <Item label="Year">
            <Input name="year" onChange={handleChange} value={book.year} />
          </Item>
          <Item label="Price">
            <Input name="price" onChange={handleChange} value={book.price} />
          </Item>
          <Item label="Description">
            <TextArea
              rows={4}
              name="description"
              onChange={handleChange}
              value={book.description}
            />
          </Item>
        </Form>
      </Modal>
    </>
  );
};
export default UpdateBook;
