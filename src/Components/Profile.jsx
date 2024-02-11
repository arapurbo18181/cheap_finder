import React from "react";
import Pheader from "./Pheader";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <Pheader />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-3 bg-dark p-3" id="profile">
            <h3>Profile Information</h3>
            <p>Username: Minhaz Siddique</p>
            <div className="dropdown-item">
              <p
                className="dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                id="drop"
              >
                Previous Search
              </p>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Iphone 10
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Samsung Glaxy A22
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Oppo 15 pro
                  </a>
                </li>
              </ul>
            </div>
            <a href="#" className="logout">
              Log Out
            </a>
          </div>

          <div className="col-12 col-md-9 bg-white p-3">
            <div className="text-center">
              <img
                src="img/cheapfinder.png"
                alt="CheapFinder"
                className="img-fluid"
              />
            </div>

            <div className="row">
              <div className="col-12 col-md-6 nested-column">
                <h4 className="mt-3">Search Through Image</h4>
                <button className="btn btn-primary bg-warning" id="btn">
                  Search
                </button>
              </div>

              <div className="col-12 col-md-6 nested-column">
                <h4 className="mt-3">Search Through Barcode</h4>
                <button className="btn btn-primary bg-success " id="btn">
                  Search
                </button>
              </div>
            </div>

            <div className="input-group mt-6" id="key">
              <input
                type="text"
                className="form-control search-bar"
                placeholder="Search Through Product Name"
                id="inp"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary bg-danger"
                  type="button"
                  id="btn"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="table-responsive mt-4">
              <table className="table table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>URL</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="product1.jpg"
                        alt="Product 1"
                        className="img-thumbnail"
                        width="100"
                      />
                    </td>
                    <td>Product 1 Name</td>
                    <td>Product 1 Description</td>
                    <td>
                      <a href="product1-url" target="_blank">
                        Product 1 URL
                      </a>
                    </td>
                    <td>$19.99</td>
                  </tr>

                  <tr>
                    <td>
                      <img
                        src="product2.jpg"
                        alt="Product 2"
                        className="img-thumbnail"
                        width="100"
                      />
                    </td>
                    <td>Product 2 Name</td>
                    <td>Product 2 Description</td>
                    <td>
                      <a href="product2-url" target="_blank">
                        Product 2 URL
                      </a>
                    </td>
                    <td>$29.99</td>
                  </tr>

                  <tr>
                    <td>
                      <img
                        src="product3.jpg"
                        alt="Product 3"
                        className="img-thumbnail"
                        width="100"
                      />
                    </td>
                    <td>Product 3 Name</td>
                    <td>Product 3 Description</td>
                    <td>
                      <a href="product3-url" target="_blank">
                        Product 3 URL
                      </a>
                    </td>
                    <td>$39.99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
