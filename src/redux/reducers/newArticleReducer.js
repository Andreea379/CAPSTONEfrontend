import {
  NEW_ARTICLE_REQUEST,
  NEW_ARTICLE_SUCCESS,
  NEW_ARTICLE_FAILURE
} from "../actions/newArticle";

const initialState = {
  loading: false,
  article: [],
  error: null
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

    default:
      return state;
  }
};

export default newArticleReducer;
