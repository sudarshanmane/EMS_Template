import { Radio } from 'antd';
import React, { useEffect, useState } from "react";
import { Button, Form, Input, Row, Col, Upload, Modal,Select } from "antd";
// import { getUser } from "../../utils/sessionStorage";
// import { useNavigate } from "react-router-dom";
// import { URLS } from "../../globals/urls";
// const { Option } = Select;
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Offcanvas from "../../Entryfile/offcanvance"; 

const CodeAccountGroup = () => {
  
   
  return (
    <>
      <div className="page-wrapper">
        <Helmet>
          <title>Horizontal Form - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Add Accounting Code Group</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Add Accounting Code Group</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}

          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Expense Form</h4>
                </div>
                <div className="card-body">
                  
                  <form action="#">
                    <div className="row">
                      <div className="col-xl-6">
                      
                        <div className="input-block row">
                          <label
                            className="col-lg-3 col-form-label"
                            name="description"
                          >
                           Accounting Code Group Name
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                       
                      </div>
                    </div>

                    <div className="text-end">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
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
}

export default CodeAccountGroup
