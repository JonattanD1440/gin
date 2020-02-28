import React, { Component } from "react";

class DisplayRoom extends Component {
  state = {
    currentImage: ""
  };
  componentDidMount() {
    const currentImage = this.props.room.images[0];
    this.setState({ currentImage });
  }

  displayCurrentImage = currentImage => this.setState({ currentImage });

  renderRoom = () => {
    const { images, name, description } = this.props.room;
    return (
      <div className="row mt-5 border rounded">
        <div className="col-md-5 p-0 text-right">
          <img
            src={this.state.currentImage}
            className="img-responsive shadow-sm mb-1"
          />
          <div className="row p-0 m-0">
            {images.map(image => (
              <div className="col-sm-3 p-0" key={image}>
                <img
                  onClick={() => this.displayCurrentImage(image)}
                  src={image}
                  alt=""
                  className="img-fluid pointer"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-7 pt-3">
          <div className="row">
            <div className="col-auto">
              <h2>{name}</h2>
            </div>
            <div className="col-auto">
              <a href="#" className="badge badge-warning p-3">
                Book Now
              </a>
            </div>
          </div>
          <p className="mt-3">{description}</p>
        </div>
      </div>
    );
  };
  render() {
    return this.renderRoom();
  }
}

export default DisplayRoom;
