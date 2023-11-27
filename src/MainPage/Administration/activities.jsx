import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Avatar_01, Avatar_16, Avatar_08, Avatar_13, Avatar_05 } from "../../Entryfile/imagepath"
import Offcanvas from '../../Entryfile/offcanvance';

const Activities = () => {
  useEffect(() => {
    let firstload = localStorage.getItem("minheight")
    if (firstload === "true") {
      setTimeout(function () {
        window.location.reload(1)
        localStorage.removeItem("minheight")
      }, 1000)
    }
  });

  return (
    <>
      <div className="page-wrapper">
        <Helmet>
          <title>Activities - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Activities</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                  <li className="breadcrumb-item active">Activities</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12">
              <div className="activity">
                <div className="activity-box">
                  <ul className="activity-list">
                    <li>
                      <div className="activity-user">
                        <Link to="/app/profile/employee-profile" title="Lesley Grauer" data-bs-toggle="tooltip" className="avatar">
                          <img src={Avatar_01} alt="" />
                        </Link>
                      </div>
                      <div className="activity-content">
                        <div className="timeline-content">
                          <Link to="/app/profile/employee-profile" className="name">Lesley Grauer</Link> added new task <Link to="#">Hospital Administration</Link>
                          <span className="time">4 mins ago</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="activity-user">
                        <Link to="/app/profile/employee-profile" className="avatar" title="Jeffery Lalor" data-bs-toggle="tooltip">
                          <img src={Avatar_16} alt="" />
                        </Link>
                      </div>
                      <div className="activity-content">
                        <div className="timeline-content">
                          <Link to="/app/profile/employee-profile" className="name">Jeffery Lalor</Link> added <Link to="/app/profile/employee-profile" className="name">Loren Gatlin</Link> and <Link to="/app/profile/employee-profile" className="name">Tarah Shropshire</Link> to project <Link to="#">Patient appointment booking</Link>
                          <span className="time">6 mins ago</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="activity-user">
                        <Link to="/app/profile/employee-profile" title="Catherine Manseau" data-bs-toggle="tooltip" className="avatar">
                          <img src={Avatar_08} alt="" />
                        </Link>
                      </div>
                      <div className="activity-content">
                        <div className="timeline-content">
                          <Link to="/app/profile/employee-profile" className="name">Catherine Manseau</Link> completed task <Link to="#">Appointment booking with payment gateway</Link>
                          <span className="time">12 mins ago</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="activity-user">
                        <Link to="#" title="Bernardo Galaviz" data-bs-toggle="tooltip" className="avatar">
                          <img src={Avatar_13} alt="" />
                        </Link>
                      </div>
                      <div className="activity-content">
                        <div className="timeline-content">
                          <Link to="/app/profile/employee-profile" className="name">Bernardo Galaviz</Link> changed the task name <Link to="#">Doctor available module</Link>
                          <span className="time">1 day ago</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="activity-user">
                        <Link to="/app/profile/employee-profile" title="Mike Litorus" data-bs-toggle="tooltip" className="avatar">
                          <img src={Avatar_05} alt="" />
                        </Link>
                      </div>
                      <div className="activity-content">
                        <div className="timeline-content">
                          <Link to="/app/profile/employee-profile" className="name">Mike Litorus</Link> added new task <Link to="#">Patient and Doctor video conferencing</Link>
                          <span className="time">2 days ago</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="activity-user">
                        <Link to="/app/profile/employee-profile" title="Jeffery Lalor" data-bs-toggle="tooltip" className="avatar">
                          <img src={Avatar_16} alt="" />
                        </Link>
                      </div>
                      <div className="activity-content">
                        <div className="timeline-content">
                          <Link to="/app/profile/employee-profile" className="name">Jeffery Lalor</Link> added <Link to="/app/profile/employee-profile" className="name">Jeffrey Warden</Link> and <Link to="/app/profile/employee-profile" className="name">Bernardo Galaviz</Link> to the task of <Link to="#">Private chat module</Link>
                          <span className="time">7 days ago</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
      <Offcanvas />
    </>


  );
}

export default Activities;
