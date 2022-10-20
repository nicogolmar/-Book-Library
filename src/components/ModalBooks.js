import { Button, Modal } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../Features/books/booksSlice";
import { v4 as uuid } from "uuid";


const ModalBooks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [book, setBook] = useState({
    id: uuid(),
    author: "",
    title: "",
    imageLink: "",
    year: "00/00/00",
    price: 0,
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


  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setBook({ ...book, [name]: value });
  };
  const action = () => {
    console.log("aqui validacion", book);
  
    dispatch(addBook(book));
    handleCancel();
  };

  const dispatch = useDispatch();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    action();
  };

  return (
    <>
      <Button type="primary" onClick={showModal} className="btn-main">
        Add Book
      </Button>
      <Modal
        title="Add Book"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[<Button onClick={handleCancel}>Cancelar</Button>]}
        centered
      >
        <div className="center">
          <form onSubmit={handleSubmit}>
            <div className="inputbox">
              <input
                id="title"
                type="text"
                name="title"
                placeholder="Title"
                maxlength={60}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputbox">
              <input
                type="text"
                name="imageLink"
                placeholder="imageLink"
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputbox">
              <input
                type="text"
                name="author"
                placeholder="Author"
                maxlength={30}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputbox">
              <input
                type="date"
                name="year"
                placeholder="Year"
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputbox">
              <input
                type="number"
                name="price"
                placeholder="Price"
                max={100000}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputbox">
              <textarea
                name="description"
                placeholder="Description"
                rows={2}
                cols={35}
                maxlength={100}
                onChange={handleChange}
              />
            </div>
            <div className="inputbox">
              <button type="submit">Add</button>
            </div>
            <div className="inputbox bl">
              <button type="reset">Clear</button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ModalBooks;
