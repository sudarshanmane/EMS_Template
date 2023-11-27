import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Avatar_11 } from '../../../Entryfile/imagepath'
import Offcanvas from '../../../Entryfile/offcanvance';

const IncomingCall = () => {
  useEffect(() => {
    let firstload = localStorage.getItem("minheight")
    if (firstload === "false") {
      setTimeout(function () {
        window.location.reload(1)
        localStorage.removeItem("minheight")
      }, 1000)
    }
  });

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Incoming Call - HRMS Admin Template</title>
        <meta name="description" content="Incoming Call" />
      </Helmet>
      {/* Incoming Call */}
      <div className="call-box incoming-box">
        <div className="call-wrapper">
          <div className="call-inner">
            <div className="call-user">
              <img className="call-avatar" src={Avatar_11} alt="" />
              <h4>Wilmer Deluna</h4>
              <span>Calling ...</span>
            </div>
            <div className="call-items">
              <Link onClick={() => localStorage.setItem("minheight", "true")} to="/conversation/chat" className="btn call-item call-end"><i className="material-icons">call_end</i></Link>
              <Link to="/conversation/video-call" className="btn call-item call-start"><i className="material-icons">call</i></Link>
            </div>
          </div>
        </div>
      </div>
      {/* /Incoming Call */}
      <Offcanvas />
    </div>
  );
}

export default IncomingCall;
