import React from "react";
import "./Go.css";

const Go = () => (
  <>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div class="animated-text">
            <h1>Why CheapFinder?</h1>
            <p id="text-animation">
              CheapFinder is a cutting-edge price comparison
              <br /> system that simplifies shopping.
              <br />
              Users can compare prices effortlessly
              <br />
              by searching through product names, barcodes,
              <br /> or using an image scanner. The platform provides a<br />{" "}
              quick and comprehensive overview of prices from <br /> various
              retailers,
              <br /> empowering users to make informed <br />
              and cost-effective purchasing decisions, ultimately
              <br /> enhancing their overall shopping experience.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-container">
            <img src="./img/cheapfinder.png" alt="Logo" id="logo" />
            <form>
              <div className="form-group">
                <label for="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter your username"
                />
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <p className="text-center">
                <a href="Registration">Don't have an account? Register</a>
              </p>
              <button
                type="submit"
                className="btn btn-primary btn-block"
                id="btn1"
              >
                Log in
              </button>
            </form>
            <div id="button-group">
              <button className="btn2 btn-secondary">Signup</button>
              <button className="btn3 btn-info">Guest</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Go;
