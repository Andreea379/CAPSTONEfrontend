import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const MyNavBar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/newArticle");
  };
  return (
    <Navbar expand="lg" className="border-bottom">
      <Container fluid>
        <div className="d-flex align-items-center">
          <div>
            <Navbar.Brand href="#home">Capstone</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
        <div className="d-flex align-items-center">
          <Button
            className="new-article-button d-flex align-items-center rounded-pill py-0 bg-transparent text-dark me-3"
            onClick={handleClick}
          >
            <BiPlus className="" />
            New Article
          </Button>
          <Nav.Link href="#home">profile</Nav.Link>
        </div>
      </Container>
    </Navbar>
  );
};
export default MyNavBar;
