import {
  Button,
  Container,
  FloatingLabel,
  Form,
  Image,
  Nav,
  Navbar
} from "react-bootstrap";
import { BsPlus } from "react-icons/bs";

import logo from "../assets/logo.svg";

import profileImage from "../assets/download.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newArticle } from "../redux/actions/newArticle";
import { BiCamera } from "react-icons/bi";

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
  const handleClick = () => {
    navigate("/profile");
  };

  const handleClick1 = () => {
    navigate("/home");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div className="d-flex justify-content-center">
        <Container
          fluid
          className="border-bottom w-100 d-flex justify-content-between align-items-center py-2"
        >
          <div className="d-flex justify-content-center align-items-center ms-5 ">
            <Image
              src={logo}
              alt="logo"
              className="text-primary me-2"
              style={{ width: "45px" }}
            />
            <span
              onClick={handleClick1}
              className="fw-bold fs-4 text-dark  ms-0"
            >
              Home
            </span>
          </div>
          <div className="d-flex align-items-center">
            <Button
              className="new-article-button d-flex align-items-center rounded-pill py-0 bg-transparent text-dark me-3"
              type="submit"
              onClick={handleClick}
            >
              Publish
            </Button>

            <Image
              src={profileImage}
              className="profile-image-home rounded me-5"
              style={{ width: "45px", height: "45px" }}
              onClick={handleClick}
            />
          </div>
        </Container>
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
                className="new-article-button bg-transparent py-0 ps-1 d-flex align-items-center text-dark rounded-pill "
              >
                <span className="d-none d-md-block">
                  <BsPlus className="text-dark fs-5" />
                  Add an image
                </span>
                <span className="d-sm-block d-md-none ps-1 fs-5">
                  <BiCamera />
                </span>
              </Button>
            </div>

            <div className="d-flex justify-content-end align-items-center">
              <span className="p-0 m-0 d-none d-lg-block">
                Insert the category of your article:
              </span>
              <span className="d-sm-block d-lg-none">Category:</span>
              <Form.Control
                type="textarea"
                id="category"
                placeholder="Category"
                style={{ height: "29px" }}
                className="category-input ms-2 ps-2 border-0 rounded-3 text-dark w-25"
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
