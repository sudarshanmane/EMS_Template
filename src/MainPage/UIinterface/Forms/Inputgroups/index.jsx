import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Offcanvas from "../../../../Entryfile/offcanvance";

const Inputgrp = () => {
  return (
    <>
      <div className="page-wrapper">
        <Helmet>
          <title>Form Input Groups - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Input Groups</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Input Groups</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Basic Examples</h4>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="input-block row">
                      <label className="col-form-label col-lg-2">
                        Group Left
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              @
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-block row">
                      <label className="col-form-label col-lg-2">
                        Group Right
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <span
                              className="input-group-text"
                              id="basic-addon2"
                            >
                              @example.com
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-block row">
                      <label className="col-form-label col-lg-2">
                        URL Example
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">https://</span>
                          </div>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="input-block row">
                      <label className="col-form-label col-lg-2">
                        Group with Price
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                          </div>
                          <input type="text" className="form-control" />
                          <div className="input-group-append">
                            <span className="input-group-text">.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-block row mb-0">
                      <label className="col-form-label col-lg-2">
                        Group with Price (Left)
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                          </div>
                          <div className="input-group-prepend">
                            <span className="input-group-text">0.00</span>
                          </div>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Sizing</h4>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="input-block row">
                      <label className="col-form-label col-lg-2">
                        Input Group Large
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group input-group-lg">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="sizing-addon1"
                            >
                              @
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-describedby="sizing-addon1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-block row">
                      <label className="col-form-label col-lg-2">
                        Input Group Default
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="sizing-addon2"
                            >
                              @
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-describedby="sizing-addon2"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-block row mb-0">
                      <label className="col-form-label col-lg-2">
                        Input Group Small
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group input-group-sm">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="sizing-addon3"
                            >
                              @
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-describedby="sizing-addon3"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Checkbox and Radio Addons</h4>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="input-block row">
                      <label className="col-form-label col-lg-2">
                        Checkbox
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <input type="checkbox" className="chck" />
                            </span>
                          </div>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="input-block row mb-0">
                      <label className="col-form-label col-lg-2">Radio</label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <input type="radio" className="chck" />
                            </span>
                          </div>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Multiple Addons</h4>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="input-block row">
                      <label className="col-form-label col-lg-2">
                        Radio and Text Addons
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <input type="checkbox" className="chck" />
                            </span>
                          </div>
                          <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                          </div>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="input-block row mb-0">
                      <label className="col-form-label col-lg-2">
                        Two Addons
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                          </div>
                          <div className="input-group-prepend">
                            <span className="input-group-text">0.00</span>
                          </div>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card mb-0">
                <div className="card-header">
                  <h4 className="card-title mb-0">Buttons with dropdowns</h4>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="input-block row">
                      <label className="col-form-label col-lg-2">
                        Radio and Text Addons
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <button
                              type="button"
                              className="btn btn-white dropdown-toggle h-100"
                              data-bs-toggle="dropdown"
                            >
                              Action
                            </button>
                            <div className="dropdown-menu">
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Something else here
                              </Link>
                              <div
                                role="separator"
                                className="dropdown-divider"
                              />
                              <Link className="dropdown-item" to="#">
                                Separated link
                              </Link>
                            </div>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Left dropdown"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-block row mb-0">
                      <label className="col-form-label col-lg-2">
                        Two Addons
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Right dropdown"
                          />
                          <div className="input-group-append">
                            <button
                              type="button"
                              className="btn btn-white dropdown-toggle h-100"
                              data-bs-toggle="dropdown"
                            >
                              Action
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Something else here
                              </Link>
                              <div
                                role="separator"
                                className="dropdown-divider"
                              />
                              <Link className="dropdown-item" to="#">
                                Separated link
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Offcanvas />
    </>
  );
};
export default Inputgrp;
