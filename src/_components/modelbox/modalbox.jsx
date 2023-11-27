/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Modalbox = (props) => {
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };
  const calenderevent = "";
  const setiseditdelete = false;
  const addneweventobj = null;
  const setisnewevent = false;
  const [event_title, setevent_title] = useState("");
  const [category_color, setcategory_color] = useState(""),
    defaultEvents = [
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
  };
  const addnewevent = () => {
    let calendarApi = addneweventobj.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (event_title) {
      calendarApi.addEvent({
        id: 10,
        title: event_title,
        className: category_color,
        start: addneweventobj.startStr,
        end: addneweventobj.endStr,
        allDay: addneweventobj.allDay,
      });
    }
    setisnewevent(false);
  };
  const removeevent = () => {
    calenderevent.remove();
    setiseditdelete(false);
  };
  const clickupdateevent = () => {
    const newArray = defaultEvents;
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].id === parseInt(calenderevent.id)) {
        newArray[i].title = event_title;
      }
    }
    setiseditdelete(false);
  };
  const rendereventclick = () => {
    return (
      <form className="event-form">
        <label>Change event name</label>
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            value={event_title}
            onChange={(event) => setevent_title(event.target.value)}
          />
          <span className="input-group-append">
            <button
              type="button"
              className="btn btn-success btn-md"
              onClick={() => clickupdateevent}
            >
              Save
            </button>
          </span>
        </div>
      </form>
    );
  };
  const renderaddnewevent = () => {
    return (
      <form>
        <div className="row">
          <div className="col-md-12">
            <div className="input-block">
              <label className="control-label">Event Name</label>
              <input
                className="form-control"
                type="text"
                name="title"
                value={event_title}
                onChange={(event) => setevent_title(event.target.value)}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="input-block">
              <label className="control-label">Category</label>
              <select
                className="select form-control"
                name="category"
                onChange={(event) => setcategory_color(event.target.value)}
              >
                <option value="bg-danger">Danger</option>
                <option value="bg-success">Success</option>
                <option value="bg-purple">Purple</option>
                <option value="bg-primary">Primary</option>
                <option value="bg-pink">Pink</option>
                <option value="bg-info">Info</option>
                <option value="bg-inverse">Inverse</option>
                <option value="bg-orange">Orange</option>
                <option value="bg-brown">Brown</option>
                <option value="bg-teal">Teal</option>
                <option value="bg-warning">Warning</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    );
  };

  return (
    <>
      <Modal centered show={props.show == "showEvents"} onHide={handleClose}>
        <Modal.Header>
          <h5 className="modal-title">Add Event</h5>
          <button
            type="button"
            className="close"
            data-bs-dismiss="modal"
            onClick={handleClose}
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body>
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
              <div className="cal-icon">
                <DatePicker
                  selected={selectedDate1}
                  onChange={handleDateChange1}
                  className="form-control floating datetimepicker"
                  type="date"
                />
              </div>
            </div>
            <div className="submit-section">
              <button className="btn btn-primary submit-btn">Submit</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      <Modal centered show={props.show == "showCategory"} onHide={handleClose}>
        <Modal.Header>
          <h4 className="modal-title">Add Category</h4>
          <button
            type="button"
            className="close"
            data-bs-dismiss="modal"
            onClick={handleClose}
            aria-hidden="true"
          >
            &times;
          </button>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="input-block">
              <label>Category Name</label>
              <input
                className="form-control form-white"
                placeholder="Enter name"
                type="text"
                name="category-name"
              />
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
              <button
                type="button"
                className="btn btn-primary save-category submit-btn"
                data-bs-dismiss="modal"
              >
                Save
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      {/*  /Add Category modal */}

      {/* {Event Click} */}
      <Modal centered show={props.show == "iseditdelete"} onHide={handleClose}>
        <Modal.Header>Event</Modal.Header>
        <Modal.Body>{rendereventclick()}</Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-danger submit-btn delete-event"
            data-bs-dismiss="modal"
            onClick={() => removeevent()}
          >
            Delete
          </button>
        </Modal.Footer>
      </Modal>
      <Modal centered show={props.show == "isnewevent"} onHide={handleClose}>
        <Modal.Header>Event</Modal.Header>
        <Modal.Body>{renderaddnewevent()}</Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-success submit-btn delete-event"
            data-bs-dismiss="modal"
            onClick={() => addnewevent()}
          >
            Create event
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={props.show == "show"} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
              <div className="cal-icon">
                <DatePicker
                  selected={selectedDate2}
                  onChange={handleDateChange2}
                  className="form-control floating datetimepicker"
                  type="date"
                />
              </div>{" "}
            </div>
            <div className="submit-section">
              <button className="btn btn-primary submit-btn">Submit</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default Modalbox;
