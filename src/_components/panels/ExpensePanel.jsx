import React, { useEffect, useRef, useState } from "react";
import {
  Table,
  Input,
  Button,
  Space,
  Modal,
  Pagination,
  Form,
  Row,
  Col,
  Select,
} from "antd";
import {
  DownloadOutlined,
  EyeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  deleteExpensepanelAction,
  expensetableTrueSubmit,
  exportExpenseListAction,
  getManagerListAction,
  getexpensePanelListAction,
} from "../../store/Action/Actions";
import { useDispatch, useSelector } from "react-redux";
import { SendOutlined } from "@ant-design/icons";
import { URLS } from "../../Globals/URLS";
import { Option } from "antd/es/mentions";
import Addexpense from "../../_components/screens/Addexpense";

const ExpensePanel = () => {
  const [allExpense, setAllExpense] = useState([]);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [editItemData, setEditItemData] = useState(null);
  const [deleteItemData, setDeleteItemData] = useState(null);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [paginationCount, setPaginationCount] = useState({
    count: 0,
    page_size: 0,
  });
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [approveModalVisible, setApproveModalVisible] = useState(false);
  const [selectedManagerId, setSelectedManagerId] = useState(null);
  const [managerList, setManagerList] = useState([]);
  //  const [expensePanelUrl,setExpensePanelUrl  ] = useState(URLS.GET_EXPENSE_PANEL_URL)
  const [searchTerm, setSearchTerm] = useState("");
  const [url, setUrl] = useState(URLS.GET_EXPENSE_PANEL_URL);
  const dispatch = useDispatch();
  const [invoiceModalVisible, setInvoiceModalVisible] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [viewCompanyData, setViewCompanyData] = useState(null);

  const handleViewInvoice = (attachment) => {
    setSelectedInvoice(attachment);
    setInvoiceModalVisible(true);
  };

  const closeInvoiceModal = () => {
    setInvoiceModalVisible(false);
    setSelectedInvoice(null);
  };
  const expenseselector = useSelector((state) => state.panelExpenseResult);

  function getPageDetails(url) {
    dispatch(getexpensePanelListAction({ payload: {}, URL: url }));
  }

  function changePage(page, pageSize) {
    let urlNew = URLS.GET_EXPENSE_PANEL_URL + "?page=" + page;
    setUrl(urlNew);
    getPageDetails(urlNew);
  }
  useEffect(() => {
    getPageDetails(url);
  }, []);

  const handleView = (record) => {
    setViewCompanyData(record);
    setIsAddFormVisible(false);
  };
  function fetchexpensepanel(url) {
    dispatch(getexpensePanelListAction({ payload: {}, URL: url }));
  }

  const inputSearchRef = useRef();
  function handleSearch() {
    let searchTerm = inputSearchRef.current.input.value;
    setSearchTerm(searchTerm);
    let urlForSearch = URLS.GET_EXPENSE_PANEL_URL;
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
      const allExpense = expenseselector.results.map((element, index) => ({
        srno: index + 1,
        id: element.id,
        employee: element.employee?.username,
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
      pageObj.count = expenseselector.count;
      pageObj.page_size = expenseselector.page_size;
      setPaginationCount(pageObj);
    }
  }, [expenseselector]);

  const expensesubmittruebuttonselector = useSelector(
    (state) => state.submittrueexpenseResult
  );

  //hendling submitbutton in expense column functionality
  const handelsubmittrue = (record, selectedManagerId) => {
    const payload = {
      submit: "True",
      route_to: selectedManagerId, // Update the 'route_to' in the payload
    };

    dispatch(expensetableTrueSubmit({ payload, id: record.id }));

    const updatedAllExpense = allExpense.map((item) =>
      item.id === record.id ? { ...item, route_to: selectedManagerId } : item
    );

    setAllExpense(updatedAllExpense);
    setApproveModalVisible(false);
  };

  //FETCH MANAGER LIST ON MODELDROPDOWN

  const managerListSelector = useSelector(
    (state) => state.getManagerListResult
  );

  useEffect(() => {
    dispatch(getManagerListAction({}));
  }, []);

  useEffect(() => {
    if (managerListSelector) {
      console.log(managerListSelector);
      const ManagerResult = managerListSelector.results.map((element) => {
        return { label: element.username, value: element.id };
      });
      setManagerList(ManagerResult);
    }
  }, [managerListSelector]);

  const handleEdit = (record) => {
    setEditItemData(record);
    setIsAddFormVisible(true);
  };

  const handleDelete = (record) => {
    setDeleteItemData(record);
    setIsDeleteConfirmationVisible(true);
  };

  const handleDeleteConfirmation = () => {
    const deletedItemId = deleteItemData.id;
    dispatch(deleteExpensepanelAction({ id: deletedItemId }));
    setIsDeleteConfirmationVisible(false);
    setAllExpense((prevItems) =>
      prevItems.filter((item) => item.id !== deletedItemId)
    );
  };

  //update or edit functionality
  const updateExpensepanelResultSelector = useSelector(
    (state) => state.updateexpenseResult
  );
  console.log(updateExpensepanelResultSelector);
  useEffect(() => {
    if (updateExpensepanelResultSelector) {
      setIsAddFormVisible(false);
      getPageDetails(url);
    }
  }, [updateExpensepanelResultSelector]);

  const showApproveModal = (record) => {
    setSelectedRecord(record);
    setApproveModalVisible(true);
  };

  //export button functionality
  function downloadExlsFiles() {
    let exportUrl = URLS.GET_EXPENSE_PANEL_URL + "?export=csv";
    if (searchTerm) {
      exportUrl += `&search=${searchTerm}`;
    }

    // Dispatch the export action
    dispatch(exportExpenseListAction({ URL: exportUrl }));
  }
  const csvUrlSelector = useSelector((state) => state.exportexpenselistResult);

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
        <Link to="/home/addexpense">
          <Button type="primary">Add</Button>
        </Link>
        <Input
          placeholder="Search..."
          style={{ width: "100%" }}
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          ref={inputSearchRef}
        />
        <Button type="primary" icon={<SearchOutlined />}>
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
        pagination={false} // Apply pagination configuration
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
            title: "Expense Name",
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
            title: "Status ",
            dataIndex: "status",
            key: "status",
          },
          {
            title: "Submit ",
            dataIndex: "submit",
            key: "submit",
            render: (text, record) => (
              <Space size="small">
                <Button
                  type="primary"
                  icon={<SendOutlined />}
                  //  onClick={() => handelsubmittrue(record)}

                  onClick={() => showApproveModal(record)}
                ></Button>
              </Space>
            ),
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
                <Button
                  type="success"
                  icon={<EyeOutlined />}
                  onClick={() => handleView(record)}
                />
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
        title={
          editItemData ? "Edit Expense Itemization" : "Add Expense Itemization"
        }
        open={isAddFormVisible}
        onCancel={() => setIsAddFormVisible(false)}
        onOk={() => setIsAddFormVisible(false)}
        footer={null}
        width={600}
      >
        <Addexpense initialData={editItemData} url={url} />
      </Modal>
      <Modal
        title="Confirm Delete"
        open={isDeleteConfirmationVisible}
        onOk={handleDeleteConfirmation}
        onCancel={() => setIsDeleteConfirmationVisible(false)}
      >
        Are you sure you want to delete this item?
      </Modal>
      <Modal
        title="Approve Item"
        visible={approveModalVisible}
        onCancel={() => setApproveModalVisible(false)}
        // onOk={ handelsubmittrue(selectedRecord, selectedManagerId)}
        width={500}
        footer={null}
      >
        <Form layout="vertical">
          <Row gutter={20}>
            <Col span={12}>
              <Form.Item
                label="Select Manager"
                name="manager" // Correct the 'name' attribute
              >
                <Select
                  onChange={(value) => setSelectedManagerId(value)}
                  style={{ width: "100%" }}
                  options={managerList}
                ></Select>
              </Form.Item>
              <Button
                type="primary"
                onClick={() =>
                  handelsubmittrue(selectedRecord, selectedManagerId)
                }
              >
                OK
              </Button>
            </Col>
          </Row>
        </Form>
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
      <Modal
        title={viewCompanyData ? "View Expense" : "Update Expense Details"}
        open={viewCompanyData}
        onCancel={() => {
          setIsAddFormVisible(false);
          setViewCompanyData(null);
        }}
        width={600}
        footer={null}
      >
        {viewCompanyData ? (
          <div>
            <p>Employee: {viewCompanyData.employee}</p>
            <p>Expense Name: {viewCompanyData.expense_name}</p>
            <p>Description : {viewCompanyData.description}</p>
            <p>Total Amount : {viewCompanyData.total_amt}</p>
            <p>Paid By : {viewCompanyData.paid_by}</p>
            <p>Expense Date : {viewCompanyData.expense_date}</p>
            <p>Attachment : {viewCompanyData.attachment}</p>
            <p>Status : {viewCompanyData.status}</p>
            <p>Submit : {viewCompanyData.submit}</p>
          </div>
        ) : (
          <Addexpense
            initialData={editItemData || null}
            url={url}
            setIsAddFormVisible={setIsAddFormVisible}
            isAddForm={editItemData}
          />
        )}
      </Modal>
    </div>
  );
};

export default ExpensePanel;
