import React, { Component } from "react";

class Dine extends Component {
  state = {
    currentPDF: ""
  };
  displayPDF = src => {
    const currentPDF = src;
    this.setState({ currentPDF });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid bg-light dine-cover">
          <div className="container bg-light p-5 shadow-lg">
            <h3>DINE WITH US</h3> The #1 seaside restaurant and the only
            oceanfront lounge deck on the island with a gorgeous view over the
            Caribbean Sea and neighbor island Saba. The combination of quality
            dining with breathtaking views turns a simple breakfast (7-10AM) or
            dinner (starting at 4PM) into a memorable experience. Our restaurant
            offers a tempting menu of fresh seafood, prime steaks and of course
            our famous ribs and chicken. The options are nearly limitless, from
            juicy steaks to Caribbean style lobsters or the catch of the day –
            fresh from the ocean and cooked to perfection!{" "}
            <p className="text-warning">
              <b>Our restaurants is closed on Tuesday and Wednesday</b>
            </p>
            <b>Our menus:</b>
            <ul className="list-group list-group-horizontal mt-2">
              <li className="list-group-item">
                <a
                  className="list-group-item list-group-item-action"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  href="#"
                  onClick={() =>
                    this.displayPDF(
                      "http://theoldginhouse.com/pages/wp-content/uploads/2017/10/breakfast.pdf"
                    )
                  }
                >
                  Breakfast
                </a>
              </li>
              <li className="list-group-item">
                <a
                  className="list-group-item list-group-item-action"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  href="#"
                  onClick={() =>
                    this.displayPDF(
                      "http://theoldginhouse.com/pages/wp-content/uploads/2019/05/Dinner-menu-May-2019.pdf"
                    )
                  }
                >
                  Dinner
                </a>
              </li>
              <li className="list-group-item">
                <a
                  className="list-group-item list-group-item-action"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  href="#"
                  onClick={() =>
                    this.displayPDF(
                      "http://theoldginhouse.com/pages/wp-content/uploads/2017/10/snacks.pdf"
                    )
                  }
                >
                  Snacks
                </a>
              </li>
            </ul>
            <h3 className="mt-4">RESERVE YOUR TABLE</h3>
            <p>
              Admire the beauty of green flash sunsets over a glass of wine or
              your favorite dish… Book your table today! Call us on +599 318
              2319
            </p>
            <div
              className="modal fade bd-example-modal-lg"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="myLargeModalLabel"
              id="exampleModal"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    <iframe
                      src={this.state.currentPDF}
                      width="100%"
                      height="500"
                      style={{ height: "85vh" }}
                    ></iframe>
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

export default Dine;
