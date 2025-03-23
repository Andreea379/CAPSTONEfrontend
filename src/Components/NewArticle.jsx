import {
  Button,
  Container,
  FloatingLabel,
  Form,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";
import { BsPlus, BsPlusSquare } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newArticle } from "../redux/actions/newArticle";

const NewArticle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const articleData = {
      title: e.target.elements.title.value,
      content: e.target.elements.content.value,
      category: e.target.elements.category.value
    };
    const articleImage = e.target.elements.articleImage.files[0];
    console.log(articleData, articleImage);
    if (articleData.title && articleData.content && articleData.category) {
      dispatch(newArticle(articleData, articleImage, navigate));
    } else {
      console.log("Please fill all the fields!");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="d-flex justify-content-center">
        <Navbar expand="lg" className="border-bottom w-100">
          <Container fluid>
            <div className="d-flex align-items-center">
              <div>
                <Navbar.Brand id="logo">Capstone</Navbar.Brand>
              </div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
            <div className="d-flex align-items-center">
              <Button
                className="new-article-button d-flex align-items-center rounded-pill py-0 bg-transparent text-dark me-3"
                type="submit"
              >
                Publish
              </Button>
              {/* <Button className="new-article-button d-flex align-items-center rounded-pill py-0 bg-transparent text-dark me-3">
                Save as draft
              </Button> */}
              <Nav.Link href="#home">profile</Nav.Link>
            </div>
          </Container>
        </Navbar>
      </div>
      <Container className="d-flex justify-content-center mt-5">
        <div className="w-75">
          <div className="d-flex flex-row justify-content-between w-100 mb-2">
            <div className="file-upload-button-container">
              <Form.Control
                type="file"
                id="articleImage"
                className="file-input d-none"
              />
              <Button
                variant="primary"
                onClick={() => document.getElementById("articleImage").click()}
                className="new-article-button bg-transparent py-0 ps-1 d-flex align-items-center text-dark rounded-pill"
              >
                <BsPlus className="text-dark fs-5" />
                Add an image
              </Button>
            </div>

            <div className="d-flex justify-content-end align-items-center">
              <p className="p-0 m-0">Insert the category of your article:</p>
              <Form.Control
                type="textarea"
                id="category"
                placeholder="Category"
                style={{ height: "29px" }}
                className="category-input ms-2 ps-2 border-0 rounded-3 text-dark"
              />
            </div>
          </div>
          <FloatingLabel label="Title" id="title">
            <Form.Control
              as="textarea"
              placeholder="Title"
              id="title"
              style={{ height: "101px" }}
              className="title-input text-dark border-0"
            />
          </FloatingLabel>

          <FloatingLabel label="Content">
            <Form.Control
              as="textarea"
              id="content"
              placeholder="Content"
              className="content-input text-dark border-0"
              style={{ height: "600px" }}
            />
          </FloatingLabel>
        </div>
      </Container>
    </Form>
  );
};
export default NewArticle;
