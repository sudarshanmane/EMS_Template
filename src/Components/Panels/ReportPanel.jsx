import React, { useEffect, useState } from "react";
import { Table, Input, Button, Pagination } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getReportList } from "../../store/Actions/Actions";
import { URLS } from "../../Globals/URLS";

const ReportPanel = () => {
  const dispatch = useDispatch();
  const [allReportList, setAllReportList] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [paginationCount, setPaginationCount] = useState({
    count: 0,
    page_size: 0,
  });
  const url = URLS.GET_REPORT_LIST_URL;

  const reportPanelSelector = useSelector((state) => state.getreportlist);

  function getPageDetails(url) {
    dispatch(getReportList({ payload: {}, URL: url }));
  }

  function changePage(page, pageSize) {
    getPageDetails(url + "?page=" + page);
  }
  
  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchReportData(url) {
    dispatch(getReportList({ payload: {}, URL: url }));
  }

  function handleSearch(searchTerm) {
    setSearchTerm(searchTerm);
    const updatedUrl = searchTerm ? `${url}?search=${searchTerm}` : url;
    getPageDetails(updatedUrl);
  }
  useEffect(() => {
    fetchReportData(url);
  }, []);

  useEffect(() => { 
    if (reportPanelSelector) {
      const reportList = reportPanelSelector.map((element) => {
        return {
          trans_id: element.trans_id,
          employee_id: element.employee_id,
          expense_name: element.expense_name,
          expense_amt: element.expense_amt,
          created_date: element.created_date,
          exp_date: element.exp_date,
          balance_com: element.balance_com,
        };
      });

      setAllReportList(reportList);
      let pageObj = { ...paginationCount };
      pageObj.count = reportPanelSelector.count;
      pageObj.page_size = reportPanelSelector.page_size;
      setPaginationCount(pageObj);
    }
  }, [reportPanelSelector]);

  const columns = [
    {
      title: "Transaction ID",
      dataIndex: "trans_id",
      key: "trans_id",
    },
    {
      title: "Employee",
      dataIndex: "employee_id",
      key: "employee_id",
    },
    {
      title: "Expense Category",
      dataIndex: "expense_name",
      key: "expense_name",
    },
    {
      title: "Amount",
      dataIndex: "expense_amt",
      key: "expense_amt",
    },
    {
      title: "Report Date",
      dataIndex: "created_date",
      key: "created_date",
    },
    {
      title: "Expense Date",
      dataIndex: "exp_date",
      key: "exp_date",
    },

    {
      title: "Balance",
      dataIndex: "balance_com",
      key: "balance_com",
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
    <div>
      <h1>Reports</h1>
      <form className="d-flex input-group w-auto">
        <Input
          type="text"
          className="form-control"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Button
          type="primary"
          icon={<SearchOutlined />}
          style={{
            textAlign: "end",
          }}
        >
          Search
        </Button>
      </form>

      <Table
        dataSource={allReportList}
        columns={columns}
        rowSelection={rowSelection}
        pagination={false}
      />
      <Pagination
        total={paginationCount.count}
        showTotal={(total) => `Total ${allReportList.length} items`}
        pageSize={paginationCount.page_size}
        onChange={changePage}
      />
    </div>
  );
};

export default ReportPanel;
