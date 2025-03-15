import { Button, Container } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const PreHomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };
  const handleClick2 = () => {
    navigate("/registration");
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center "
      style={{ height: "100vh" }}
    >
      <div id="badge" className="bg-light p-5 badge border">
        <p className="fw-bold fs-5 pb-3 text-black">
          Thank you for being here!
        </p>
        <Button
          className="pre-home-button d-block py-2 w-100 rounded-pill mb-2"
          onClick={handleClick}
        >
          Log in
        </Button>
        <Button
          className="pre-home-button py-2 d-block w-100 rounded-pill"
          onClick={handleClick2}
        >
          Sign up
        </Button>
      </div>
    </Container>
  );
};
export default PreHomePage;
