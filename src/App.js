import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CallJson from "./components/CallJson";
import DetailBook from "./components/DetailBook";

import "antd/dist/antd.css";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <CallJson />
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/register/" element={<RegisterForm />} />
          <Route path="/login/" element={<LoginForm />} />
          <Route path="/DetailBook/:id" element={<DetailBook />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
