// import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from "../redux/actions/registration";
import { Button, Container, Form } from "react-bootstrap";
// import { useState } from "react";
import { registerUser } from "../redux/actions/registration";

const Registration = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [avatar, setAvatar] = useState("");
  //   {
  //   username: "",

  //   email: "",
  //   password: "",
  //   firstName: "",
  //   lastName: "",
  //   avatar: null
  // }
  // );

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userData, [name]: value });
  // };

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
      dispatch(registerUser(userData, avatar));
    } else {
      console.log("Please fill all the fields!");
    }
  };
  // useEffect(() => {
  //   if (isOpen) {
  //     if (registrationData) {
  //       setUserData({
  //         username: registrationData.username || "",
  //         email: registrationData.email || "",
  //         password: registrationData.password || "",
  //         firstName: registrationData.firstName || "",
  //         lastName: registrationData.lastName || ""
  //       });
  //     } else {
  //       setUserData({
  //         username: "",
  //         email: "",
  //         password: "",
  //         firstName: "",
  //         lastName: ""
  //       });
  //     }
  //   }
  // }, [isOpen, registrationData]);

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
              // value={username}
              // onChange={(event) => {
              //   setUsername(event.target.value);
              // }}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="">Email address</Form.Label>
            <Form.Control
              id="email"
              type="email"
              className="border border-secondary-subtle"
              // value={email}
              // onChange={(event) => {
              //   setEmail(event.target.value);
              // }}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="">Password</Form.Label>
            <Form.Control
              id="password"
              type="password"
              className="border border-secondary-subtle"
              // value={password}
              // onChange={(event) => {
              //   setPassword(event.target.value);
              // }}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="">First Name</Form.Label>
            <Form.Control
              id="firstName"
              type="text"
              className="border border-secondary-subtle"
              // value={firstName}
              // onChange={(event) => {
              //   setFirstName(event.target.value);
              // }}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="">Last Name</Form.Label>
            <Form.Control
              id="lastName"
              type="text"
              className="border border-secondary-subtle"
              // value={lastName}
              // onChange={(event) => {
              //   setLastName(event.target.value);
              // }}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="">Avatar</Form.Label>
            <Form.Control
              id="avatar"
              type="file"
              className="border border-secondary-subtle"
              // value={avatar}
              // onChange={(event) => {
              //   setAvatar(event.target.value);
              // }}
            />
          </Form.Group>
          <Button
            className="pre-home-button w-100 "
            type="submit"
            // onClick={handleInputChange}
          >
            Sign up
          </Button>
        </Form>
      </div>
    </Container>
  );
};
export default Registration;
