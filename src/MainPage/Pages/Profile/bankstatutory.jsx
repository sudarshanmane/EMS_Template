import React from "react";

export default function BankStatutory() {
  return (
    <>
      {" "}
      <div className="card">
        <div className="card-body">
          <h3 className="card-title"> Basic Salary Information</h3>
          <form>
            <div className="row">
              <div className="col-sm-4">
                <div className="input-block">
                  <label className="col-form-label">
                    Salary basis <span className="text-danger">*</span>
                  </label>
                  <select className="select">
                    <option>Select salary basis type</option>
                    <option>Hourly</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="input-block">
                  <label className="col-form-label">
                    Salary amount{" "}
                    <small className="text-muted">per month</small>
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">$</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type your salary amount"
                      defaultValue={0.0}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="input-block">
                  <label className="col-form-label">Payment type</label>
                  <select className="select">
                    <option>Select payment type</option>
                    <option>Bank transfer</option>
                    <option>Check</option>
                    <option>Cash</option>
                  </select>
                </div>
              </div>
            </div>
            <hr />
            <h3 className="card-title"> PF Information</h3>
            <div className="row">
              <div className="col-sm-4">
                <div className="input-block">
                  <label className="col-form-label">PF contribution</label>
                  <select className="select">
                    <option>Select PF contribution</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="input-block">
                  <label className="col-form-label">
                    PF No. <span className="text-danger">*</span>
                  </label>
                  <select className="select">
                    <option>Select PF contribution</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="input-block">
                  <label className="col-form-label">Employee PF rate</label>
                  <select className="select">
                    <option>Select PF contribution</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="input-block">
                  <label className="col-form-label">
                    Additional rate <span className="text-danger">*</span>
                  </label>
                  <select className="select">
                    <option>Select additional rate</option>
                    <option>0%</option>
                    <option>1%</option>
                    <option>2%</option>
                    <option>3%</option>
                    <option>4%</option>
                    <option>5%</option>
                    <option>6%</option>
                    <option>7%</option>
                    <option>8%</option>
                    <option>9%</option>
                    <option>10%</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="input-block">
                  <label className="col-form-label">Total rate</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="N/A"
                    defaultValue="11%"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="input-block">
                  <label className="col-form-label">Employee PF rate</label>
                  <select className="select">
                    <option>Select PF contribution</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="input-block">
                  <label className="col-form-label">
                    Additional rate <span className="text-danger">*</span>
                  </label>
                  <select className="select">
                    <option>Select additional rate</option>
                    <option>0%</option>
                    <option>1%</option>
                    <option>2%</option>
                    <option>3%</option>
                    <option>4%</option>
                    <option>5%</option>
                    <option>6%</option>
                    <option>7%</option>
                    <option>8%</option>
                    <option>9%</option>
                    <option>10%</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="input-block">
                  <label className="col-form-label">Total rate</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="N/A"
                    defaultValue="11%"
                  />
                </div>
              </div>
            </div>
            <hr />
            <h3 className="card-title"> ESI Information</h3>
            <div className="row">
              <div className="col-sm-4">
                <div className="input-block">
                  <label className="col-form-label">ESI contribution</label>
                  <select className="select">
                    <option>Select ESI contribution</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="input-block">
                  <label className="col-form-label">
                    ESI No. <span className="text-danger">*</span>
                  </label>
                  <select className="select">
                    <option>Select ESI contribution</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="input-block">
                  <label className="col-form-label">Employee ESI rate</label>
                  <select className="select">
                    <option>Select ESI contribution</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="input-block">
                  <label className="col-form-label">
                    Additional rate <span className="text-danger">*</span>
                  </label>
                  <select className="select">
                    <option>Select additional rate</option>
                    <option>0%</option>
                    <option>1%</option>
                    <option>2%</option>
                    <option>3%</option>
                    <option>4%</option>
                    <option>5%</option>
                    <option>6%</option>
                    <option>7%</option>
                    <option>8%</option>
                    <option>9%</option>
                    <option>10%</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="input-block">
                  <label className="col-form-label">Total rate</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="N/A"
                    defaultValue="11%"
                  />
                </div>
              </div>
            </div>
            <div className="submit-section">
              <button className="btn btn-primary submit-btn" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
