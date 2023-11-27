import React, { useState } from "react";
import { Link } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./calendar.css";
import Header from "../../../initialpage/Sidebar/header";
import Sidebar from "../../../initialpage/Sidebar/sidebar";
import Modalbox from "../../../_components/modelbox/modalbox";
import Offcanvas from "../../../Entryfile/offcanvance";

const Calendar = () => {
  const [menu, setMenu] = useState(false);
  const toggleMobileMenu = () => {
    setMenu(!menu);
  };
  const setshowEvents = false;
  const setshow = false;
  const [showmodel, setshowmodel] = useState(false);
  const [isEditDelete, setiseditdelete] = useState(false);

    // [setaddneweventobj] = useState(null),
    // const [setisnewevent] = useState(false);
    const [setevent_title] = useState("");
    const [calenderevent, setcalenderevent] = useState("");

    const [weekendsVisible] = useState(true);
     const defaultEvents = [
      {
        title: "Event Name 4",
        start: Date.now() + 148000000,
        className: "bg-purple",
      },
      {
        title: "Test Event 1",
        start: Date.now(),
        end: Date.now(),
        className: "bg-success",
      },
      {
        title: "Test Event 2",
        start: Date.now() + 168000000,
        className: "bg-info",
      },
      {
        title: "Test Event 3",
        start: Date.now() + 338000000,
        className: "bg-primary",
      },
    ];
  const handleClose = () => {
    setisnewevent(false);
    setiseditdelete(false);
    setshow(false);
    setshowEvents(false);
    setshowmodel(false);
  };
  const handleEventClick = (clickInfo) => {
    setiseditdelete(false);
    setevent_title(clickInfo.event.title);

    setcalenderevent(clickInfo.event);
  };
  // const handleEventClick = (clickInfo) => {
  //   setiseditdelete(false);
  //   // setevent_title(clickInfo.event.title);
  //   setcalenderevent(clickInfo.event);
  // };

  const handleDateSelect = () => {
    // setisnewevent(true)
    // setaddneweventobj(selectInfo)
  };

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />

        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">Calendar</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/index">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Calendar</li>
                  </ul>
                </div>
                <div className="col-auto text-end float-end ms-auto">
                  <Link
                    to="#"
                    className="btn add-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#add_event"
                  >
                    <i className="fa fa-plus" /> Add Event
                  </Link>
                </div>
              </div>
            </div>
            {/*  /Page Header */}

            <div className="row">
              <div className="col-md-12">
                <div className="card bg-white calendarIndex">
                  <div className="card-body">
                    <FullCalendar
                      plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                      ]}
                      headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay",
                      }}
                      initialView="dayGridMonth"
                      editable={true}
                      selectable={true}
                      selectMirror={true}
                      dayMaxEvents={true}
                      weekends={weekendsVisible}
                      initialEvents={defaultEvents}
                      // select={handleDateSelect}
                      // eventClick={(clickInfo) => handleEventClick(clickInfo)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/*  Add Event modal */}
            <div
              id="add_event"
              className="modal custom-modal fade"
              role="dialog"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Add Event</h5>
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="input-block">
                        <label>
                          Event Name <span className="text-danger">*</span>
                        </label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="input-block">
                        <label>
                          Event Date <span className="text-danger">*</span>
                        </label>
                        <div>
                          <input className="form-control" type="date" />
                        </div>
                      </div>
                      <div className="input-block mb-0">
                        <label>Choose Category Color</label>
                        <select
                          className="form-control form-white"
                          data-placeholder="Choose a color..."
                          name="category-color"
                        >
                          <option value="success">Success</option>
                          <option value="danger">Danger</option>
                          <option value="info">Info</option>
                          <option value="primary">Primary</option>
                          <option value="warning">Warning</option>
                          <option value="inverse">Inverse</option>
                        </select>
                      </div>
                      <div className="submit-section">
                        <button className="btn btn-primary submit-btn">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*  /Add Event modal */}

            {/*  Create Event modal */}
            <div className="modal custom-modal fade none-border" id="my_event">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">Add Event</h4>
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="modal"
                      aria-hidden="true"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="modal-body"></div>
                  <div className="modal-footer justify-content-center">
                    <button
                      type="button"
                      className="btn btn-success save-event submit-btn"
                    >
                      Create event
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger delete-event submit-btn"
                      data-bs-dismiss="modal"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/*  /Create Event modal */}

            <Modalbox show={showmodel} handleClose={handleClose} />
          </div>
        </div>
      </div>
      <Offcanvas />
    </>
  );
};
export default Calendar;
