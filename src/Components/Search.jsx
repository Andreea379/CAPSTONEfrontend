import { useSelector } from "react-redux";
import profileImage from "../assets/download.png";
import { Container, Image } from "react-bootstrap";
import MyNavBar from "./MyNavBar";

const Search = () => {
  const { firstnameProfiles, firstnameProfileLoading, firstnameProfilesError } =
    useSelector((state) => state.search);

  if (firstnameProfileLoading)
    return <div>Loading profiles by first name...</div>;
  if (firstnameProfilesError)
    return <div>Error profiles by fisrt name: {firstnameProfilesError}</div>;
  if (!firstnameProfiles) {
    return <div>No profiles available</div>;
  }

  return (
    <div>
      <MyNavBar />
      <Container className="mt-5">
        {firstnameProfiles.length > 0 ? (
          firstnameProfiles.map((firstnameProfile) => (
            <div
              className="d-flex justify-content-center  align-items-center mb-4"
              key={firstnameProfile.id}
            >
              <div className="profile-image-home-container d-flex justify-content-center align-items-center ">
                <Image
                  src={firstnameProfile.profileImage || profileImage}
                  className="profile-image-home rounded "
                />
              </div>
              <div className="triangle-left"></div>
              <div className="container-article-home  w-75 my-4 rounded-pill px-5">
                <span className="fs-4 fw-bold ">
                  {firstnameProfile.firstName || ""}{" "}
                </span>
                <span className="fs-4 fw-bold ">
                  {firstnameProfile.lastName || ""}
                </span>
                <div className="mb-2">
                  <span>Profession:</span>
                  <span>{firstnameProfile.profession || ""}</span>
                </div>
                <div className="mb-2">
                  <span>Description:</span>
                  <span> {firstnameProfile.description || ""}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>None profile was found!</p>
        )}
        ;
      </Container>
    </div>
  );
};
export default Search;
