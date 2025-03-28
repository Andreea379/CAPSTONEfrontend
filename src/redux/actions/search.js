export const FIRSTNAME_PROFILE_REQUEST = "FIRSTNAME_PROFILE_REQUEST";
export const FIRSTNAME_PROFILE_SUCCESS = "FIRSTNAME_PROFILE_SUCCESS";
export const FIRSTNAME_PROFILE_FAILURE = "FIRSTNAME_PROFILE_FAILURE";

export const firstNameProfileRequest = () => ({
  type: FIRSTNAME_PROFILE_REQUEST
});

export const firstNameProfileSuccess = (firstnameProfiles) => ({
  type: FIRSTNAME_PROFILE_SUCCESS,
  payload: firstnameProfiles
});

export const firstNameProfileFailure = (error) => ({
  type: FIRSTNAME_PROFILE_FAILURE,
  payload: error
});
export const firstNameProfiles =
  (firstName = "") =>
  async (dispatch) => {
    dispatch(firstNameProfileRequest());
    try {
      const response = await fetch(
        `http://localhost:8080/profile/findBy?firstName=${firstName}`
      );

      if (response.ok) {
        const data = await response.json();
        dispatch(firstNameProfileSuccess(data));
      } else {
        dispatch(firstNameProfileFailure("Error"));
      }
    } catch (error) {
      dispatch(firstNameProfileFailure(error.message));
    }
  };

export const TITLE_ARTICLE_REQUEST = "TITLE_ARTICLE_REQUEST";
export const TITLE_ARTICLE_SUCCESS = "TITLE_ARTICLE_SUCCESS";
export const TITLE_ARTICLE_FAILURE = "TITLE_ARTICLE_FAILURE";

export const titleArticleRequest = () => ({
  type: TITLE_ARTICLE_REQUEST
});

export const titleArticleSuccess = (titleArticles) => ({
  type: TITLE_ARTICLE_SUCCESS,
  payload: titleArticles
});

export const titleArticleFailure = (error) => ({
  type: TITLE_ARTICLE_FAILURE,
  payload: error
});
export const titleArticles =
  (title = "") =>
  async (dispatch) => {
    dispatch(titleArticleRequest());
    try {
      const response = await fetch(
        `http://localhost:8080/article/findBy?title=${title}`
      );

      if (response.ok) {
        const data = await response.json();
        dispatch(titleArticleSuccess(data));
      } else {
        dispatch(titleArticleFailure("Error"));
      }
    } catch (error) {
      dispatch(titleArticleFailure(error.message));
    }
  };
