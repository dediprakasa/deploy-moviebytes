import React, { useState, useEffect } from "react";
import { Col, Alert } from "react-bootstrap";
import { MovieList } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { useDisplayMovie } from "../customHooks";
import { useHistory } from "react-router-dom";
import { clearMovieList } from "../store/actions/movie";

const HomePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);

  const {
    loading,
    dataLength,
    totalResult,
    movieList,
    query,
    error,
  } = useSelector((state) => state.movieReducer);

  useEffect(() => {
    return dispatch(clearMovieList());
  }, [history]);

  useDisplayMovie(query, pageNumber);

  return (
    <Col md={10} className="mx-auto my-4">
      {error && (
        <Alert
          data-testid="error-text"
          className="text-left"
          variant={"danger"}
        >
          {error}
        </Alert>
      )}
      <MovieList
        movieList={movieList}
        dataLength={dataLength}
        totalResult={totalResult}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        loading={loading}
      />
      {loading && <h2>Loading...</h2>}
    </Col>
  );
};

export default HomePage;
