import React from "react";
import { Modal, Button, Image, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import PosterNotFound from "../../assets/img/notfound.jpg";

const PosterModal = (props) => {
  return (
    <Modal
      data-testid="show-modal"
      show={props.show}
      onHide={props.handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title data-testid="poster-title">
          {props.movie?.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Col md={8} className="mx-auto">
          <Image
            data-testid="poster-image"
            style={{ width: 300 }}
            src={
              props.movie?.poster !== "N/A" && props.movie?.poster
                ? props.movie?.poster
                : PosterNotFound
            }
          />
        </Col>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

PosterModal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  movie: PropTypes.object,
};

export default PosterModal;
