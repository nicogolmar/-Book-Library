import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <Container>
        <Navbar.Brand href="#home">Devs</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="https://github.com/nicogolmar">
            <AiFillGithub /> Nico
          </Nav.Link>
          <Nav.Link href="https://github.com/guillescharf">
            <AiFillGithub /> Guille
          </Nav.Link>
          <Nav.Link href="https://github.com/CoyuyoUTN">
            <AiFillGithub /> Gonza
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
