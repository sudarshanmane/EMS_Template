import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Offcanvas from "../../../../src/Entryfile/offcanvance";
import SelfProfileHead from "./selfprofilehead";

const SelfProfile = () => {
  return (
    <>
      <div className="page-wrapper">
        <Helmet>
          <title>Client Profile - HRMS admin Template</title>
          <meta name="description" content="Reactify Blank Page" />
        </Helmet>

        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Profile</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Self Profile</li>
                </ul>
              </div>
            </div>
          </div>
          <SelfProfileHead />
        </div>
      </div>
      <Offcanvas />
    </>
  );
};
export default SelfProfile;
