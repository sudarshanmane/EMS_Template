import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Avatar_02 } from '../../../Entryfile/imagepath'
import Offcanvas from '../../../Entryfile/offcanvance';

const OutgoingCall = () => {
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
        <title>Outgoing Call - HRMS Admin Template</title>
        <meta name="description" content="Outgoing Call" />
      </Helmet>
      {/* Outgoing Call */}
      <div className="call-box outgoing-box">
        <div className="call-wrapper">
          <div className="call-inner">
            <div className="call-user">
              <img alt="" src={Avatar_02} className="call-avatar" />
              <h4>John Doe</h4>
              <span>Connecting...</span>
            </div>
            <div className="call-items">
              <Link to="" className="btn call-item"><i className="material-icons">mic</i></Link>
              <Link to="" className="btn call-item"><i className="material-icons">videocam</i></Link>
              <Link onClick={() => localStorage.setItem("minheight", "true")} to="/conversation/chat" className="btn call-item call-end"><i className="material-icons vcend">call_end</i></Link>
              <Link to="" className="btn call-item"><i className="material-icons">person_add</i></Link>
              <Link to="" className="btn call-item"><i className="material-icons">volume_up</i></Link>
            </div>
          </div>
        </div>
      </div>
      {/* Outgoing Call */}
      <Offcanvas />
    </div>
  );

}

export default OutgoingCall;
