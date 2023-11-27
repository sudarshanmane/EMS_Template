import React, { useEffect, useRef, useState } from "react";
import { Table, Input, Button, Space, Modal, Pagination, Select, Form, Row, Col } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DownloadOutlined,
  PauseCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";


import {
  expenseApprovedmanager,
  getapprovedExpensepanelAction,
  expenseRejectmanager,
  expenseHoldmanager,
  getDropdownFinanceManager,
  exportExpenseApprovedAction,
} from "../../store/Actions/Actions";
import { useDispatch, useSelector } from "react-redux";

import { URLS } from "../../Globals/URLS";
import TextArea from "rc-textarea";

const Expenseapprovedpanel = () => {
  const [allExpense, setAllExpense] = useState([]);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [paginationCount, setPaginationCount] = useState({
    count: 0,
    page_size: 0,
  });
 
  const [approveModalVisible, setApproveModalVisible] = useState(false);
  const [rejectModalVisible, setRejectModalVisible] = useState(false);
  const [holdModalVisible, setHoldModalVisible] = useState(false);

  // State for form inputs
  const [approvedAmt, setApprovedAmt] = useState("");
  const [rejectRemark, setRejectRemark] = useState("");
  const [holdRemark, setHoldRemark] = useState("");
  const [selectedRecord, setSelectedRecord] = useState(null);
  // const [expensePanelUrl, setExpensePanelUrl] = useState(
  //   URLS.GET_MANEGERAPPROVED_LIST_URL
  // );
  const [url, setUrl] = useState(URLS.GET_MANEGERAPPROVED_LIST_URL);
  const [searchTerm, setSearchTerm] = useState("");
  const [invoiceModalVisible, setInvoiceModalVisible] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [selectFmanager, setSelectFmanager] = useState([]);
  const [selectedFinanceManagerid, setSelectedFinanceManagerid] = useState(null);
 // Ensure this state variable is correctly defined and used in your input field


  const handleViewInvoice = (attachment) => {
    setSelectedInvoice(attachment);
    setInvoiceModalVisible(true);
  };

  const closeInvoiceModal = () => {
    setInvoiceModalVisible(false);
    setSelectedInvoice(null);
  };
  //expense approved fetching
  const expenseApprovedselector = useSelector(
    (state) => state.approvedexpensemanagerResult
  );


  const handleapprovedSubmitClick = (record, selectedFinanceManagerid) => {
    if (record && selectedFinanceManagerid) {
      const payload = {
        approved_amt: approvedAmt,
        route_to_fm: selectedFinanceManagerid,
      }; 
  
      dispatch(
        expenseApprovedmanager({
          payload,
          id: record,
          approved_amt:approvedAmt,
           route_to_fm: selectedFinanceManagerid,
        })
      );
      
      console.log("Data saved to the database.");
      setApprovedAmt(""); // Clear the input field
      setApproveModalVisible(false); // Update the local state if necessary
  
      const updatedAllExpense = allExpense.map((item) =>
        item.id === selectedRecord.id
          ? {
              ...item,
              approved_amt: approvedAmt,
              route_to_fm: selectedFinanceManagerid,
            }
          : item
      );
  
      setAllExpense(updatedAllExpense);
    } else {
      console.error("Invalid record.id or selectedFinanceManagerid");
    }
  };
  
  const expenseRjecetedselector = useSelector(
    (state) => state.rejectexpensemanagerResult
  );

  const handleRejectClick = () => {
    setRejectModalVisible(false);

    dispatch(expenseRejectmanager({ payload: {}, id: selectedRecord }));
  };

  const expenseholdselector = useSelector(
    (state) => state.holdexpensemanagerResult
  );

  const handleHoldClick = () => {
    dispatch(
      expenseHoldmanager({
        payload: { remark: holdRemark },
        id: selectedRecord,
      })
    );
    setHoldModalVisible(false);
  };
  const showApproveModal = (record) => {
  
    setSelectedRecord(record);

    setApproveModalVisible(true);
  };

  const showRejectModal = (record) => {
    setSelectedRecord(record);
    setRejectModalVisible(true);
  };

  const showHoldModal = (record) => {
    setSelectedRecord(record);
    setHoldModalVisible(true);
  };

  const dispatch = useDispatch();
//get finance manager list code start herer

const financemanagerselector = useSelector(
  (state) => state.financemdropdownResult
);

useEffect(() => {
  dispatch(getDropdownFinanceManager({}));
}, []);

useEffect(() => {
  if (financemanagerselector) {
   
    const ManagerResult = financemanagerselector.map((element) => {
      return { label: element.username, value: element.id };
    });
    setSelectFmanager(ManagerResult);
  }
}, [financemanagerselector]);


//get approved list data  expense code start here 
  const expenseseapprovedselector = useSelector(
    (state) => state.expenseapprovedpanelResult
  );

  function getPageDetails(url) {
    dispatch(getapprovedExpensepanelAction({ payload: {}, URL: url }));
  }

  function changePage(page, pageSize) {
    let urlNew = URLS.GET_MANEGERAPPROVED_LIST_URL + "?page=" + page;
    setUrl(urlNew);
    getPageDetails(urlNew);
  }
  // useEffect(() => {
  //   getPageDetails(url);
  // }, []);

  function fetchexpensepanel(url) {
    dispatch(getapprovedExpensepanelAction({ payload: {}, URL: url }));
  }
  // Set the initial URL
 
  const inputSearchRef = useRef();

  function handleSearch(searchTerm) {
    setSearchTerm(searchTerm);
    const updatedUrl = searchTerm ? `${url}?search=${searchTerm}` : url;
    getPageDetails(updatedUrl);
  }
  useEffect(() => {
    fetchexpensepanel(url);
  }, []);

  
//thise use efffect is for fecthing data from list foreng keyes inclueded and pagination
  useEffect(() => {
    if (expenseseapprovedselector) {
      const allExpense = expenseseapprovedselector.results.map((element) => ({
        id: element.id,
        employee: element.employee.username,
        expense_name: element.expense_name.item_name,
        description: element.description,
        total_amt: element.total_amt,
        paid_by: element.paid_by,
        expense_date: element.expense_date,
        attachment: element.attachment,
        approved_amt: element.approved_amt,
        status: element.status,
        submit: element.submit,
        approved_by: element.approved_by,
      }));

      setAllExpense(allExpense);
      let pageObj = { ...paginationCount };
      pageObj.count = expenseseapprovedselector.count;
      pageObj.page_size = expenseseapprovedselector.page_size;
      setPaginationCount(pageObj);
    }
  }, [expenseseapprovedselector]);

 

   //export button functionality
   function downloadExlsFiles() {
    dispatch(
      exportExpenseApprovedAction({
        URL: URLS.GET_MANEGERAPPROVED_LIST_URL + "?export=csv",
      })
    );
  }
  
  const csvUrlSelector = useSelector(
    (state) => state.exportexpenseapprovedlistResult
  );
  
  useEffect(() => {
    if (csvUrlSelector) {
      let csvURL = URLS.BASE_URL_EXPORT + csvUrlSelector.csv_file_name;
  
      // Create an invisible anchor element
      let a = document.createElement("a");
      a.style.display = "none";
      a.setAttribute("href", csvURL);
      a.setAttribute("download", "exported_data.csv");
      
      // Add the anchor to the document body and trigger the click
      document.body.appendChild(a);
      a.click();
      
      // Remove the anchor from the document
      document.body.removeChild(a);
    }
  }, [csvUrlSelector]);

  // const rowSelection = {
  //   selectedRowKeys,
  //   onChange: (selectedKeys) => {
  //     setSelectedRowKeys(selectedKeys);
  //   },
  //   checkStrictly: true,
  // };

  return (
    <div>
      
      <Input
          style={{ width: "30%" }}
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
        onClick={handleSearch} 
      >
        Search
      </Button>
      
      
      <Button
        type="primary"
        icon={<DownloadOutlined />}
        onClick={() => downloadExlsFiles()}
      >
        Export
      </Button><br /><br />
    
      <Table
        dataSource={allExpense}
        
        pagination={false} // Apply pagination configuration
        columns = {[
    {
      title: "Sr No",
      dataIndex: "id",
      key: "id",
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
      title: "Total Amount",
      dataIndex: "total_amt",
      key: "total_amt",
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
      title: "Attachment",
      dataIndex: "attachment",
      key: "attachment",
      render: (attachment) => (
        <div>
       
          <br></br>
          <Button type="primary" onClick={() => handleViewInvoice(attachment)}>
            view invoice
          </Button>
        </div>
      ),
    },

   
    {
      title: "Status ",
      dataIndex: "status",
      key: "status",
    },

    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="small">
          <Button
            type="primary"
            icon={<CheckCircleOutlined />}
           
            onClick={() => showApproveModal(record.id)}
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
      />
      <Pagination
        total={paginationCount.count}
        showTotal={(total) => `Total ${allExpense.length} items`}
        pageSize={paginationCount.page_size}
        onChange={changePage}
      />
      <Modal
        title="Approve Item"
        visible={approveModalVisible}
        footer={null}
        
        onCancel={() => setApproveModalVisible(false)}
      >
        <Form layout="vertical" >
            <Row gutter={20}>
              <Col span={12}>
              <Form.Item
              
        label="Approved Amount"
        name="approved_amt" // Correct the 'name' attribute
      >
        <Input
        type="number"
        size="large"
        value={approvedAmt} // Ensure you're binding the value to the state variable
        onChange={(e) => setApprovedAmt(e.target.value)}
/>
         </Form.Item>
              <Form.Item
        label="Select Finance Manager"
        name="is_account_manager" // Correct the 'name' attribute
      >
          <Select
          value={selectedFinanceManagerid}
        onChange={(value) => setSelectedFinanceManagerid(value)}
        style={{ width: "100%" }}
        options={selectFmanager}
      >
        
      </Select>
        </Form.Item>
        <Button
          type="primary"
          onClick={() => handleapprovedSubmitClick(selectedRecord, selectedFinanceManagerid)}
        >
          Submit
        </Button>

        </Col>
          </Row>
        </Form>
      </Modal>
      {/* Rejected Modal */}
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

      {/* Hold Modal */}
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
};

export default Expenseapprovedpanel;
