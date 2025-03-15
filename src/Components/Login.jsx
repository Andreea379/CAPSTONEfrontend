import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../redux/actions/login";

const Login = () => {
  const dispatch = useDispatch();

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
        <p className="text-secondary mb-4">Insert your credentionls here: </p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4">
            <Form.Label className="">Username</Form.Label>
            <Form.Control
              // id="login-form"
              id="username"
              type="text"
              className="border border-secondary-subtle"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              // id="login-form"
              id="password"
              type="password"
              className="border border-secondary-subtle"
            />
          </Form.Group>
          <Button className="pre-home-button w-100 " type="submit">
            Log in
          </Button>
        </Form>
      </div>
    </Container>
  );
};
export default Login;
