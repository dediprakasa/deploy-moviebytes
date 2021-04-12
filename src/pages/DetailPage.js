import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { MovieCard } from "../components";

import callApi from "../constant/connections";

const plotDetail = [
  { title: "Actors" },
  { title: "Awards" },
  { title: "Genre" },
  { title: "Director" },
  { title: "Release" },
  { title: "Language" },
  { title: "Production" },
  { title: "Writer" },
  { title: "Plot" },
];

const DetailPage = () => {
  const { movieId } = useParams();
  const [detailMovie, setDetailMovie] = useState({});
  const [localLoading, setLocalLoading] = useState(false);

  const getDetailMovie = async () => {
    try {
      setLocalLoading(true);

      const { data } = await callApi({
        method: "GET",
        params: { i: movieId, plot: "full" },
      });

      if (data) {
        setDetailMovie(data);
        setLocalLoading(false);
      }
    } catch (error) {
      alert("Error request detail movie");
    }
  };

  useEffect(() => {
    getDetailMovie();

    return;
  }, []);

  return (
    <Col md={10} className="mx-auto my-2">
      {localLoading ? (
        <h4 className="text-center">Loading...</h4>
      ) : (
        <Row>
          <Col md={4} className="detailBox">
            <MovieCard
              poster={detailMovie.Poster}
              title={detailMovie.Title}
              year={detailMovie.Year}
              columnSize={12}
            />
          </Col>
          <Col data-testid="detailBox" md={8} className="detailBox">
            <h4 className="text-center py-4">Movie Detail</h4>
            {detailMovie &&
              plotDetail.map((detail, i) => (
                <Row key={i} clasName="pt-2">
                  <Col md={2}>{detail.title}</Col>
                  <Col md={2}>:</Col>
                  <Col md={8}>{detailMovie[detail.title]}</Col>
                </Row>
              ))}
          </Col>
        </Row>
      )}
    </Col>
  );
};

export default DetailPage;
