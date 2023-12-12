import React, { useState } from "react";
import { Table, Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  onShowSizeChange,
  itemRender,
} from "../../MainPage/paginationfunction";
import Offcanvas from "../../Entryfile/offcanvance";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AccountingCodeGroupPanel = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [allAccountingGroupCode, setAllAccountingGroupCode] = useState([]);
  const [nameFilter, setNameFilter] = useState("");

  const [focused, setFocused] = useState(false);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  const handleEdit = (record) => {
    console.log("Edit clicked for record:", record);
  };

  const handleDelete = (record) => {
    console.log("Delete clicked for record:", record);
  };
  const columns = [
    {
      title: "Sr No",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "",
      key: "",
      sorter: (a, b) => a.name.length - b.name.length,
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 15 }}>
          <Input
            size="large"
            placeholder="Search Name"
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => {
              confirm();
              setNameFilter(selectedKeys[0]);
            }}
            style={{ width: 188, marginBottom: 8, display: "block" }}
          />
          <button
            type="button"
            onClick={() => {
              confirm();
              setNameFilter(selectedKeys[0]);
            }}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Search
          </button>
          <button
            onClick={() => {
              clearFilters();
              setNameFilter("");
            }}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </button>
        </div>
      ),
      filterIcon: (filtered) => (
        <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
      ),
      onFilter: (value, record) =>
        record.name.toLowerCase().includes(value.toLowerCase()),
    },
    {
      title: "Accounting Code",
      dataIndex: "accounting_code",
      key: "accounting_code",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="small">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />
          <Button
            type="default"
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record)}
          />
        </Space>
      ),
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys) => {
      setSelectedRowKeys(selectedKeys);
    },
    checkStrictly: true,
  };

  return (
    <>
      <Offcanvas />
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">
                    Accounting Group Code
                  </li>
                </ul>
                <div className="col-auto float-end ms-auto">
                  <Link to="/home/codegroup">
                    <button type="button" className="btn add-btn">
                      <i className="fa fa-plus" />
                      Add Code Group
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card mb-0">
                <div className="card-header">
                  <h4 className="card-title mb-0">Accounting Group Code</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
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
                              className="form-control floating"
                              type="date"
                              placeholderText="2023-07-14"
                            />
                            <label className="focus-label">From</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <div className="input-block form-focus select-focus">
                          <div className="cal-icon">
                            <DatePicker
                              selected={selectedDate2}
                              onChange={handleDateChange2}
                              className="form-control floating"
                              type="date"
                              placeholderText="2023-07-14"
                            />
                            <label className="focus-label">To</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <Link
                          to="#"
                          className="btn btn-success btn-block w-100"
                          // value={searchTerm}
                          // onChange={(e) => handleSearch(e.target.value)}
                          // ref={inputSearchRef}
                        >
                          {" "}
                          Search{" "}
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <Link
                          to="#"
                          onClick={() => downloadExlsFiles()}
                          className="btn btn-warning btn-block w-100"
                        >
                          {" "}
                          Export{" "}
                        </Link>
                      </div>
                    </div>
                    {/* Search Filter */}
                    <Table
                      dataSource={allAccountingGroupCode}
                      columns={columns}
                      rowSelection={rowSelection}
                      pagination={{
                        // total: allExpense.length,
                        total: allAccountingGroupCode.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                      }}
                      style={{ overflowX: "auto" }}
                      bordered
                      rowKey={(record) => record.id}
                    />
                    {/* <Col lg={6} xs={24} className="action-col">
        <Select
          size="large"
          defaultValue="Actions"
          style={{ width: "100% " }}
          onChange={(value) => setAction(value)}
          options={AccountCodeOperations}
        />
      </Col> */}
                    {/* <Row>
        <Col lg={24} xs={24} style={{ display: "flex", justifyContent: "end" }}>
          <Button
            size="large"
            htmlType="submit"
            type="primary"
            style={{
              textAlign: "end",
              marginTop: "15px",
            }}
            onClick={selectedAction}
          >
            Submit
          </Button>
        </Col>
      </Row> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountingCodeGroupPanel;
