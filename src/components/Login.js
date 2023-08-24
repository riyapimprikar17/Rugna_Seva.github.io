import React, { Component } from "react";
// import PropTypes from "prop-types";

export class Registration extends Component {
  render() {
    return (
      <div className="justify-content-center col-md-8 m-5 w-25">
        {/* <img className="img-fluid" src="/images/reg_photo.jpg" alt="/" /> */}
        <h3 className="justify-content-center align-items-center m-3">Login</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          {/* <div className="mb-3form-check fs-6 fst-italic">
            <Link className="nav-link" to="/NewReg">
              <button class="btn btn-outline-success btn-sm" type="submit">
                Don't have an account? Register
              </button>
            </Link>
          </div> */}
          <div className="flex-d">
            {/* <Link className="nav-link" to="/NewReg">
              <button class="btn btn-outline-success btn-sm" type="submit">
                Login
              </button>
            </Link> */}
          </div>
          <button type="submit" className="mt-3 btn btn-primary text-center">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Registration;
