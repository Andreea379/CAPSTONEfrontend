import { Container, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import MyNavBar from "./MyNavBar";
import { useEffect } from "react";
import { fetchSingleArticle } from "../redux/actions/newArticle";
import { useParams } from "react-router-dom";
import { fetchArticleProfile } from "../redux/actions/profile";

const ReadArticle = () => {
  const { articleId } = useParams();
  const dispatch = useDispatch();

  const singleArticle = useSelector((state) => state.article.singleArticle);
  const singleArticleLoading = useSelector(
    (state) => state.profile.singleArticleLoading
  );
  const singleArticleError = useSelector(
    (state) => state.profile.singleArticleError
  );
  const articleProfile = useSelector((state) => state.profile.articleProfile);
  const articleProfileLoading = useSelector(
    (state) => state.profile.articleProfileLoading
  );
  const articleProfileError = useSelector(
    (state) => state.profile.articleProfileError
  );

  useEffect(() => {
    dispatch(fetchSingleArticle(articleId));
    dispatch(fetchArticleProfile(articleId));
  }, [dispatch, articleId]);
  if (singleArticleLoading) return <div>Loading article...</div>;
  if (singleArticleError)
    return <div>Error articles: {singleArticleError}</div>;
  if (articleProfileLoading) return <div>Loading article...</div>;
  if (articleProfileError)
    return <div>Error profiles: {articleProfileError}</div>;
  if (!articleId) {
    return <div>Error: Article ID is missing!</div>;
  }
  return (
    <>
      <MyNavBar />
      <Container className="mt-5 mx-auto">
        <div className="w-100">
          <div className="w-75 mx-auto my-5 ">
            <h1 className="fw-bold border-bottom ">
              {singleArticle.title || "Untitled article"}
            </h1>
            <div className="d-flex align-items-center my-5 w-75">
              <div className="profile-image-profile-container-article text-center mx-auto mx-lg-0">
                <Image
                  src={singleArticle.authorProfileImage}
                  className="profile-image-article rounded mt-1 object-fit-cover"
                />
              </div>
              <div className="fs-5 d-flex align-items-center justify-content-between ">
                <div style={{ color: " rgb(255, 123, 0)" }}>
                  <span className="mx-2">{articleProfile[0].firstName}</span>
                  <span className="align-self-end">
                    {articleProfile[0].lastName}
                  </span>
                </div>
                <span className="ms-3 fs-6 m-0 ">
                  {singleArticle.publishedAt}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 text-center mb-5">
          <Image
            src={singleArticle.articleImage || "Untitled article"}
            className="w-75 object-fit-cover"
          />
        </div>
        <div className="fs-5 fw-medium w-100 ">
          <p className="fs-5 fw-medium w-75 mx-auto text">
            {singleArticle.content || "No content"}
          </p>
        </div>
      </Container>
    </>
  );
};
export default ReadArticle;
