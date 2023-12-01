import React, { useEffect, useRef, useState } from "react";
import { Table, Input, Button, Space, Modal, Pagination } from "antd";
import {
  DownloadOutlined,
  EyeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteExpenseTypeAction,
  exportExpenseTypeAction,
  getExpenseTypePanelAction,
} from "../../store/Actions/Actions";
import Expensetypes from "../Screens/Dashboard/SubMenu/Expensetypes";
import { URLS } from "../../Globals/URLS";

const ExpenseTypePanel = () => {
  const dispatch = useDispatch();
  const [viewCompanyData, setViewCompanyData] = useState(null);
  const [allExpenseType, setAllExpenseType] = useState([]);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [editItemData, setEditItemData] = useState(null);
  const [deleteItemData, setDeleteItemData] = useState(null);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [paginationCount, setPaginationCount] = useState({
    count: 0,
    page_size: 0,
  });
  const [url, setUrl] = useState(URLS.EXPENSE_TYPE_PANEL_URL + "?page=1");
  const expensePanelSelector = useSelector(
    (state) => state.getExpenseTypePanelResult
  );

  function getPageDetails(url) {
    dispatch(getExpenseTypePanelAction({ payload: {}, URL: url }));
  }

  function changePage(page, pageSize) {
    let urlNew = URLS.EXPENSE_TYPE_PANEL_URL + "?page=" + page;
    setUrl(urlNew);
    getPageDetails(urlNew);
  }

  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchExpenseTypeData(url) {
    dispatch(getExpenseTypePanelAction({ payload: {}, URL: url }));
  }

  const inputSearchRef = useRef();

  function handleSearch() {
    let searchTerm = inputSearchRef.current.input.value;
    setSearchTerm(searchTerm);
    let urlForSearch = URLS.EXPENSE_TYPE_PANEL_URL;
    const updatedUrl = searchTerm
      ? `${urlForSearch}?search=${searchTerm}`
      : url;
    getPageDetails(updatedUrl);
  }
  useEffect(() => {
    fetchExpenseTypeData(url);
  }, []);

  useEffect(() => {
    if (expensePanelSelector) {
      console.log(expensePanelSelector);
      const expenseTypeList = expensePanelSelector.results.map(
        (element, index) => {
          return {
            srno: index + 1,
            id: element.id,
            expense_type_name: element.expense_type_name,
            accounting_coding_type:
              element.accounting_coding_type?.accounting_code,
            quantity_label: element.quantity_label,
            amount_label: element.amount_label,
            cost_formula: element.cost_formula,
            quantity_formula: element.quantity_formula,
          };
        }
      );
      setAllExpenseType(expenseTypeList);
      let pageObj = { ...paginationCount };
      pageObj.count = expensePanelSelector.count;
      pageObj.page_size = expensePanelSelector.page_size;
      setPaginationCount(pageObj);
    }
  }, [expensePanelSelector]);

  const handleEdit = (record) => {
    setEditItemData(record);
    setIsAddFormVisible(true);
  };

  const updateExpenseTypeResultSelector = useSelector(
    (state) => state.updateExpenseTypeResult
  );

  useEffect(() => {
    if (updateExpenseTypeResultSelector) {
      setIsAddFormVisible(false);
      getPageDetails(url);
    }
  }, [updateExpenseTypeResultSelector]);

  useEffect(() => {
    if (isAddFormVisible) {
    }
  }, [isAddFormVisible]);

  // Delete functionality
  const handleDelete = (record) => {
    setDeleteItemData(record);
    setIsDeleteConfirmationVisible(true);
  };

  const handleDeleteConfirmation = () => {
    const deletedItemId = deleteItemData.id;
    dispatch(deleteExpenseTypeAction({ id: deletedItemId }));
    setIsDeleteConfirmationVisible(false);
    setAllExpenseType((prevItems) =>
      prevItems.filter((item) => item.id !== deletedItemId)
    );
  };

  //export button functionality

  function downloadExlsFiles() {
    let exportUrl = URLS.EXPENSE_TYPE_PANEL_URL + "?export=csv";

    // Append search term to the export URL if a search term exists
    if (searchTerm) {
      exportUrl += `&search=${searchTerm}`;
    }

    dispatch(exportExpenseTypeAction({ URL: exportUrl }));
  }

  const csvUrlSelector = useSelector((state) => state.exportExpenseTypeResult);

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

  const handleView = (record) => {
    setViewCompanyData(record);
    setIsAddFormVisible(false);
  };

  return (
    <div>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            setEditItemData(null);
            setIsAddFormVisible(true);
          }}
        >
          Add
        </Button>
        <br />

        <Input
          placeholder="Search..."
          style={{ width: "100%", height: "100%" }}
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
        dataSource={allExpenseType}
        pagination={false}
        columns={[
          {
            title: "Sr No",
            dataIndex: "srno",
            key: "srno",
          },
          {
            title: "Name",
            dataIndex: "expense_type_name",
            key: "expense_type_name",
          },
          {
            title: "Account Code",
            dataIndex: "accounting_coding_type",
            key: "accounting_Code",
          },
          {
            title: "Quantity",
            dataIndex: "quantity_label",
            key: "quantity_label",
          },
          {
            title: "Amount",
            dataIndex: "amount_label",
            key: "amount_label",
          },
          {
            title: "Cost Formula",
            dataIndex: "cost_formula",
            key: "cost_formula",
          },
          {
            title: "Actions",
            key: "actions",
            render: (record) => (
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
        showTotal={(total) => `Total ${allExpenseType.length} items`}
        pageSize={paginationCount.page_size}
        onChange={changePage}
      />
      <Modal
        title={editItemData ? "Update Expense Type" : "Add Expense Type"}
        open={isAddFormVisible}
        onCancel={() => setIsAddFormVisible(false)}
        onOk={() => setIsAddFormVisible(false)}
        width={600}
        footer={null}
      >
        <Expensetypes
          initialData={editItemData || null}
          url={url}
          setIsAddFormVisible={setIsAddFormVisible}
          isAddForm={editItemData}
        />
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
        title={viewCompanyData ? "View Expense Type" : "Update Expense Type"}
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
            <p>Name: {viewCompanyData.expense_type_name}</p>
            <p>Account Code: {viewCompanyData.accounting_coding_type}</p>
            <p>Quantity: {viewCompanyData.quantity_label}</p>
            <p>Amount: {viewCompanyData.amount_label}</p>
            <p>Cost Formula: {viewCompanyData.cost_formula}</p>
          </div>
        ) : (
          <Expensetypes
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

export default ExpenseTypePanel;
