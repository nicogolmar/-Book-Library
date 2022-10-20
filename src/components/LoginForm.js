import { useState } from "react";
import { login } from "../Features/sysConfig/sysConfigSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "antd";
import { ToastContainer, toast } from "react-toastify";

const LoginForm = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });

  const notifySuccess = () => {
    toast("Login successfully!");
  };

  const notifyfailed = () => {
    toast("Login incorrect!");
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    var result = users.find((findUser) => findUser.email === user.email);

    if (result && (result.password == user.password) ) {
      dispatch(
        login({
          name: result.name,
          id: result.id,
        })
      );
      notifySuccess();
      handleCancel();
    } else {
      notifyfailed();
    }

    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Login
      </Button>
      <Modal
        title="Login"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button type="primary" onClick={() => handleSubmit()}>
            Login
          </Button>,
        ]}
        centered
      >
        <div className="container mt-5 pt-4">
          <form
            onSubmit={handleSubmit}
            name="LoginForm"
            id="LoginForm"
            className="form-group center ut"
          >
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                name="email"
                type="email"
                className="form-control inputbox"
                id="exampleInputEmail1"
                placeholder="Enter email"
                value={user.email}
                onChange={handleChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                name="password"
                type="password"
                className="form-control inputbox"
                id="exampleInputPassword1"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
      </Modal>
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
    </>
  );
};

export default LoginForm;
