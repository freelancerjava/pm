import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm, SubmissionError } from "redux-form";
import { Routines } from "../../common/api";
// import "./styles.css";

import { style } from "../../variables/Variables.jsx";
import { connect } from "react-redux";
// import { Hero, Container, Tabs, Title, Box, Button } from "reactbulma";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Exception from "../../common/api/Exception";
import moment from "moment";
import { history } from "../../common/createStore";
import { LOGOUT } from "../../common/constants";

class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loginErr: false
    }
  }
  onClick() {
    const { handleSubmit } = this.props;
    return handleSubmit(data => {

      history.push("#/dashboard");
      window.location.reload();


      if (false && (data.order_number && data.tracking_code))
        return Routines.admin
          .orderDetail(
            {
              request: {
                order_number: data.order_number,
                tracking_code: data.tracking_code
              }
            },
            this.props.dispatch
          )
          .then(() => {
            this.setState({ loginErr: false })
            if (this.props.order) {
              this.props.order.map((item) => {
                Routines.admin.getLastRoute({
                  request: {
                    id: item && item.id
                  }
                }, this.props.dispatch)
                Routines.admin.hourlyList({
                  request: {
                    id: item && item.id
                  }
                }, this.props.dispatch)
                Routines.admin.attachmentList({
                  request: {
                    id: item && item.id
                  }
                }, this.props.dispatch)
              })

            }
          }).then(() => {
            if (this.props.attachmentList) {
              setTimeout(() => {
                history.push("#/dashboard");
                window.location.reload();
              }, 2000)
            }
          })
          .catch(e => {
            this.setState({ loginErr: true })
            if (e instanceof Exception.ValidationException) {
              throw new SubmissionError(e.errors);
            }
            throw e;
          });
    })();
  }
  componentDidMount() {
    this.props.dispatch({ type: LOGOUT });
  }
  render() {
    // console.log(this.props.spinner)
    return (
      <div className="wrapper">
        <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
          <div className="container container-s">
            <a className="navbar-brand" href="#">
              <img className="img-fluid" src="assets/icons/logo.png" alt="Logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {" "}
              <span className="navbar-toggler-icon"></span>{" "}
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto navbar-right">
                <li className="nav-item">
                  <a
                    className="btn-cta nav-link js-scroll-trigger"
                    href="index.html"
                  >
                    Back
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="main" className="main">
          <div className="home">
            <div className="container">
              <div className="row text-center">
                <div className="col-md-12">
                  <div className="hero-content wow fadeIn">
                    <h1>Freight Tracking</h1>
                    <p>
                      Enter your order number and tracking number to get
                      real-time data on the status of your shipment.
                    </p>
                    <div className={this.state.loginErr ? "login-error show" : "login-error"}>Tracking code or Order number wrong!</div>
                    <div className="form wow fadeIn" data-wow-delay="0.2s">
                      <form
                        id="chimp-form"
                        className="subscribe-form wow zoomIn"
                        action="assets/php/subscribe.php"
                        method="post"
                        accept-charset="UTF-8"
                        enctype="application/x-www-form-urlencoded"
                        autocomplete="off"
                        novalidate
                      >
                        <Field
                          name={"tracking_code"}
                          placeholder={"Your tracking code"}
                          component="input"
                          type={"text"}
                        />
                        <br />

                        <Field
                          name={"order_number"}
                          placeholder={"Your order id"}
                          component="input"
                          type={"text"}
                        />

                        <button
                          disabled={this.props.spinner}
                          onClick={e => {
                            e.preventDefault();
                            this.onClick();
                          }}
                          className={`submit-button`}
                        >
                          {this.props.spinner
                            ? "Submitting..."
                            : "Authentication"}
                        </button>
                        <p className={"has-text-danger is-size-5 title"}>
                          {this.props.loginError}
                        </p>
                      </form>

                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="signup" className="cta-sm">
              <div className="container-m text-center">
                <div className="cta-content">
                  <h4>CONTACT US</h4>
                  <div className="form wow fadeIn" data-wow-delay="0.2s">
                    <div id="response"></div>
                  </div>
                  <div className="form-note">
                    <p>
                      Phone: <span className="style3">(833) 833-1991</span> | Email:
                      <a href="mailto:team@pointmax.io" className="style3">
                        {" "}
                        team@pointmax.io
                      </a>
                      <br />
                      <br />
                      420 Lexington Ave New York NY 10170
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-sm">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <ul>
                      <li>
                        <a href="https://play.google.com/store/apps/details?id=io.pointmax.app">
                          <img
                            alt="Get it on Google Play"
                            src="assets/icons/googlestore.png"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://itunes.apple.com/us/app/pointmax/id1451454175?mt=8">
                          <img
                            alt="Get it on App Store"
                            src="assets/icons/appstore.png"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h6>PointMax, Inc. &copy; 2020.</h6>{" "}
                  </div>
                  <div className="col-md-4">
                    <ul>
                      <li>
                        <a href="#">Facebook</a>
                      </li>
                      <li>
                        <a href="#">Twitter</a>
                      </li>
                      <li>
                        <a href="#">Linkedin</a>
                      </li>
                      <li>
                        <a href="#">Instagram</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id="back-top" className="bk-top">
              <div className="bk-top-txt">
                {" "}
                <a className="back-to-top js-scroll-trigger" href="#main">
                  top
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const _Login = reduxForm({
  form: "login",
  enableReinitialize: false
})(Index);
const mapStateToProps = (state, ownProps) => {
  return {
    order: state.order.order,
    tracking: state.routeList.tracking,
    spinner: state.temp.spinner,
    loginError: state.temp.loginError,
    routeList: state.routeList.tracking,
    attachmentList: state.attachmentList.data,
  };
};
export default connect(mapStateToProps)(_Login);
