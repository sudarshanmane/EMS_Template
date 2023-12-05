import React, { useState } from "react";
import { Table, Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

// import "./users.scss";

const AccountingCodeGroupPanel = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [allAccountingGroupCode, setAllAccountingGroupCode] = useState([]);
  const [nameFilter, setNameFilter] = useState("");

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
          <Button
            type="primary"
            onClick={() => {
              confirm();
              setNameFilter(selectedKeys[0]);
            }}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Search
          </Button>
          <Button
            onClick={() => {
              clearFilters();
              setNameFilter("");
            }}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
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
      // ... (your filters and onFilter code)
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

  const paginationConfig = {
    pageSize: 5, // Display 5 rows per page
  };

  return (
    <div>
      <Link to="/home/codegroup">
        <Button type="primary">Add</Button>
      </Link>
      <Table
        dataSource={allAccountingGroupCode}
        columns={columns}
        rowSelection={rowSelection}
        pagination={paginationConfig} // Apply pagination configuration
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
  );
};

export default AccountingCodeGroupPanel;
