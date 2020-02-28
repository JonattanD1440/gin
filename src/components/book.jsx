import React, { Component } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";
import moment from "moment";
import DisplayRoom from "./displayRoom";

class Book extends Component {
  componentDidUpdate() {
    setTimeout(() => {
      if (this.state.startDate && this.state.endDate) {
        this.setState({ showRooms: true });
      }
    }, 200);
  }
  showRooms = () => {
    if (this.state.showRooms == false) return null;
    return (
      <div className="container mb-5">
        {this.state.rooms.map(room => (
          <DisplayRoom room={room} key={room.name} />
        ))}
      </div>
    );
  };
  state = {
    showRooms: false,
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
        <div className="jumbotron text-center action m-0 text-white p-5 rounded-0">
          <div className="row">
            <div className="col-lg-4 text-right">
              <h3>Choose a date</h3>
            </div>
            <div className="col-lg-8 text-left">
              <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) =>
                  this.setState({ startDate, endDate })
                } // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              />
            </div>
          </div>
        </div>
        {this.showRooms()}
      </React.Fragment>
    );
  }
}

export default Book;
