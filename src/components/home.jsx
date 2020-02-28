import React, { Component } from "react";
import Carousel from "./carousel";
import CaptionImage from "./captionImage";

class Homepage extends Component {
  state = {
    carousel: [
      "http://theoldginhouse.com/pages/wp-content/uploads/2017/09/DSC_0609-Copy-1.jpg",
      "http://theoldginhouse.com/pages/wp-content/uploads/2017/09/IMG_0077-1.jpg",
      "http://theoldginhouse.com/pages/wp-content/uploads/2017/09/DSC_0548-Copy.jpg",
      "http://theoldginhouse.com/pages/wp-content/uploads/2017/09/OGH-Ocean-front-suite1-1.jpg",
      "http://theoldginhouse.com/pages/wp-content/uploads/2017/09/IMG_0075-1.jpg",
      "http://theoldginhouse.com/pages/wp-content/uploads/2017/10/Bruiloft-Sybolt-en-Marlies-470.jpg",
      "http://theoldginhouse.com/pages/wp-content/uploads/2017/09/DSC_0416-Copy.jpg"
    ],
    items: [
      {
        title: "EXPERIENCE STATIA IN STYLE",
        description: `Beautifully located on Orange Bay, Lower Town, Oranjestad and a hike away from the Quill Volcano, the highest point on Statia with panoramic views over the entire island and neighboring islands, the Caribbean Sea and Atlantic Ocean.`,
        image: `http://theoldginhouse.com/pages/wp-content/uploads/2017/09/home01.jpg`
      },
      {
        title: "COLONIAL STYLE LUXURY",
        description: `With 14 garden view rooms, 2 ocean view rooms, 2 junior suites and 2 ocean view suites we have enough variety to satisfy any type of traveler. All rooms are decorated in a warm style, accenting the building's architecture with colonial style furniture and comfortable king-size or twin mahogany beds.`,
        image: `http://theoldginhouse.com/pages/wp-content/uploads/2017/09/home05.jpg`,
        url: "/rooms"
      },
      {
        title: "OCEAN FRONT DINING",
        description: `The #1 seaside restaurant and the only oceanfront lounge deck on the island with a gorgeous view over the Caribbean Sea and neighbor island Saba. The combination of quality dining with breathtaking views turns a simple breakfast or dinner into a memorable experience.`,
        image: `http://theoldginhouse.com/pages/wp-content/uploads/2017/09/home03.jpg`,
        url: "/dine"
      },
      {
        title: "UNIQUE IN PLACE & EXPERIENCE",
        description: `Are you looking for an enchanting place with a classic, romantic and elegant atmosphere to hold your business event & wedding? We are dedicated to create a magical and memorable experience that is uniquely yours`,
        image: `http://theoldginhouse.com/pages/wp-content/uploads/2017/09/home06.jpg`,
        url: "/events"
      },
      {
        title: "DISCOVER HISTORIC STATIA",
        description: `The surrounding nature provides scenic hiking experiences and great strolls through the impressive forts. The absolute highlight of Statia is the inactive or dormant volcano, called 'The Quill'.`,
        image: `http://theoldginhouse.com/pages/wp-content/uploads/2017/09/home02.jpg`,
        url: "/discover"
      },
      {
        title: "STATIA'S UNDERWATER BEAUTY",
        description: `Explore amazing Statia's underwater Kingdom, which is a diver's paradise with its explosion of colors and rich marine life. Don't leave Statia without doing a dive that will uncover a world you never knew existed!`,
        image: `http://theoldginhouse.com/pages/wp-content/uploads/2017/09/home04.jpg`
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <Carousel images={this.state.carousel} />
        <div className="jumbotron text-center action m-0 text-white p-5 rounded-0">
          <div className="row">
            <div className="col-lg-12 text-center">
              <a href="/rooms" className="btn btn-light h3">
                <h3>VIEW OUR ROOMS</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <CaptionImage items={this.state.items} />
        </div>
      </React.Fragment>
    );
  }
}

export default Homepage;
