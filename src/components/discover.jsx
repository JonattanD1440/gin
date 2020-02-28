import React, { Component } from "react";
import FadeIn from "react-fade-in";
import CaptionImage from "./captionImage";
import Contact from "./contact.jsx";

class Discover extends Component {
  state = {
    tours: [
      {
        title: "HISTORY TOURS",
        description: `Statia is steeped in rich history. Today it is home to plenty of fascinating historical attractions that link the island to its storied past. You'll be fascinated by the island's well-preserved architecture and remarkable monuments and historic sites, which are all worth visiting. It's an untouched piece of paradise which allows you to experience an authentic island-style charm!`,
        image: `http://theoldginhouse.com/pages/wp-content/uploads/2017/09/discover01.jpg`,
        url: "http://www.statia-tourism.com/history/golden-history/"
      },
      {
        title: "MUSEUMS",
        description: `The St. Eustatius Historical Museum takes you back in the 18th century. Imagine how life might have been back then… Come admire antique furniture, ceramics and prehistoric archaeology. Within walking distance from the museum there are several other historic must-see monuments and tourist attractions.`,
        image: `http://theoldginhouse.com/pages/wp-content/uploads/2017/09/discover02.jpg`,
        url: "http://www.statia-tourism.com/history/monuments-churches/"
      },
      {
        title: "THE QUILL",
        description: `The absolute highlight of Statia is the inactive or dormant volcano, called "The Quill". When reaching the highest point, the view of the neighboring islands is spectacular and the enormous crater contains a tropical rainforest with giant trees and colorful plants and flowers. You've got to put this on your to-do list, cause it's the perfect opportunity to take beautiful photos and enjoy the breathtaking views!`,
        image: `http://theoldginhouse.com/pages/wp-content/uploads/2017/09/discover03.jpg`,
        url: "http://www.statia-tourism.com/nature/the-quill/"
      },
      {
        title: "YOGA",
        description: `Statia is an island of outstanding natural beauty, where you will find a little peace, pure relaxation and connect with yourself and nature. The natural and peaceful surroundings make it the perfect place to practice yoga as well as meditation. So if you are searching for your inner peace, start packing your yoga pants and get on your way to Statia, the yoga retreat island!`,
        image: `http://theoldginhouse.com/pages/wp-content/uploads/2017/09/discover04.jpg`
      },
      {
        title: "SNORKELING",
        description: `The beach life on Statia is unique. There are volcanic black sand beaches, which are perfect for sunbathing only and preferred beaches for swimming or snorkeling. On Smoke Alley Beach, Zeelandia Beach or Lynch Beach you can enjoy the nice sunny climate tanning on the beach. If you want to explore Statia's beautiful marine life, go to Crooks Castle Beach to snorkel. For a refreshing swim Smoke Alley Beach is the best option with its crystal clear water.`,
        image: `http://theoldginhouse.com/pages/wp-content/uploads/2017/09/discover05.jpg`,
        url:
          "http://www.statia-tourism.com/nature/explore-our-island/bays-and-beaches/"
      },
      {
        title: "BOAT TOUR",
        description: `Coming soon.`,
        image: `http://theoldginhouse.com/pages/wp-content/uploads/2017/09/discover06.jpg`
      },
      {
        title: "CAR RENTAL",
        description: `A car is the perfect transportation to explore Statia and to get around. Island Essence can assist you with arranging the car. Currently they offer several types of cars. They offer both short and long term rental. The cars that they have in their portfolio are: Hyundai Getz, Suzuki Ignis, Kia Sorrento and Peugeot.`,
        image: `http://theoldginhouse.com/pages/wp-content/uploads/2017/09/discover07.jpg`,
        url: "http://www.islandessence.services/"
      },
      {
        title: "THE OLD GIN HOUSE",
        description: `The Old Gin house is beautifully located on Orange Bay, Lower Town Oranjestad and a hike away from the Quill Volcano, the highest point on Statia with panoramic views over the entire island and neighboring islands, the Caribbean Sea and Atlantic Ocean. The intimate hotel convinces with its charming, elegant and cozy ambience, where guests can find peace and pure relaxation without any unnecessary additions. The restaurant offers a diversified gastronomic experience accompanied by stunning ocean views.`,
        image: ``
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <FadeIn>
          <div className="container-fluid">
            <CaptionImage items={this.state.tours} />
          </div>
          <div className="jumbotron text-center action m-0 text-white p-5 rounded-0">
            <div className="row">
              <div className="col-lg-8 text-right ">
                <h2>Ready to discover Statia with us?</h2>
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

export default Discover;
