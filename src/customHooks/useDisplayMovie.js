import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList } from "../store/actions/movie";

const useDisplayMovie = (query, pageNumber) => {
  const dispatch = useDispatch();
  const cancelFunc = useSelector((state) => state.movieReducer.cancelFunc);

  useEffect(() => {
    dispatch(getMovieList(query, pageNumber, "get"));
  }, []);

  useEffect(() => {
    dispatch(getMovieList(query, 1, "get"));
  }, [query]);

  useEffect(() => {
    let type = "get";

    if (pageNumber > 1) type = "add";

    dispatch(getMovieList(query, pageNumber, type));
  }, [pageNumber]);

  return cancelFunc();
};

export default useDisplayMovie;
