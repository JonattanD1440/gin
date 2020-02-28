import React, { Component } from "react";
import FadeIn from "react-fade-in";
import CaptionImage from "./captionImage";
import Contact from "./contact";

class Events extends Component {
  state = {
    events: [
      {
        title: "CORPORATE STAY",
        description: `Are you a business traveler looking for the perfect hotel to
                    fit your needs? Our fully furnished, spacious suites feature
                    a living room, working space, air-conditioning, mini-fridge,
                    king-size bed, bathroom, flat screen TV and free Wi-Fi. It's
                    the ideal place to stay on your work trip to Statia.`,
        image: `http://theoldginhouse.com/pages/wp-content/uploads/2017/09/events01.jpg`
      },
      {
        title: "WEDDINGS",
        description: `Are you looking for an enchanting place with a classic, romantic and elegant atmosphere to hold your wedding? We are dedicated to create a magical and memorable experience that is uniquely yours. `,
        image: `http://theoldginhouse.com/pages/wp-content/uploads/2017/09/events04.jpg`
      },
      {
        title: "MEETING ROOM",
        description: `Gather your team and step outside the confines of the office to slow down, reflect, detach and dive into brainstorming, creative thinking, problem solving, team building and planning. Organize your business retreat with us to bring your coworkers closer together! Are you looking for space to hold a seminar, reunion, pitch or training? Our conference room is suitable for private meetings, presentations, workshops and interviews. If you need catering, coffee service or other facilities we can take care of those as well!`,
        image: `http://theoldginhouse.com/pages/wp-content/uploads/2017/09/events02.jpg`
      },
      {
        title: "BUSINESS EVENTS",
        description: `Are you looking for space to hold a seminar, reunion,
              pitch or training? Our conference room is suitable for private
              meetings, presentations, workshops and interviews. If you need
              catering, coffee service or other facilities we can take care of
              those as well!`,
        image: `http://theoldginhouse.com/pages/wp-content/uploads/2017/09/events03.jpg`
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <FadeIn>
          <div className="container-fluid">
            <CaptionImage items={this.state.events} />
          </div>
          <div className="jumbotron text-center action m-0 text-white p-5  rounded-0">
            <div className="row">
              <div className="col-lg-8 text-right">
                <h2>Ready to host your event with us?</h2>
              </div>
              <div className="col-lg-4 text-left">
                <a href="/book" className="btn btn-outline-light m-2">
                  Book Now!
                </a>
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="#Contact"
                  className="btn btn-light m-2"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
        <Contact />
      </React.Fragment>
    );
  }
}

export default Events;
