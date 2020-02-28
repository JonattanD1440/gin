import React, { Component } from "react";
import FadeIn from "react-fade-in";
import CaptionImage from "./captionImage";
import DisplayRoom from "./displayRoom";

class Rooms extends Component {
  state = {
    rooms: [
      {
        name: "GARDEN VIEW ROOMS",
        description: `All garden view rooms are connected to a balcony, offering
                    spectacular views of the tropical lush garden and pool area.
                    Rooms feature a king or twin colonial bed, 40-inch flat
                    screen TV, mini-fridge, complimentary Wi-Fi and recently
                    renovated.`,
        images: [
          "http://theoldginhouse.com/pages/wp-content/uploads/2017/09/OGH-Garden-view-room.jpg",
          "http://theoldginhouse.com/pages/wp-content/uploads/2017/10/IMG_0144.jpg",
          "http://theoldginhouse.com/pages/wp-content/uploads/2017/10/IMG_0133.jpg",
          "http://theoldginhouse.com/pages/wp-content/uploads/2017/10/IMG_0070.jpg"
        ]
      },
      {
        name: "OCEAN VIEW ROOMS",
        description: `All ocean view rooms are connected to a balcony, offering a stunning ocean front view. Rooms feature a king or twin colonial bed, 40-inch flat screen TV, mini-fridge, complimentary Wi-Fi and bathroom. Here’s where you will find inner peace and relaxation, overlooking the beautiful ocean.`,
        images: [
          "http://theoldginhouse.com/pages/wp-content/uploads/2017/09/OGH-Beach-front1.jpg",
          "http://theoldginhouse.com/pages/wp-content/uploads/2017/10/IMG_0144.jpg",
          "http://theoldginhouse.com/pages/wp-content/uploads/2017/10/IMG_0133.jpg",
          "http://theoldginhouse.com/pages/wp-content/uploads/2017/10/IMG_0070.jpg"
        ]
      },
      {
        name: "JUNIOR SUITES",
        description: `All junior suites are connected via an outside terrace, offering direct access to our tropical lush garden and pool area. Premium amenities include a king or twin colonial bed, big flat screen TV, mini-fridge, complimentary Wi-Fi and spacious.`,
        images: [
          "http://theoldginhouse.com/pages/wp-content/uploads/2017/09/OGH-Suite1.jpg",
          "http://theoldginhouse.com/pages/wp-content/uploads/2017/09/OGH-Suite3.jpg",
          "http://theoldginhouse.com/pages/wp-content/uploads/2017/09/OGH-Suite2.jpg",
          "http://theoldginhouse.com/pages/wp-content/uploads/2017/09/IMG_0091.jpg"
        ]
      },
      {
        name: "OCEAN VIEW SUITES",
        description: `All ocean view suites feature a living room, kitchenette, separate bedroom with king or twin size colonial bed, separate working space and a stunning ocean front view from the balcony. Other premium amenities include big flat screen TV, mini-fridge, complimentary Wi-Fi and bathroom. Enjoy the space, relax and connect with the sights and sounds of the ocean.`,
        images: [
          "http://theoldginhouse.com/pages/wp-content/uploads/2017/09/OGH-Ocean-front-suite1.jpg",
          "http://theoldginhouse.com/pages/wp-content/uploads/2017/09/IMG_0147.jpg",
          "http://theoldginhouse.com/pages/wp-content/uploads/2017/09/IMG_0157.jpg",
          "http://theoldginhouse.com/pages/wp-content/uploads/2017/09/IMG_0111.jpg"
        ]
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid bg-light room-cover">
          <div className="container bg-light p-5 shadow-lg">
            <h3>ROOMS</h3>With 14 garden view rooms, 2 ocean view rooms, 2
            junior suites and 2 ocean view suites we have enough variety to
            satisfy any type of traveler. All rooms are decorated in a warm
            style, accenting the building's architecture with colonial style
            furniture and comfortable king-size or twin mahogany beds. The rooms
            are equipped with air-conditioning, cable TV, mini-fridge as well as
            complimentary wireless internet. Other room amenities are: phone,
            balcony seat and hair dryer. Iron and ironing board are available
            upon request.
            {this.state.rooms.map(room => (
              <DisplayRoom room={room} key={room.name} />
            ))}
          </div>
        </div>
        <div className="jumbotron text-center action m-0 text-white p-5 rounded-0">
          <div className="row">
            <div className="col-lg-12 text-center">
              <a
                data-toggle="modal"
                data-target="#exampleModal"
                href="#"
                className="btn btn-light h3"
              >
                <h3>OUR FACILITIES</h3>
              </a>
            </div>
          </div>
        </div>
        <div
          className="modal fade bd-example-modal-lg"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          id="exampleModal"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  FACILITIES: Pool, restaurant, bar, beach, balcony
                </h5>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src="http://theoldginhouse.com/pages/wp-content/uploads/2017/09/DSC_0609-Copy.jpg"
                      alt=""
                      className="img-responsive"
                    />
                  </div>
                  <div className="col-md-8">
                    Our friendly and knowledgeable staff will make you feel
                    welcome and at ease from the minute you walk into the lobby.
                    They will be happy to check you in and advise you on making
                    the most of your visit. Next to the lobby you will find a
                    beautifully restored, historic bar, where you can relax in a
                    cozy atmosphere and choose from a great selection of wines,
                    draft beers, cocktails and other drinks to suit every taste.
                    From the balcony you can use the telescope to view the
                    wonders of the universe. Impressive green flash sunsets can
                    be witnessed from the ocean front deck of the restaurant,
                    while having great food and cocktails. Free beach chairs, as
                    well as umbrellas and towels are provided during your stay
                    with us. The pool with towel service is located in the
                    tropical lush garden, next to the garden view rooms.
                    Complimentary Wi-Fi is provided in all guest rooms, suites
                    and public areas for your convenience.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Rooms;
