import { Container, Navbar, Nav, Image, Form, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarMeteo = () => {
  return (
    <Container fluid>
      <Navbar bg="info" expand="lg" className="px-3 rounded">
        <Image src="./assets/Meteo.png" style={{ width: "150px" }} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link className="nav-link" to="/">
              Previsioni
            </Link>
            <Nav.Link href="#link">Regioni</Nav.Link>
            <Nav.Link href="#link">Notizie</Nav.Link>
            <Nav.Link href="#link">Info</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div id="search" className="p-5 m-3 rounded">
        <Form.Control
          type="search"
          placeholder="🔍 Cerca località"
          className="mx-auto"
          aria-label="Search"
          style={{ width: "50%" }}
        />
        <div className="d-flex justify-content-evenly m-5 flex-wrap">
          <Link className="my-2" to={"/roma-previsioni"}>
            <Badge>
              <h4>☀️ Trevi</h4>
            </Badge>
          </Link>
          <Link className="my-2" to={"/milano-previsioni"}>
            <Badge>
              <h4>🌥️ Milano</h4>
            </Badge>
          </Link>
          <Link className="my-2" to={"/napoli-previsioni"}>
            <Badge>
              <h4>☁️ Napoli</h4>
            </Badge>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default NavbarMeteo;
