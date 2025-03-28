import {
  Button,
  Container,
  FormControl,
  Image,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";
import { BiPlus, BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import profileImage from "../assets/download.png";
import { BsBoxArrowRight } from "react-icons/bs";
import { useState } from "react";
import { firstNameProfiles } from "../redux/actions/search";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
const MyNavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstnameQuery, setFirstnameQuery] = useState("");
  const profile = useSelector((state) => state.profile.profile);
  const profileLoading = useSelector((state) => state.profile.profileLoading);
  const profileError = useSelector((state) => state.profile.profileError);
  console.log(profile);

  const handleClick = () => {
    navigate("/newArticle");
  };

  const handleClick1 = () => {
    navigate("/home");
  };
  const handleClick2 = () => {
    navigate("/profile");
  };

  const search = (e) => {
    const firstName = e.target.value;
    setFirstnameQuery(firstName);
    if (firstName.trim() !== "") {
      console.log("Dispatching action to search for:", firstName);
      dispatch(firstNameProfiles(firstName));
    }
  };
  const navigateSearchPage = (e) => {
    if (e.key === "Enter") {
      navigate(`findBy?firstName=${firstnameQuery}`);
    }
  };
  if (profileLoading) return <div>Loading profiles...</div>;
  if (profileError) return <div>Error profiles: {profileError}</div>;
  const profileData = profile[0];
  console.log(profileData);
  return (
    <Navbar expand="md" className="border-bottom">
      <Container
        fluid
        className="d-flex  justify-content-between align-items-center mx-3 mx-md-5"
      >
        <Navbar.Brand
          className="profile-image-home-container d-flex justify-content-center align-items-center "
          style={{ width: "50px", height: "50px" }}
        >
          <Image src={logo} alt="logo" className="" style={{ width: "45px" }} />
        </Navbar.Brand>
        <div className="d-flex d-sm-flex d-md-flex align-items-center d-sm-block d-md-none">
          <FormControl
            type="search"
            placeholder="Search a profile"
            className="me-2 h-100 d-flex rounded-pill border border-2"
            aria-label="Search"
            style={{ width: "200px" }}
            value={firstnameQuery}
            onChange={search}
            onKeyDown={navigateSearchPage}
          />
          <BiSearch className="search-icon fs-2" />
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="w-75 d-flex justify-content-between"
        >
          <Nav>
            <Nav.Link
              onClick={handleClick1}
              className="fw-bold fs-3 text-dark ms-sm-5 ms-md-0"
            >
              Home
            </Nav.Link>
          </Nav>
          {/* </div> */}
          <div className="d-flex align-items-center">
            <Button
              className="new-article-button d-flex align-items-center rounded-pill py-0 bg-transparent text-dark me-3 px-3 py-0 fs-5"
              onClick={handleClick}
            >
              <BiPlus className="me-1" />
              New Article
            </Button>

            <NavDropdown
              title={
                <Image
                  src={profileData?.profileImage || profileImage}
                  className="profile-image-home rounded"
                  style={{ width: "45px", height: "45px" }}
                />
              }
              className="me-sm-5 me-md-3 "
            >
              <Nav.Link
                className="profile-dropdown pt-2 p-1 ps-2 border-bottom "
                onClick={handleClick2}
              >
                Profile
              </Nav.Link>
              <Nav.Link className="profile-dropdown pb-2 p-1 ps-2 d-flex align-items-center">
                Log out <BsBoxArrowRight className="ms-2" />
              </Nav.Link>
            </NavDropdown>
          </div>{" "}
        </Navbar.Collapse>

        <div className="d-md-flex align-items-center d-none d-md-block">
          <FormControl
            type="search"
            placeholder="Search a profile"
            className="me-2 h-100 d-flex rounded-pill border border-2"
            aria-label="Search"
            style={{ width: "200px" }}
            value={firstnameQuery}
            onChange={search}
            onKeyDown={navigateSearchPage}
          />
          <BiSearch className="search-icon fs-2" />
        </div>
      </Container>
    </Navbar>
  );
};
export default MyNavBar;
