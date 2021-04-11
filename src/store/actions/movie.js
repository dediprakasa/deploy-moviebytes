import axios from "axios";
import callApi from "../../constant/connections";

const addMovieList = (movies, page, length) => ({
  type: "ADD_MOVIE_LIST",
  movies,
  page,
  length,
});

const setMovieList = (movies, page, length, totalResult) => ({
  type: "SET_MOVIE_LIST",
  movies,
  page,
  length,
  totalResult,
});

const setKeywordList = (keyword) => ({
  type: "SET_KEYWORD_LIST",
  keyword,
});

const requestDataError = (error) => ({
  type: "REQUEST_DATA_ERROR",
  error,
});

const requestKeyword = (error) => ({
  type: "REQUEST_KEYWORD",
});

const requestData = (error) => ({
  type: "REQUEST_DATA",
});

export const changeQuery = (query) => ({
  type: "CHANGE_QUERY",
  query,
});

export const getMovieList = (query = "", pageNumber = 1, type) => {
  return async (dispatch) => {
    dispatch(requestData());

    try {
      const { data } = await callApi({
        method: "GET",
        params: { s: query, page: pageNumber },
      });
      if (data) {
        if (data.Response == "True") {
          if (type == "add")
            dispatch(addMovieList(data.Search, pageNumber, data.Search.length));
          if (type == "get") {
            dispatch(
              setMovieList(
                data.Search,
                pageNumber,
                data.Search.length,
                data.totalResults
              )
            );
          }
        } else {
          dispatch(
            requestDataError(
              `[ ${data.Error}] Please search another keyword for example: Batman`
            )
          );
        }
      }
    } catch (error) {
      if (axios.isCancel()) return;
      dispatch(requestDataError(error));
    }
  };
};

export const getKeywordList = (query) => {
  return async (dispatch) => {
    dispatch(requestKeyword());

    try {
      const { data } = await callApi({
        method: "GET",
        params: { s: query, page: 1 },
      });
      if (data) {
        dispatch(setKeywordList(data.Search));
      }
    } catch (error) {
      if (axios.isCancel()) return;
      dispatch(requestDataError(error));
    }
  };
};
