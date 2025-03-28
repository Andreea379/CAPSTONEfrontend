import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { registerUser } from "../redux/actions/registration";
import { BsAsterisk } from "react-icons/bs";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username: e.target.elements.username.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
      firstName: e.target.elements.firstName.value,
      lastName: e.target.elements.lastName.value
    };
    if (
      userData.username &&
      userData.email &&
      userData.password &&
      userData.firstName &&
      userData.lastName
    ) {
      dispatch(registerUser(userData, navigate));
    } else {
      console.log("Please fill all the fields!");
    }
  };

  const handleOnClick = () => {
    navigate("/login");
  };
  const handleOnClick1 = () => {
    navigate("/home");
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center "
      style={{ height: "100vh" }}
    >
      <div
        id="badge"
        className=" p-5  fw-bold text-dark badge text-start border"
      >
        <h1 className="sign-up fw-bold text-dark text-start mb-0 py-2">
          Sign up
        </h1>
        <p className="text-secondary mb-4">
          Already have an account?{" "}
          <a onClick={handleOnClick} className="login-anchor">
            Log in
          </a>
        </p>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col className="me-3">
              <Form.Group className="mb-4">
                <Form.Label className="">
                  Username <BsAsterisk className="asterisk" />
                </Form.Label>
                <Form.Control
                  id="username"
                  type="text"
                  className="border border-secondary-subtle"
                  placeholder="Enter your username"
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="">
                  First Name <BsAsterisk className="asterisk" />
                </Form.Label>
                <Form.Control
                  id="firstName"
                  type="text"
                  className="border border-secondary-subtle"
                  placeholder="Enter your first name"
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="">
                  Password <BsAsterisk className="asterisk" />
                </Form.Label>
                <Form.Control
                  id="password"
                  type="password"
                  className="border border-secondary-subtle"
                  placeholder="Enter your password"
                />
              </Form.Group>
            </Col>
            <Col className="ms-3">
              <Form.Group className="mb-4">
                <Form.Label className="">
                  Email address <BsAsterisk className="asterisk" />
                </Form.Label>
                <Form.Control
                  id="email"
                  type="email"
                  className="border border-secondary-subtle"
                  placeholder="Enter your email address"
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="">
                  Last Name <BsAsterisk className="asterisk" />
                </Form.Label>
                <Form.Control
                  id="lastName"
                  type="text"
                  className="border border-secondary-subtle"
                  placeholder="Enter your last name"
                />
              </Form.Group>
              <Button
                className="pre-home-button w-100 mt-4"
                type="submit"
                onClick={handleOnClick1}
              >
                Sign up
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
};
export default Registration;
