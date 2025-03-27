import {
  NEW_ARTICLE_REQUEST,
  NEW_ARTICLE_SUCCESS,
  NEW_ARTICLE_FAILURE,
  ALL_ARTICLES_REQUEST,
  ALL_ARTICLES_SUCCESS,
  ALL_ARTICLES_FAILURE,
  USER_ARTICLES_REQUEST,
  USER_ARTICLES_SUCCESS,
  USER_ARTICLES_FAILURE,
  SINGLE_ARTICLE_REQUEST,
  SINGLE_ARTICLE_SUCCESS,
  SINGLE_ARTICLE_FAILURE
} from "../actions/newArticle";

const initialState = {
  loading: false,
  article: [],
  error: null,

  allArticlesLoading: false,
  allArticles: [],
  allArticlesError: null,

  userArticlesLoading: false,
  userArticles: [],
  userArticlesError: null,

  singleArticleLoading: false,
  singleArticle: [],
  singleArticleError: null
};

const newArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true
      };

    case NEW_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        article: [...state.article, action.payload],
        error: null
      };

    case NEW_ARTICLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case ALL_ARTICLES_REQUEST:
      return {
        ...state,
        allArticlesLoading: true
      };

    case ALL_ARTICLES_SUCCESS:
      return {
        ...state,
        allArticlesLoading: false,
        allArticles: [...state.allArticles, ...action.payload],
        allArticlesError: null
      };

    case ALL_ARTICLES_FAILURE:
      return {
        ...state,
        allArticlesLoading: false,
        allArticlesError: action.payload
      };

    case USER_ARTICLES_REQUEST:
      return {
        ...state,
        userArticlesLoading: true
      };

    case USER_ARTICLES_SUCCESS:
      return {
        ...state,
        userArticlesLoading: false,
        userArticles: action.payload,
        userArticlesError: null
      };
    case USER_ARTICLES_FAILURE:
      return {
        ...state,
        userArticlesLoading: false,
        userArticlesError: action.payload
      };

    case SINGLE_ARTICLE_REQUEST:
      return {
        ...state,
        singleArticleLoading: true
      };

    case SINGLE_ARTICLE_SUCCESS:
      return {
        ...state,
        singleArticleLoading: false,
        singleArticle: action.payload,
        singleArticleError: null
      };
    case SINGLE_ARTICLE_FAILURE:
      return {
        ...state,
        singleArticleLoading: false,
        singleArticleError: action.payload
      };

    default:
      return state;
  }
};

export default newArticleReducer;
