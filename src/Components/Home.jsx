import { Container, Image } from "react-bootstrap";
import MyNavBar from "./MyNavBar";
import profileImage from "../assets/download.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllArticles } from "../redux/actions/newArticle";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

  const handleClick = () => {
    navigate("/readArticle");
  };
  useEffect(() => {
    dispatch(fetchAllArticles());
  }, [dispatch]);

  if (allArticlesLoading) return <div>Loading profiles...</div>;
  if (allArticlesError) return <div>Error: {allArticlesError}</div>;
  return (
    <>
      <MyNavBar />

      <Container className=" mt-5">
        {allArticles.map((articles, index) => (
          <div
            className={`d-flex justify-content-center  align-items-center ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            }`}
            key={articles.articleId}
          >
            <div className="profile-image-home-container d-flex justify-content-center align-items-center ">
              <Image
                src={articles.articleImage || profileImage}
                className="profile-image-home rounded "
              />
            </div>
            <div className="triangle-left"></div>
            <div className="container-article-home  w-75 my-4 rounded-pill px-5">
              <h3>{articles.title || "Untitled Article"}</h3>
              {articles.content || "Untitled Article"}{" "}
              <a className="login-anchor" onClick={handleClick}>
                read more
              </a>
              <p className="pt-3">
                Publication date: {articles.publishedAt || "Untitled Article"}
              </p>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
};
export default Home;
