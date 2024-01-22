/* eslint-disable no-undef */

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { Table } from "antd";
import "antd/dist/antd.min.css";
import { itemRender } from "../../paginationfunction";
import Sidebar from "../../../initialpage/Sidebar/sidebar";
import Offcanvas from "../../../Entryfile/offcanvance";
import { useDispatch, useSelector } from "react-redux";
import { getAllStaff } from "../../../store/Action/Actions";
import { URLS } from "../../../Globals/URLS";
import DatePicker from "react-datepicker";
import { User } from "../../../Entryfile/imagepath";

const Employeeslist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedDate1, setSelectedDate1] = useState(new Date());
  const [selectedDate2, setSelectedDate2] = useState(new Date());
  const [allStaffList, setAllStaffList] = useState([]);
  const [focused, setFocused] = useState(false);
  const [tablePagination, setTablePagination] = useState({
    pageSize: 10, // Set your default page size
    current: 1,
  });
  const staffurl = URLS.GET_STAFF_LIST_URL;
  const baseurl = URLS.BASE_URL_EXPORT;

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  function getPageDetails() {
    dispatch(getAllStaff({ payload: {}, URL: staffurl }));
  }

  useEffect(() => {
    getPageDetails(staffurl);
  }, []);

  const userRoles = useSelector((state) => state.getcurrentrole);

  useEffect(() => {
    if (userRoles) {
      dispatch(getAllStaff({ payload: {}, URL: staffurl }));
    }
  }, [userRoles]);

  const staffSelector = useSelector((state) => state.getstafflist);
  useEffect(() => {
    if (staffSelector) {
      const allStaffList = staffSelector?.data?.map((p) => ({
        id: p?.id,
        image: p?.profile_image,
        name: p?.full_name,
        role: p?.user_role?.user_role,
        employee_id: p?.emp_id,
        email: p?.email,
        mobile: p?.mobile_no,
        branch: p?.branch?.branch_name,
        designation: p?.designation?.designation,
      }));
      setAllStaffList(allStaffList);
    }
  }, [staffSelector]);

  const viewReport = (record) => {
    navigate(`/home/viewEmployee/${record.id}`, {
      state: {
        id: record.id,
      },
    });
  };

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
      render: (text, record) => {
        return (
          <>
            <h4 className="table-avatar fw-4 fs-16">
              <Link
                to={`/app/profile/employee-profile${record.id}`}
                className="avatar"
              >
                {record?.image != null ? (
                  <img alt="" src={`${baseurl}${record?.image}`} />
                ) : (
                  <img alt="" src={User} />
                )}
              </Link>
              <Link to={`/app/profile/employee-profile${record.id}`}>
                {text} <span>{record.role}</span>
              </Link>
            </h4>
          </>
        );
      },
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
    {
      title: "Action",
      render: (record) => (
        <div className="dropdown dropdown-action text-end">
          <Link
            to={{
              pathname: `/home/viewEmployee/${record.id}`,
              state: { userSelector: record },
            }}
            className="btn btn-primary btn-sm m-r-5"
            onClick={() => viewReport(record)}
          >
            <i className="fa fa-eye" />
          </Link>
        </div>
      ),
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
                  <Link to="/home/addemployee" className="btn add-btn">
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

        {/* <Editemployee /> */}
      </div>
      <Offcanvas />
    </>
  );
};

export default Employeeslist;
