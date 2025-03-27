import { Button, Col, Container, Image, Row } from "react-bootstrap";
import profileImage from "../assets/logo.svg";
import MyNavBar from "./MyNavBar";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ProfileModal from "./ProfileModal";

// import { fetchUserArticles } from "../redux/actions/newArticle";
import { useEffect } from "react";
import { fetchProfile } from "../redux/actions/profile";
import { BsPencilSquare } from "react-icons/bs";

const Profile = () => {
  const dispatch = useDispatch();

  // const userArticles = useSelector((state) => state.article.userArticles);
  // const userArticlesLoading = useSelector(
  //   (state) => state.article.userArticlesLoading
  // );
  // const userArticlesError = useSelector(
  //   (state) => state.article.userArticlesError
  // );
  const profile = useSelector((state) => state.profile.profile);
  const profileLoading = useSelector((state) => state.profile.profileLoading);
  const profileError = useSelector((state) => state.profile.profileError);
  console.log(profile);
  const [modalShow, setModalShow] = useState(false);
  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const profileData = {
  //     firstName: e.target.elements.firstName.value,
  //     lastName: e.target.elements.lastName.value,
  //     profession: e.target.elements.profession.value,
  //     description: e.target.elements.description.value
  //   };
  //   const profileImage = e.target.elements.profileImage.files[0];
  //   if (
  //     profileData.firstName &&
  //     profileData.lastName &&
  //     profileData.profession &&
  //     profileData.description
  //   ) {
  //     dispatch(newProfile(profileData, profileImage));
  //   } else {
  //     console.log("Please fill all the fields!");
  //   }
  // };

  // useEffect(() => {
  //   dispatch(fetchUserArticles());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProfile());
    // dispatch(fetchUserArticles());
  }, [dispatch]);
  if (profileLoading) return <div>Loading profiles...</div>;
  if (profileError) return <div>Error profiles: {profileError}</div>;
  // if (userArticlesLoading) return <div>Loading articles...</div>;
  // if (userArticlesError) return <div>Error profiles:{userArticlesError}</div>;

  const profileData = profile[0]; // Access the first profile object
  const articles = profileData?.article || [];
  return (
    <>
      <MyNavBar />
      <Container
        className="d-flex justify-content-center align-items-center "
        style={{ marginTop: "5%" }}
      >
        {/* {profile && ( */}
        {/* // .map((profileData) => */}
        <div id="badge" className="bg-light p-5 badge border w-75">
          <Row
            className="text-dark d-flex align-self-start m-0 p-0 border-bottom"
            // key={profileData.profileId}
          >
            <Col sm={2} className="me-5">
              <div className="profile-image-profile-container d-flex justify-content-center align-items-center ">
                <Image
                  src={profileData?.profileImage || profileImage}
                  className="profile-image-home rounded "
                />
              </div>
            </Col>
            <Col sm={6} className="text-start">
              <h4 className="pt-0 mt-0 fw-bold">
                {profileData?.firstName || "Untitled Article"}{" "}
                {profileData?.lastName || "Untitled Article"}
              </h4>
              <h6 className="pt-0 mt-0 fw-bold">Profession:</h6>
              <p>{profileData?.profession || ""}</p>
              <h6 className="pt-0 mt-0 fw-bold">Description:</h6>
              <p>{profileData?.description || ""}</p>
            </Col>
            <Col sm={2}>
              <div>
                <Button
                  className="bg-transparent border-0 text-dark m-0 p-0"
                  onClick={handleShow}
                >
                  <BsPencilSquare className="pencil-profile fs-4" />
                </Button>

                <ProfileModal show={modalShow} handleClose={handleClose} />
              </div>
            </Col>
          </Row>

          <Row className="text-dark d-flex text-start align-self-start mt-4 ms-2 p-0  w-75">
            <h5 className="pt-0 mt-0 fw-bold">Your publications:</h5>
            {/* {userArticles.map((articles) => ( */}
            {/* {profile.article && profile.article.length > 0 ? (
                profile.article.map((article) => ( */}
            {articles.length > 0 ? (
              articles.map((article) => (
                <Row
                  className="d-flex justify-content-center align-items-center w-75"
                  key={article.articleId}
                >
                  <Col className="pt-3 d-flex justify-content-end  align-items-center">
                    <div className="mb-3 p-0">{article.publishedAt}</div>
                  </Col>
                  <Col
                    id="profile-container-articles"
                    className="w-75 border-start d-flex justify-content-start align-items-center  p-0"
                  >
                    <div id="triangle-left" className="ms-0"></div>
                    <div className="container-article-home my-4 me-2 mx-0 rounded-pill px-4 ">
                      <h5>{article.title || "Untitled Article"}</h5>
                      <p>{article.content || "Untitled Article"}</p>
                    </div>
                  </Col>
                </Row>
              ))
            ) : (
              <p>No articles available</p>
            )}
          </Row>
        </div>
        {/* )} */}
      </Container>
    </>
  );
};
export default Profile;
