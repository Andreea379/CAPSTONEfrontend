import { Button, Col, Container, Image, Row } from "react-bootstrap";
import profileImage from "../assets/logo.svg";
import MyNavBar from "./MyNavBar";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ProfileModal from "./ProfileModal";
import { useEffect } from "react";
import { fetchProfile } from "../redux/actions/profile";
import { BsPencilSquare } from "react-icons/bs";

const Profile = () => {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.profile.profile);
  const profileLoading = useSelector((state) => state.profile.profileLoading);
  const profileError = useSelector((state) => state.profile.profileError);
  console.log(profile);
  const [modalShow, setModalShow] = useState(false);
  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);

  const callNewGet = useSelector((state) => state.profile.callNewGet);
  console.log(callNewGet);
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  useEffect(() => {
    console.log(callNewGet);
    if (callNewGet) {
      dispatch(fetchProfile());
    }
  }, [dispatch, callNewGet]);

  if (profileLoading) return <div>Loading profiles...</div>;
  if (profileError) return <div>Error profiles: {profileError}</div>;

  const profileData = profile[0];
  const articles = profileData?.article || [];
  return (
    <>
      <MyNavBar />
      <Container
        className="d-flex justify-content-center align-items-center "
        style={{ marginTop: "5%" }}
      >
        <div id="badge" className="bg-light p-5 badge border w-75">
          <Row className="text-dark d-flex align-self-start m-0 p-0 border-bottom">
            <Row className="d-md-block d-lg-none d-flex justify-content-end align-items-center">
              <Col
                sm={14}
                md={12}
                className="d-flex justify-content-end align-items-center ms-4 ps-5"
              >
                <div>
                  <Button
                    className="bg-transparent border-0 text-dark d-flex justify-content-end align-items-center"
                    onClick={handleShow}
                  >
                    <BsPencilSquare className="pencil-profile fs-4 ms-xl-5" />
                  </Button>

                  <ProfileModal show={modalShow} handleClose={handleClose} />
                </div>
              </Col>
            </Row>
            <Col sm={12} md={12} lg={2} className="me-lg-5 ps-xl-4 ">
              <div className="profile-image-profile-container text-center mb-4 mx-auto mx-lg-0">
                <Image
                  src={profileData?.profileImage || profileImage}
                  className="profile-image-home rounded "
                />
              </div>
            </Col>

            <Col
              sm={12}
              md={12}
              lg={5}
              className="text-lg-start text-center pt-3 me-xxl-5 pb-sm-3"
            >
              <h4 className="pt-0 mt-0 fw-bold fs-1">
                {profileData?.firstName || "Untitled Article"}{" "}
                {profileData?.lastName || "Untitled Article"}
              </h4>
              <div className="mb-2">
                <span className=" fw-bold fs-5 ">Profession:</span>
                <span className="fs-6 ms-lg-2">
                  {profileData?.profession || ""}
                </span>
              </div>
              <div className=" pb-sm-2">
                <span className="fw-bold fs-5">Description:</span>
                <span className="fs-6 ms-2 pb-sm-3">
                  {profileData?.description || ""}
                </span>
              </div>
              <div>
                <u style={{ color: "rgb(246, 157, 75)" }}>
                  <span
                    className="fs-6 pb-sm-3 fw-bold my-5"
                    style={{ color: "rgb(246, 157, 75)" }}
                  >
                    Statistics
                  </span>
                </u>
              </div>
            </Col>
            <Col sm={12} md={1} lg={2} className="ms-5 ps-5 d-none d-lg-block">
              <div>
                <Button
                  className="bg-transparent border-0 text-dark ms-lg-5 ps-lg-5"
                  onClick={handleShow}
                >
                  <BsPencilSquare className="pencil-profile fs-4 ms-xl-5" />
                </Button>

                <ProfileModal show={modalShow} handleClose={handleClose} />
              </div>
            </Col>
          </Row>

          <Row className="text-dark d-flex text-start align-self-start mt-4 ms-lg-2 p-0  w-75">
            <h5 className="pt-0 mt-0 fw-bold fs-4">Your publications:</h5>
            {articles.length > 0 ? (
              articles.map((article) => (
                <Row
                  className="d-flex justify-content-start align-items-center w-75 mx-auto mx-lg-0 ps-sm-5"
                  key={article.articleId}
                >
                  <Col
                    sm={2}
                    lg={2}
                    md={2}
                    className="pt-lg-3 d-flex justify-content-end  align-items-center"
                  >
                    <div className="mb-3 p-0">{article.publishedAt}</div>
                  </Col>
                  <Col
                    sm={8}
                    lg={9}
                    md={8}
                    id="profile-container-articles"
                    className="w-75 border-start d-flex justify-content-start align-items-center  p-0"
                  >
                    <div id="triangle-left" className="ms-0"></div>
                    <div className="container-article-home my-lg-2 me-2 mx-0 rounded-pill px-4 mb-3 mb-sm-2">
                      <h5>{article.title || "Untitled Article"}</h5>
                      <p>{article.content || "No content"}</p>
                    </div>
                  </Col>
                </Row>
              ))
            ) : (
              <p>No articles available</p>
            )}
          </Row>
        </div>
      </Container>
    </>
  );
};
export default Profile;
