import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import PosterNotFound from "../../assets/img/notfound.jpg";
import { PosterModal } from "../../components";

import PropTypes from "prop-types";

const MovieCard = (props) => {
  const [posterShow, setPosterShow] = useState(false);
  const [poster, setPoster] = useState({});

  const openPosterModal = (movie) => {
    setPosterShow(true);
    setPoster(movie);
  };

  return (
    <Card className={`col-md-${props.columnSize} my-4 py-2 cardBox`}>
      <Card.Img
        style={{ cursor: "pointer" }}
        onClick={() =>
          openPosterModal({ poster: props.poster, title: props.title })
        }
        variant="top"
        src={
          props.poster !== "N/A" && props.poster ? props.poster : PosterNotFound
        }
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.year}</Card.Text>
      </Card.Body>
      {props.movieId && (
        <Button as={Link} to={`/detail/${props.movieId}`} variant="info">
          Detail
        </Button>
      )}
      {posterShow && (
        <PosterModal
          show={posterShow}
          handleClose={() => setPosterShow(!posterShow)}
          movie={poster}
        />
      )}
    </Card>
  );
};

MovieCard.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  columnSize: PropTypes.oneOf([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  movieId: PropTypes.string,
};

export default MovieCard;
