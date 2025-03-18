import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { registerUser } from "../redux/actions/registration";

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
    const avatar = e.target.elements.avatar.files[0];
    if (
      userData.username &&
      userData.email &&
      userData.password &&
      userData.firstName &&
      userData.lastName
    ) {
      dispatch(registerUser(userData, avatar, navigate));
    } else {
      console.log("Please fill all the fields!");
    }
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
        <h1 className="fw-bold text-dark text-start mb-0 py-2"> Sign up</h1>
        <p className="text-secondary mb-4">Insert your credentionls here: </p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4">
            <Form.Label className="">Username</Form.Label>
            <Form.Control
              id="username"
              type="text"
              className="border border-secondary-subtle"
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="">Email address</Form.Label>
            <Form.Control
              id="email"
              type="email"
              className="border border-secondary-subtle"
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="">Password</Form.Label>
            <Form.Control
              id="password"
              type="password"
              className="border border-secondary-subtle"
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="">First Name</Form.Label>
            <Form.Control
              id="firstName"
              type="text"
              className="border border-secondary-subtle"
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="">Last Name</Form.Label>
            <Form.Control
              id="lastName"
              type="text"
              className="border border-secondary-subtle"
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="">Avatar</Form.Label>
            <Form.Control
              id="avatar"
              type="file"
              className="border border-secondary-subtle"
            />
          </Form.Group>
          <Button
            className="pre-home-button w-100 "
            type="submit"
            // onClick={handleClick}
          >
            Sign up
          </Button>
        </Form>
      </div>
    </Container>
  );
};
export default Registration;
