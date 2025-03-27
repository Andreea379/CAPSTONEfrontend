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
    const profileId = localStorage.getItem("profileId");
    console.log(token);

    console.log(profileId);

    // if (!token) {
    //   console.log("No token found. Please log in first.");
    //   navigate("/login");
    // }

    const formData = new FormData();
    formData.append(
      "article",
      new Blob([JSON.stringify(articleData)], { type: "application/json" })
    );
    formData.append("articleImage", articleImage);

    console.log(formData);
    try {
      const response = await fetch(
        `http://localhost:8080/article/newArticle/${profileId}`,
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
        navigate("/profile");
      } else {
        throw new Error("Article pubblication Failed!");
      }
    } catch (error) {
      dispatch(newArticleFailure(error.message));
    }
  };

export const ALL_ARTICLES_REQUEST = "ALL_ARTICLES_REQUEST";
export const ALL_ARTICLES_SUCCESS = "ALL_ARTICLES_SUCCESS";
export const ALL_ARTICLES_FAILURE = "ALL_ARTICLES_FAILURE";

export const allArticlesRequest = () => ({
  type: ALL_ARTICLES_REQUEST
});

export const allArticlesSuccess = (articles) => ({
  type: ALL_ARTICLES_SUCCESS,
  payload: articles
});

export const allArticlesFailure = (error) => ({
  type: ALL_ARTICLES_FAILURE,
  payload: error
});

export const fetchAllArticles = () => async (dispatch) => {
  dispatch(allArticlesRequest());
  try {
    const response = await fetch("http://localhost:8080/article/getAll", {
      method: "GET",
      headers: {}
    });

    if (!response.ok) {
      const error = await response.json();
      console.log("all articles respons not ok", error);
    }
    const articles = await response.json();
    console.log("All articles loading response:", articles);
    dispatch(allArticlesSuccess(articles));
    console.log(articles);
  } catch (error) {
    dispatch(allArticlesFailure(error.message));
  }
};

export const USER_ARTICLES_REQUEST = "USER_ARTICLES_REQUEST";
export const USER_ARTICLES_SUCCESS = "USER_ARTICLES_SUCCESS";
export const USER_ARTICLES_FAILURE = "USER_ARTICLES_FAILURE";

export const userArticlesRequest = () => ({
  type: USER_ARTICLES_REQUEST
});

export const userArticlesSuccess = (userArticles) => ({
  type: USER_ARTICLES_SUCCESS,
  payload: userArticles
});

export const userArticlesFailure = (error) => ({
  type: USER_ARTICLES_FAILURE,
  payload: error
});

export const fetchUserArticles = () => async (dispatch) => {
  dispatch(userArticlesRequest());
  const token = localStorage.getItem("token");
  const profileId = localStorage.getItem("profileId");
  console.log("Token:", token);
  console.log("Retrieved Profile ID:", profileId);
  if (!profileId) {
    console.error("No profile ID found in localStorage!");
    return;
  }
  try {
    const response = await fetch(
      `http://localhost:8080/article/author/${profileId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    if (!response.ok) {
      console.log("response not ok");
    }
    if (response.ok) {
      const userArticles = await response.json();
      console.log("User userArticles loading response:", userArticles);
      dispatch(userArticlesSuccess(userArticles));
    } else {
      throw new Error("User articles loading failed!");
    }
  } catch (error) {
    dispatch(userArticlesFailure(error.message));
  }
};
export const SINGLE_ARTICLE_REQUEST = "SINGLE_ARTICLE_REQUEST";
export const SINGLE_ARTICLE_SUCCESS = "SINGLE_ARTICLE_SUCCESS";
export const SINGLE_ARTICLE_FAILURE = "SINGLE_ARTICLE_FAILURE";
export const singleArticleRequest = () => ({
  type: SINGLE_ARTICLE_REQUEST
});

export const singleArticleSuccess = (singleArticle) => ({
  type: SINGLE_ARTICLE_SUCCESS,
  payload: singleArticle
});

export const singleArticleFailure = (error) => ({
  type: SINGLE_ARTICLE_FAILURE,
  payload: error
});

export const fetchSingleArticle = () => async (dispatch) => {
  dispatch(singleArticleRequest());
  const token = localStorage.getItem("token");
  const articleId = localStorage.getItem("articleId");
  console.log("Token:", token);
  console.log("Retrieved Profile ID:", articleId);
  if (!articleId) {
    console.error("No profile ID found in localStorage!");
    return;
  }
  try {
    const response = await fetch(`http://localhost:8080/article/${articleId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (!response.ok) {
      console.log("response not ok");
    }
    if (response.ok) {
      const singleArticle = await response.json();
      console.log("Single article loading response:", singleArticle);
      dispatch(singleArticleSuccess(singleArticle));
    } else {
      throw new Error("Single article loading failed!");
    }
  } catch (error) {
    dispatch(singleArticleFailure(error.message));
  }
};
