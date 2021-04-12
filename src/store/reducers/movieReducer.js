const initialState = {
  movieList: [],
  keywordList: [],
  cancelFunc: () => {},
  error: null,
  loading: false,
  keywordLoading: false,
  dataLength: 0,
  totalResult: 0,
  query: "Batman",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_MOVIE_LIST":
      return {
        ...state,
        loading: false,
        error: null,
        movieList: [],
        dataLength: 0,
        totalResult: 0,
        query: "Batman",
      };
    case "SET_MOVIE_LIST":
      return {
        ...state,
        loading: false,
        error: null,
        movieList: action.movies,
        dataLength: action.length,
        totalResult: action.totalResult,
      };
    case "ADD_MOVIE_LIST":
      return {
        ...state,
        loading: false,
        error: null,
        movieList: state.movieList.concat(action.movies),
        dataLength: state.dataLength + action.length,
      };
    case "SET_KEYWORD_LIST":
      return {
        ...state,
        keywordLoading: false,
        keywordList: action.keyword,
      };
    case "CHANGE_QUERY":
      return {
        ...state,
        query: action.query,
      };
    case "CANCEL_REQUEST":
      return {
        ...state,
        loading: false,
        error: null,
        cancelFunc: action.cancelFunc,
      };
    case "REQUEST_DATA":
      return {
        ...state,
        loading: true,
      };
    case "REQUEST_KEYWORD":
      return {
        ...state,
        keywordLoading: true,
      };
    case "REQUEST_DATA_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "CLEAR_DATA":
      return {
        ...state,
        movieList: [],
      };

    default:
      return state;
  }
};
