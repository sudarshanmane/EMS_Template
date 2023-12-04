import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DownloadOutlined,
  PauseCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Modal, Pagination, Space, Table } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  exportFinanceMangerListAction,
  financeManagerApproveAction,
  financeManagerHoldAction,
  financeManagerRejectAction,
  getFinanceManagerExpenseListAction,
  getManagerListAction,
} from "../../store/Action/Actions";
import { URLS } from "../../Globals/URLS";
import "./ExpenseApprovalManager.scss";

function ExpenseApprovalManager() {
  const [allExpense, setAllExpense] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [paginationCount, setPaginationCount] = useState({
    count: 0,
    page_size: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");

  const [rejectModalVisible, setRejectModalVisible] = useState(false);
  const [holdModalVisible, setHoldModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(false);

  const [rejectRemark, setRejectRemark] = useState("");
  const [holdRemark, setHoldRemark] = useState("");

  const [managerList, setManagerList] = useState([]);
  const [invoiceModalVisible, setInvoiceModalVisible] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const showRejectModal = (record) => {
    setSelectedRecord(record);
    setRejectModalVisible(true);
  };

  const showHoldModal = (record) => {
    setSelectedRecord(record);
    setHoldModalVisible(true);
  };

  const handleApproveClick = () => {
    if (selectedRecord && selectedRecord.id) {
      dispatch(
        financeManagerApproveAction({ payload: {}, id: selectedRecord.id })
      );
    } else {
      console.error("Selected record or record ID is undefined.");
    }
  };

  const handleRejectClick = () => {
    setRejectModalVisible(false);

    if (selectedRecord && selectedRecord.id) {
      dispatch(
        financeManagerRejectAction({ payload: {}, id: selectedRecord.id })
      );
    } else {
      console.error("Selected record or record ID is undefined.");
    }
  };

  const handleHoldClick = () => {
    dispatch(
      financeManagerHoldAction({
        payload: { remark: holdRemark },
        id: selectedRecord.id,
      })
    );
    setHoldModalVisible(false);
  };

  const dispatch = useDispatch();

  const [url, setUrl] = useState(URLS.GET_EXPENSE_LIST_FINANCE_MANAGER_URL);

  const expenseselector = useSelector(
    (state) => state.financemanagerexpenselistResult
  );

  function getPageDetails(url) {
    dispatch(getFinanceManagerExpenseListAction({ payload: {}, URL: url }));
  }

  function changePage(page, pageSize) {
    let urlNew = URLS.GET_EXPENSE_LIST_FINANCE_MANAGER_URL + "?page=" + page;
    setUrl(urlNew);
    getPageDetails(urlNew);
  }

  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchexpensepanel(url) {
    dispatch(getFinanceManagerExpenseListAction({ payload: {}, URL: url }));
  }
  const inputSearchRef = useRef();

  function handleSearch() {
    let searchTerm = inputSearchRef.current.input.value;
    setSearchTerm(searchTerm);
    let urlForSearch = URLS.GET_EXPENSE_LIST_FINANCE_MANAGER_URL;
    const updatedUrl = searchTerm
      ? `${urlForSearch}?search=${searchTerm}`
      : url;
    getPageDetails(updatedUrl);
  }
  useEffect(() => {
    fetchexpensepanel(url);
  }, []);

  useEffect(() => {
    if (expenseselector) {
      const allExpense = expenseselector.results.map((element, index) => {
        return {
          srno: index + 1,
          employee: element.employee.username,
          expense_name: element.expense_name.item_name,
          description: element.description,
          paid_by: element.paid_by,
          expense_date: element.expense_date,
          attachment: element.attachment,
          approved_amt: element.approved_amt,
          status: element.status,
          submit: element.submit,
          approved_by: element.approved_by,
        };
      });
      setAllExpense(allExpense);
      let pageObj = { ...paginationCount };
      pageObj.count = expenseselector.count;
      pageObj.page_size = expenseselector.page_size;
      setPaginationCount(pageObj);
    }
  }, [expenseselector]);

  const managerListSelector = useSelector(
    (state) => state.getManagerListResult
  );

  useEffect(() => {
    dispatch(getManagerListAction({}));
  }, []);

  useEffect(() => {
    if (managerListSelector && managerListSelector.results) {
      const managerResult = managerListSelector.results.map((element) => {
        console.log("id Is ", element.id);
        return { value: element.id, label: element.username };
      });
      setManagerList(managerResult);
    }
  }, [managerListSelector]);

  const handleViewInvoice = (attachment) => {
    setSelectedInvoice(attachment);
    setInvoiceModalVisible(true);
  };
  const closeInvoiceModal = () => {
    setInvoiceModalVisible(false);
    setSelectedInvoice(null);
  };

  function downloadExlsFiles() {
    let exportUrl = URLS.GET_EXPENSE_LIST_FINANCE_MANAGER_URL + "?export=csv";

    if (searchTerm) {
      exportUrl += `&search=${searchTerm}`;
    }

    dispatch(exportFinanceMangerListAction({ URL: exportUrl }));
  }

  const csvUrlSelector = useSelector(
    (state) => state.exportFinanceManagerResult
  );

  useEffect(() => {
    if (csvUrlSelector) {
      let csvURL = URLS.BASE_URL_EXPORT + csvUrlSelector.csv_file_name;
      console.log("csvURLcsvURL", csvURL);

      let a = document.createElement("a");
      a.setAttribute("href", csvURL);
      a.setAttribute("download", "");
      a.textContent = "Download CSV File";

      document.body.appendChild(a);
      a.click();
    }
  }, [csvUrlSelector]);

  return (
    <div>
      <Space>
        <Input
          placeholder="Search..."
          style={{ width: "100%" }}
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          ref={inputSearchRef}
        />

        <Button type="primary" icon={<SearchOutlined />} onClick={handleSearch}>
          Search
        </Button>

        <Button
          type="primary"
          icon={<DownloadOutlined />}
          onClick={() => downloadExlsFiles()}
        >
          Export
        </Button>
      </Space>
      <br />
      <br />

      <Table
        dataSource={allExpense}
        columns={[
          {
            title: "Sr No",
            dataIndex: "srno",
            key: "srno",
          },
          {
            title: "Employee",
            dataIndex: "employee",
            key: "username",
          },
          {
            title: "Expense Category",
            dataIndex: "expense_name",
            key: "item_name",
          },
          {
            title: "Description",
            dataIndex: "description",
            key: "description",
          },

          {
            title: "Paid By",
            dataIndex: "paid_by",
            key: "paid_by",
          },
          {
            title: "Expense Date",
            dataIndex: "expense_date",
            key: "expense_date",
          },
          {
            title: "Expense Bill",
            dataIndex: "attachment",
            key: "attachment",
            render: (attachment) => (
              <div>
                {/* <span>{attachment}</span> */}
                <br></br>
                <Button
                  type="primary"
                  onClick={() => handleViewInvoice(attachment)}
                >
                  view invoice
                </Button>
              </div>
            ),
          },
          {
            title: "Approved Amount",
            dataIndex: "approved_amt",
            key: "approved_amt",
          },
          {
            title: "Approved By",
            dataIndex: "approved_by",
            key: "approved_by",
          },

          {
            title: "Actions",
            key: "actions",
            render: (text, record) => (
              <Space size="small">
                <Button
                  type="primary"
                  icon={<CheckCircleOutlined />}
                  // onClick={() => showApproveModal(record)}
                  onClick={() => handleApproveClick(record)}
                >
                  Approve
                </Button>
                <Button
                  type="default"
                  icon={<CloseCircleOutlined />}
                  onClick={() => showRejectModal(record)}
                >
                  Reject
                </Button>
                <Button
                  type="primary"
                  icon={<PauseCircleOutlined />}
                  onClick={() => showHoldModal(record.id)}
                >
                  Hold
                </Button>
              </Space>
            ),
          },
        ]}
        pagination={false} // Apply pagination configuration
      />
      <Pagination
        total={paginationCount.count}
        showTotal={(total) => `Total ${allExpense.length} items`}
        pageSize={paginationCount.page_size}
        onChange={changePage}
      />

      <Modal
        title="Reject Item"
        visible={rejectModalVisible}
        onOk={handleRejectClick}
        onCancel={() => setRejectModalVisible(false)}
      >
        <label>Remark:</label>
        <TextArea
          value={rejectRemark}
          onChange={(e) => setRejectRemark(e.target.value)}
        />
      </Modal>

      <Modal
        title="Hold Item"
        open={holdModalVisible}
        onOk={handleHoldClick}
        onCancel={() => setHoldModalVisible(false)}
      >
        <label>Remark:</label>
        <TextArea
          value={holdRemark}
          onChange={(e) => setHoldRemark(e.target.value)}
        />
      </Modal>

      <Modal
        title="View Invoice"
        visible={invoiceModalVisible}
        onCancel={closeInvoiceModal}
        footer={null}
      >
        {selectedInvoice && (
          <img
            src={selectedInvoice}
            alt="Invoice"
            style={{ maxWidth: "100%" }}
          />
        )}
      </Modal>
    </div>
  );
}

export default ExpenseApprovalManager;
