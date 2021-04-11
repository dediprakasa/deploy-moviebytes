import React, { useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";
import { MovieCard } from "../../components";

const MovieList = (props) => {
  const observer = useRef();
  const lastMovieElement = useCallback(
    (node) => {
      if (props.loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (props.dataLength < props.totalResult) {
            props.setPageNumber(props.pageNumber + 1);
          }
        }
      });
      if (node) observer.current.observe(node);
    },
    [props.loading]
  );

  return (
    <Row>
      {props.movieList.length > 0 &&
        props.movieList.map((movie, i) => {
          return (
            <React.Fragment>
              <MovieCard
                key={i}
                poster={movie.Poster}
                title={movie.Title}
                year={movie.Year}
                columnSize={3}
                movieId={movie.imdbID}
              />
              {props.movieList.length - 1 == i && (
                <div ref={lastMovieElement}></div>
              )}
            </React.Fragment>
          );
        })}
    </Row>
  );
};

MovieList.propTypes = {
  movieList: PropTypes.array,
  dataLength: PropTypes.number,
  totalResult: PropTypes.number,
  setPageNumber: PropTypes.func,
  pageNumber: PropTypes.number,
  loading: PropTypes.bool,
};

export default MovieList;
