/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { TimePicker } from "antd";

dayjs.extend(customParseFormat);
const onChange = (time, timeString) => {
  console.log(time, timeString);
};

const Addschedule = () => {
  const [value, onChange] = useState("10:00");
  const [selectedDate1, setSelectedDate1] = useState(null);
  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  return (
    <>
      <div id="add_schedule" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Schedule</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label className="col-form-label">
                        Department <span className="text-danger">*</span>
                      </label>
                      <select className="select form-control">
                        <option value="">Select</option>
                        <option value="">Development</option>
                        <option value={1}>Finance</option>
                        <option value={2}>Finance and Management</option>
                        <option value={3}>Hr &amp; Finance</option>
                        <option value={4}>ITech</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label className="col-form-label">
                        Employee Name <span className="text-danger">*</span>
                      </label>
                      <select className="select form-control">
                        <option value="">Select </option>
                        <option value={1}>Richard Miles </option>
                        <option value={2}>John Smith</option>
                        <option value={3}>Mike Litorus </option>
                        <option value={4}>Wilmer Deluna</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label className="col-form-label">Date</label>
                      <div className="cal-icon">
                        <DatePicker
                          selected={selectedDate1}
                          onChange={handleDateChange1}
                          className="form-control floating datetimepicker"
                          type="date"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block">
                      <label className="col-form-label">
                        Shifts <span className="text-danger">*</span>
                      </label>
                      <select className="select form-control">
                        <option value="">Select </option>
                        <option value={1}>10'o clock Shift</option>
                        <option value={2}>10:30 shift</option>
                        <option value={3}>Daily Shift </option>
                        <option value={4}>New Shift</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">
                        Min Start Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time">
                        <div className="form-control timepicker">
                          <TimePicker
                            className="input-group-text"
                            onChange={onChange}
                            bordered={false}
                            defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">
                        Start Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time">
                        <div className="form-control timepicker">
                          <TimePicker
                            className="input-group-text"
                            onChange={onChange}
                            bordered={false}
                            defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">
                        Max Start Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time">
                      <div className="form-control timepicker">
                        <TimePicker
                          className="input-group-text"
                          onChange={onChange}
                          bordered={false}
                          defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                        />
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">
                        Min End Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time">
                      <div className="form-control timepicker">
                        <TimePicker
                          className="input-group-text"
                          onChange={onChange}
                          bordered={false}
                          defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                        />
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">
                        End Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time">
                      <div className="form-control timepicker">
                        <TimePicker
                          className="input-group-text"
                          onChange={onChange}
                          bordered={false}
                          defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                        />
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">
                        Max End Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time">
                        <div className="form-control timepicker">
                          <TimePicker
                            className="input-group-text"
                            onChange={onChange}
                            bordered={false}
                            defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-block">
                      <label className="col-form-label">
                        Break Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time">
                        <div className="form-control timepicker">
                          <TimePicker
                            className="input-group-text"
                            onChange={onChange}
                            bordered={false}
                            defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-block">
                      <label className="col-form-label">
                        Accept Extra Hours{" "}
                      </label>
                      <div className="custom-control form-switch">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customSwitch1"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customSwitch1"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-block">
                      <label className="col-form-label">Publish </label>
                      <div className="custom-control form-switch">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customSwitch2"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customSwitch2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Addschedule;
