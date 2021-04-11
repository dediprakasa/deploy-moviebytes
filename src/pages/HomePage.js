import React, { useState, useRef, useCallback } from "react";
import { Col, Alert } from "react-bootstrap";
import { MovieList } from "../components";
import { useSelector } from "react-redux";
import { useDisplayMovie } from "../customHooks";

const HomePage = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const {
    loading,
    dataLength,
    totalResult,
    movieList,
    query,
    error,
  } = useSelector((state) => state.movieReducer);

  useDisplayMovie(query, pageNumber);

  return (
    <Col md={10} className="mx-auto my-4">
      {error && (
        <Alert className="text-left" variant={"danger"}>
          {error}
        </Alert>
      )}
      {loading && <h2>Loading...</h2>}
      <MovieList
        movieList={movieList}
        dataLength={dataLength}
        totalResult={totalResult}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        loading={loading}
      />
    </Col>
  );
};

export default HomePage;
