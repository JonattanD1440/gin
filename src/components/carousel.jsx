import React from "react";

const Carousel = props => {
  const { images } = props;
  return (
    <React.Fragment>
      <div className="conainer">
        <div
          id="carouselExampleIndicators"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {images.map((image, index) => (
              <div
                className={"carousel-item " + (index === 0 ? "active" : "")}
                key={index}
              >
                <img src={image} className="d-block w-100" alt="..." />
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Carousel;
