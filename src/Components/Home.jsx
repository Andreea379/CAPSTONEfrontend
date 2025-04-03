import { Container, Image } from "react-bootstrap";
import MyNavBar from "./MyNavBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllArticles } from "../redux/actions/newArticle";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.png";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allArticles = useSelector((state) => state.article.allArticles);
  const allArticlesLoading = useSelector(
    (state) => state.article.allArticlesLoading
  );
  const allArticlesError = useSelector(
    (state) => state.article.allArticlesError
  );

  const handleClick = (index) => {
    console.log(allArticles[index].articleId);
    navigate(`/readArticle/${allArticles[index].articleId}`);
  };
  useEffect(() => {
    dispatch(fetchAllArticles());
  }, [dispatch]);

  if (allArticlesLoading) return <div>Loading profiles...</div>;
  if (allArticlesError) return <div>Error: {allArticlesError}</div>;

  return (
    <>
      <MyNavBar className="sticky-top fixed-top" />

      <Container className="home-container mt-5">
        {allArticles.map((articles, index) => (
          <div
            id="badge-home"
            className={`d-flex justify-content-center bg-light align-items-center ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            }`}
            key={articles.index}
          >
            <div className="profile-image-home-container d-flex justify-content-center align-items-center ">
              <Image
                src={articles.authorProfileImage || avatar}
                className="profile-image-home rounded rounded-sm object-fit-cover"
              />
            </div>
            <div className="triangle-left"></div>
            <div className="container-article-home w-75 my-4 rounded-pill px-5 py-3">
              <h3 className="fw-bold mb-0 ">
                {articles.title || "Untitled Article"}
              </h3>
              <div className="d-flex align-items-center w-100">
                <span className="text-truncate w-75 d-block fs-5">
                  {articles.content || "No content"}
                </span>
                <a
                  className="login-anchor w-25 p-0 ms-2"
                  onClick={() => {
                    handleClick(index);
                  }}
                >
                  <span className="d-none d-sm-none d-md-block">read more</span>
                  <span className="d-block d-md-none">...</span>
                </a>
              </div>

              <p className="d-flex align-items-center pt-3">
                <span className="d-none d-sm-none d-md-block">
                  Publication date:{" "}
                </span>
                {articles.publishedAt || "--"}
              </p>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
};
export default Home;
