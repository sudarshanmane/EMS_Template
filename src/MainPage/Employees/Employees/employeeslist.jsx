/* eslint-disable no-undef */

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Table } from "antd";
import "antd/dist/antd.min.css";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
// import { User } from "../../../Entryfile/imagepath";
import Editemployee from "../../../_components/modelbox/Editemployee";
// import Header from "../../../initialpage/Sidebar/header";
import Sidebar from "../../../initialpage/Sidebar/sidebar";
import Offcanvas from "../../../Entryfile/offcanvance";
import { useDispatch, useSelector } from "react-redux";
import { getAllStaff, getUserRole } from "../../../store/Action/Actions";
import { URLS } from "../../../Globals/URLS";
import DatePicker from "react-datepicker";

const Employeeslist = () => {
  const dispatch = useDispatch();
  const [selectedDate1, setSelectedDate1] = useState(new Date());
  const [selectedDate2, setSelectedDate2] = useState(new Date());
  const [menu, setMenu] = useState(false);
  const [allStaffList, setAllStaffList] = useState([]);
  const [focused, setFocused] = useState(false);
  const [tablePagination, setTablePagination] = useState({
    pageSize: 10, // Set your default page size
    current: 1,
  });
  const roleurl = URLS.GET_USER_ROLE_URL;
  const staffurl = URLS.GET_STAFF_LIST_URL;

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  function getPageDetails(url) {
    dispatch(getAllStaff({ payload: {}, URL: staffurl }));
  }

  useEffect(() => {
    getPageDetails(staffurl);
  }, []);

  function fetchStaffData(url) {
    dispatch(getAllStaff({ payload: {}, URL: staffurl }));
  }

  useEffect(() => {
    fetchStaffData(staffurl);
  }, []);

  const staffSelector = useSelector((state) => state.getstafflist);
  useEffect(() => {
    if (staffSelector) {
      const allStaffList = staffSelector?.data?.map((element) => ({
        id: element.id,
        image: element.image,
        name: element.name,
        role: element.role,
        employee_id: element.employee_id,
        email: element.email,
        mobile: element.mobile,
        branch: element.branch,
        designation: element.designation,
      }));
      setAllStaffList(allStaffList);
    }
  }, [staffSelector]);

  const columns = [
    {
      title: "Sr No",
      dataIndex: "id",
      render: (text, record, index) => {
        const { pageSize, current } = tablePagination;
        return index + 1 + pageSize * (current - 1);
      },
      sorter: (a, b) => a.id.length - b.id.length,
      width: "10%",
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Employee ID",
      dataIndex: "employee_id",
      sorter: (a, b) => a.employee_id.length - b.employee_id.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      sorter: (a, b) => a.mobile.length - b.mobile.length,
    },
    {
      title: "Branch Name",
      dataIndex: "branch",
      sorter: (a, b) => a.branch.length - b.branch.length,
    },
    {
      title: "Designation",
      dataIndex: "designation",
      sorter: (a, b) => a.designation.length - b.designation.length,
    },
  ];
  return (
    <>
      <div className="">
        <Sidebar />
        <div className="page-wrapper">
          <Helmet>
            <title>Employeeslist - HRMS Admin Template </title>
            <meta name="description" content="Login page" />
          </Helmet>
          {/* Page Content */}
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/app/main/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">User</li>
                  </ul>
                </div>
                <div className="col-auto float-end ms-auto">
                <Link
                      to="/home/addemployee"
                      className="btn add-btn"
            
                    >
                      <i className="fa fa-plus" /> Add user
                    </Link>
                 
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Search Filter */}
            <div className="row filter-row">
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                <div
                  className={
                    focused
                      ? "input-block form-focus focused"
                      : "input-block form-focus"
                  }
                >
                  <input
                    type="text"
                    className="form-control floating"
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                  />
                  <label className="focus-label">Search</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                <div className="input-block form-focus select-focus">
                  <div className="cal-icon">
                    <DatePicker
                      selected={selectedDate1}
                      onChange={handleDateChange1}
                      className="form-control floating datetimepicker"
                      type="date"
                    />
                  </div>
                  <label className="focus-label">Date</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                <div className="input-block form-focus select-focus">
                  <div className="cal-icon">
                    <DatePicker
                      selected={selectedDate2}
                      onChange={handleDateChange2}
                      className="form-control floating datetimepicker"
                      type="date"
                    />
                  </div>
                  <label className="focus-label">Date</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                <Link to="#" className="btn btn-success btn-block w-100">
                  {" "}
                  Search{" "}
                </Link>
              </div>
            </div>
            {/* /Search Filter */}
            <div className="row">
              <div className="col-md-12">
                <div className="card mb-0">
                  <div className="card-header">
                    <h4 className="card-title mb-0">All Users</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <Table
                        className="table-striped"
                        pagination={{
                          
                          total: allStaffList ? allStaffList.length : 0,
                          showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          showSizeChanger: true,
                          onShowSizeChange: (current, pageSize) => {
                            setTablePagination({
                              ...tablePagination,
                              pageSize,
                              current,
                            });
                          },
                          onChange: (current) => {
                            setTablePagination({ ...tablePagination, current });
                          },
                          itemRender: itemRender,
                        }}
                        style={{ overflowX: "auto" }}
                        columns={columns}
                        dataSource={allStaffList}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Editemployee />

        <div
          className="modal custom-modal fade"
          id="delete_employee"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Employee</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div className="modal-btn delete-action">
                  <div className="row">
                    <div className="col-6">
                      <Link to="" className="btn btn-primary continue-btn">
                        Delete
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link
                        to=""
                        data-bs-dismiss="modal"
                        className="btn btn-primary cancel-btn"
                      >
                        Cancel
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Delete Employee Modal */}
      </div>
      <Offcanvas />
    </>
  );
};

export default Employeeslist;
