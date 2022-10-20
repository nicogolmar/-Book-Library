import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Logout from "./Logout";

const NavBar = () => {
  const sysInfo = useSelector((state) => state.sysConfig);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to={"/home"} className="nav-link">
              LIBRARY!
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </Nav>
            <Nav>
              <Navbar.Collapse className="justify-content-end">
                {sysInfo.logued ? (
                  <>
                    <Navbar.Text>
                      Signed in as: {sysInfo.userName} /
                    </Navbar.Text>
                    <Nav>
                      <Logout />
                    </Nav>
                  </>
                ) : (
                  <Nav className="gp">
                    <LoginForm />
                    <RegisterForm />
                  </Nav>
                )}
              </Navbar.Collapse>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
