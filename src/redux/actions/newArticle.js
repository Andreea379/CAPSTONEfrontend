export const NEW_ARTICLE_REQUEST = "NEW_ARTICLE_REQUEST";
export const NEW_ARTICLE_SUCCESS = "NEW_ARTICLE_SUCCESS";
export const NEW_ARTICLE_FAILURE = "NEW_ARTICLE_FAILURE";

export const newArticleRequest = () => ({
  type: NEW_ARTICLE_REQUEST
});

export const newArticleSuccess = (article) => ({
  type: NEW_ARTICLE_SUCCESS,
  payload: article
});

export const newArticleFailure = (error) => ({
  type: NEW_ARTICLE_FAILURE,
  payload: error
});

export const newArticle =
  (articleData, articleImage, navigate) => async (dispatch) => {
    dispatch(newArticleRequest());
    const token = localStorage.getItem("token");
    console.log(token);

    if (!token) {
      console.log("No token found. Please log in first.");
      navigate("/login");
    }

    const formData = new FormData();
    formData.append(
      "article",
      new Blob([JSON.stringify(articleData)], { type: "application/json" })
    );
    formData.append("articleImage", articleImage);

    console.log(formData);
    try {
      const response = await fetch(
        `http://localhost:8080/article/newArticle/1`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`
          },
          body: formData
        }
      );
      console.log(token);

      if (response.ok) {
        const article = await response.json();
        console.log("Article pubblication response:", article);
        dispatch(newArticleSuccess(article));
        console.log(article);
        navigate("/home");
      } else {
        throw new Error("Article pubblication Failed!");
      }
    } catch (error) {
      dispatch(newArticleFailure(error.message));
    }
  };
