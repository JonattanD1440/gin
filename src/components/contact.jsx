import React, { Component } from "react";

class Contact extends Component {
  renderForm = () => {
    if (this.state.status === false) {
      return (
        <form action="javascript:void(0);">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputName4">Name</label>
              <input
                type="text"
                className="form-control"
                id="inputName4"
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Message</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => this.handleSubmit()}
          >
            Send Message
          </button>
        </form>
      );
    } else {
      return (
        <div className="alert alert-success text-center m-0" role="alert">
          Your message has been sent, we will reply to you shortly.
        </div>
      );
    }
  };
  handleSubmit = () => {
    this.setState({ status: true });
  };
  state = {
    status: false
  };
  render() {
    return (
      <div
        className="modal fade bd-example-modal-lg"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        id="Contact"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-body ">{this.renderForm()}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
