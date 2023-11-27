/* eslint-disable no-undef */
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Deletejob from "../../../_components/modelbox/Deletejob";
import { Table } from "antd";
import "antd/dist/antd.min.css";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import Offcanvas from "../../../Entryfile/offcanvance";

const Interviewquestion = () => {
  const data = [
    {
      id: 1,
      questions:
        "IS management has decided to rewrite a legacy languages (4GLs)?",
      optiona: "design facilities",
      optionb: "language subsets",
      optionc: "Lack of portability",
      optiond: "Inability to perform data",
      correctanswer: "A",
    },
    {
      id: 2,
      questions:
        "Which of the following the BEST method for ensuring that critical?",
      optiona: "design facilities",
      optionb: "language subsets",
      optionc: "Lack of portability",
      optiond: "Inability to perform data",
      correctanswer: "A",
    },
  ];

  useEffect(() => {
    if ($(".select").length > 0) {
      $(".select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
      });
    }
  });
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Questions",
      dataIndex: "questions",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Option A",
      dataIndex: "optiona",
      sorter: (a, b) => a.optiona.length - b.optiona.length,
    },
    {
      title: "Option B",
      dataIndex: "optionb",
      sorter: (a, b) => a.optionb.length - b.optionb.length,
    },
    {
      title: "Option C",
      dataIndex: "optionc",
      sorter: (a, b) => a.optionc.length - b.optionc.length,
    },
    {
      title: "Option D",
      dataIndex: "optiond",
      sorter: (a, b) => a.optiond.length - b.optiond.length,
    },

    {
      title: "Correct Answer",
      dataIndex: "correctanswer",
      render: (text) => (
        <div className="text-center">
          <p>{text}</p>
        </div>
      ),
      sorter: (a, b) => a.correctanswer.length - b.correctanswer.length,
    },
    {
      title: "Actions",
      render: () => (
        <div className="dropdown dropdown-action text-center">
          <Link
            to="#"
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            <i className="material-icons">more_vert</i>
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#edit_question">
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_employee">
              <i className="fa fa-trash m-r-5" /> Delete
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <Helmet>
          <title>Interview Questions - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Interview Questions</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item">Jobs</li>
                  <li className="breadcrumb-item active">
                    Interview Questions
                  </li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <Link
                  to="#"
                  className="btn add-btn mb-1"
                  data-bs-toggle="modal"
                  data-bs-target="#add_question">
                  <i className="fa fa-plus" /> Add Question
                </Link>
                <Link
                  to="#"
                  className="btn add-btn me-1 mb-1"
                  data-bs-toggle="modal"
                  data-bs-target="#add_category">
                  <i className="fa fa-plus" /> Add Category
                </Link>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <Table
                  className="table-striped"
                  pagination={{
                    total: data.length,
                    showTotal: (total, range) =>
                      `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                    showSizeChanger: true,
                    onShowSizeChange: onShowSizeChange,
                    itemRender: itemRender,
                  }}
                  style={{ overflowX: "auto" }}
                  columns={columns}
                  dataSource={data}
                  rowKey={(record) => record.id}
                />
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
        {/* Add Questions Modal */}
        <div
          id="add_question"
          className="modal custom-modal fade"
          role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Questions</h5>
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
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Add Category</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Department</label>
                        <select className="select" defaultValue="Web">
                          <option>-</option>
                          <option value="Web">Web Development</option>
                          <option>Application Development</option>
                          <option>IT Management</option>
                          <option>Accounts Management</option>
                          <option>Support Management</option>
                          <option>Marketing</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Add Questions</label>
                        <textarea
                          className="form-control"
                          defaultValue={
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t"
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Option A</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Option B</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Option C</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Option D</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Correct Answer</label>
                        <select className="select">
                          <option>-</option>
                          <option>Option A</option>
                          <option>Option B</option>
                          <option>Option C</option>
                          <option>Option D</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Code Snippets</label>
                        <textarea
                          className="form-control"
                          defaultValue={
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t"
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Answer Explanation</label>
                        <textarea
                          className="form-control"
                          defaultValue={
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t"
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Add Video Link</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Add Image To Question</label>
                        <input className="form-control" type="file" />
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">
                      Cancel
                    </button>
                    &nbsp;
                    <button className="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Add Questions Modal */}
        {/* Add Category Modal */}
        <div
          id="add_category"
          className="modal custom-modal fade"
          role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Category</h5>
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
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Add Category</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">
                      Cancel
                    </button>
                    &nbsp;
                    <button className="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Add Questions Modal */}
        {/* Edit Job Modal */}
        <div
          id="edit_question"
          className="modal custom-modal fade"
          role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Questions</h5>
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
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Category</label>
                        <select className="select" defaultValue="html">
                          <option>-</option>
                          <option value="html">HTML</option>
                          <option>CSS</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Department</label>
                        <select className="select" defaultValue="Web">
                          <option>-</option>
                          <option value="Web">Web Development</option>
                          <option>Application Development</option>
                          <option>IT Management</option>
                          <option>Accounts Management</option>
                          <option>Support Management</option>
                          <option>Marketing</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Add Questions</label>
                        <textarea
                          className="form-control"
                          defaultValue={
                            "\t\t\t\t\t\t\t\t\t\t\t\t\tIS management has decided to rewrite a legacy customer relations system using fourth generation languages (4GLs). Which of the following risks is MOST often associated with system development using 4GLs?\n\t\t\t\t\t\t\t\t\t\t\t\t"
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Option A</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="Design facilities"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Option B</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="language subsets"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Option C</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="Lack of portability"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Option D</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="Inability to perform data"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label>Correct Answer</label>
                        <select className="select" defaultValue="a">
                          <option>-</option>
                          <option value="a">Option A</option>
                          <option>Option B</option>
                          <option>Option C</option>
                          <option>Option D</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Code Snippets</label>
                        <textarea
                          className="form-control"
                          defaultValue={
                            "\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t"
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Answer Explanation</label>
                        <textarea
                          className="form-control"
                          defaultValue={
                            "\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t"
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Add Video Link</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label>Add Image To Question</label>
                        <input className="form-control" type="file" />
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">
                      Cancel
                    </button>
                    &nbsp;
                    <button className="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Edit Job Modal */}
        {/* Delete Job Modal */}
        <Deletejob />
        {/* /Delete Job Modal */}
      </div>
      {/* /Page Wrapper */}
      <Offcanvas />
    </>
  );
};

export default Interviewquestion;
