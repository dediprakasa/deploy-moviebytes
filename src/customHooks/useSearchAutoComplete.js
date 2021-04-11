import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getKeywordList } from "../store/actions/movie";

const useSearchAutoComplete = (query) => {
  const dispatch = useDispatch();
  const cancelFunc = useSelector((state) => state.movieReducer.cancelFunc);

  useEffect(() => {
    dispatch(getKeywordList(query));

    return cancelFunc();
  }, [query]);
};

export default useSearchAutoComplete;
