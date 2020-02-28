import React from "react";
import { FaFacebookF, FaTripadvisor, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="section footer-classic context-dark bg-image bg-dark pt-5">
        <div className="container">
          <div className="row row-30">
            <div className="col-md-4 col-xl-5">
              <div className="pr-xl-4">
                <a className="brand" href="index.html">
                  <img
                    className="brand-logo-light"
                    src="images/agency/logo-inverse-140x37.png"
                    alt=""
                    width="140"
                    height="37"
                  />
                </a>
                <h3>THE OLD GIN HOUSE</h3>
                <a
                  href="https://www.facebook.com/theoldginhouse/"
                  target="_blank"
                  className="h2 mr-3"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/theoldginhouse/"
                  target="_blank"
                  className="h2 mr-3"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.tripadvisor.com/Restaurant_Review-g150742-d1047333-Reviews-The_Old_Gin_House_Restaurant-St_Eustatius.html"
                  target="_blank"
                  className="h2"
                >
                  <FaTripadvisor />
                </a>
                <p className="rights mt-3">
                  <span>©</span>
                  <span className="copyright-year">2020</span>
                  <span>&nbsp;theoldginhouse.com</span>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <h5>Contacts</h5>
              <dl className="contact-list">
                <dt>Address:</dt>
                <dd>Oranjebaai 1 St. Eustatius D.W.I.</dd>
              </dl>
              <dl className="contact-list">
                <dt>Email:</dt>
                <dd>welcome@theoldginhouse.com</dd>
              </dl>
              <dl className="contact-list">
                <dt>Phone:</dt>
                <dd>(+599) 318-2319</dd>
              </dl>
              <dl className="contact-list">
                <dt>Fax:</dt>
                <dd>(+599) 318-2135</dd>
              </dl>
            </div>
            <div className="col-md-4 col-xl-3">
              <h5>Location</h5>
              <a
                data-toggle="modal"
                data-target="#ModalFooter"
                href="#"
                className="btn btn-light border-0 shadow-sm  m-0 p-0"
              >
                <img
                  src="http://theoldginhouse.com/pages/wp-content/uploads/2017/10/map.jpg"
                  alt=""
                  className="img-responsive"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div
        className="modal fade bd-example-modal-lg"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        id="ModalFooter"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-body bg-dark rounded p-0">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width="100%"
                    height="597"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=The%20Old%20Gin%20House%2C%20statia&t=&z=17&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
