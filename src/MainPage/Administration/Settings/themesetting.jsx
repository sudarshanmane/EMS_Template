import React from "react";
import { Helmet } from "react-helmet";
import { Applogo } from "../../../Entryfile/imagepath";
import Offcanvas from "../../../Entryfile/offcanvance";

const ThemeSettings = () => {
  return (
    <>
      <div className="page-wrapper">
        <Helmet>
          <title>Theme Settings - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2 box-align">
              {/* Page Header */}
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="page-title">Theme Settings</h3>
                  </div>
                </div>
              </div>
              {/* /Page Header */}
              <form>
                <div className="input-block row">
                  <label className="col-lg-3 col-form-label">
                    Website Name
                  </label>
                  <div className="col-lg-9">
                    <input
                      name="website_name"
                      className="form-control"
                      defaultValue="Dreamguy's Technologies"
                      type="text"
                    />
                  </div>
                </div>
                <div className="input-block row">
                  <label className="col-lg-3 col-form-label">Light Logo</label>
                  <div className="col-lg-7">
                    <input type="file" className="form-control" />
                    <span className="form-text text-muted">
                      Recommended image size is 40px x 40px
                    </span>
                  </div>
                  <div className="col-lg-2">
                    <div className="img-thumbnail float-end">
                      <img src={Applogo} alt="" width={40} height={40} />
                    </div>
                  </div>
                </div>
                <div className="input-block row">
                  <label className="col-lg-3 col-form-label">Favicon</label>
                  <div className="col-lg-7">
                    <input type="file" className="form-control" />
                    <span className="form-text text-muted">
                      Recommended image size is 16px x 16px
                    </span>
                  </div>
                  <div className="col-lg-2">
                    <div className="settings-image img-thumbnail float-end">
                      <img
                        src={Applogo}
                        className="img-fluid"
                        width={16}
                        height={16}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
      <Offcanvas />
    </>
  );
};

export default ThemeSettings;
