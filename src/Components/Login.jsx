import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../redux/actions/login";
import { useNavigate } from "react-router-dom";
import { BsAsterisk } from "react-icons/bs";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  const handleClick1 = () => {
    navigate("/registration");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const login = {
      username: e.target.elements.username.value,
      password: e.target.elements.password.value
    };

    console.log(login);
    dispatch(fetchLogin(login));
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center "
      style={{ height: "100vh" }}
    >
      <div
        id="badge"
        className="bg-light p-5  fw-bold text-dark badge text-start border"
      >
        <h1 className="fw-bold text-dark text-start mb-0 py-2"> Log in</h1>
        <p className="text-secondary mb-4">
          Do not have an account?
          <a onClick={handleClick1} className="login-anchor ms-2">
            Sign up
          </a>
        </p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4">
            <Form.Label>
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
            <Form.Label>
              Password <BsAsterisk className="asterisk" />
            </Form.Label>
            <Form.Control
              id="password"
              type="password"
              className="border border-secondary-subtle"
              placeholder="Enter your password"
            />
          </Form.Group>
          <Button
            className="pre-home-button w-100 "
            type="submit"
            onClick={handleClick}
          >
            Log in
          </Button>
        </Form>
      </div>
    </Container>
  );
};
export default Login;
