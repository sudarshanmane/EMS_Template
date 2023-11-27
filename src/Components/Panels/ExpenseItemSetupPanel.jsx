import React, { useEffect, useRef, useState } from "react";
import { Table, Input, Button, Space, Modal, Pagination } from "antd";
import {
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
  DownloadOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteExpenseItemSetupAction,
  exportExpenseItemSetupAction,
  getExpenseItemSetupPanelAction,
} from "../../store/Actions/Actions";
import ExpenseItemSetup from "../Screens/Dashboard/SubMenu/ExpenseItemSetup";
import { URLS } from "../../Globals/URLS";

function ExpenseItemSetupPanel() {
  const dispatch = useDispatch();
  const [allItems, setAllItems] = useState([]);
  const [viewCompanyData, setViewCompanyData] = useState(null);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [editItemData, setEditItemData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteItemData, setDeleteItemData] = useState(null);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);
  const [paginationCount, setPaginationCount] = useState({
    count: 0,
    page_size: 0,
  });
  const [url, setUrl] = useState(
    URLS.GET_EXPENSE_ITEM_SETUP_PANEL_URL + "?page=1"
  );

  const expenseItemSetupSelector = useSelector(
    (state) => state.getExpenseItemPanelResult
  );

  function getPageDetails(url) {
    dispatch(getExpenseItemSetupPanelAction({ payload: {}, URL: url }));
  }
  function changePage(page, pageSize) {
    let urlNew = URLS.GET_EXPENSE_ITEM_SETUP_PANEL_URL + "?page=" + page;
    setUrl(urlNew);
    getPageDetails(urlNew);
  }

  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchExpenseItemSetupData(url) {
    dispatch(getExpenseItemSetupPanelAction({ payload: {}, URL: url }));
  }

  const inputSearchRef = useRef();
  function handleSearch() {
    let searchTerm = inputSearchRef.current.input.value;
    setSearchTerm(searchTerm);
    let urlForSearch = URLS.GET_EXPENSE_ITEM_SETUP_PANEL_URL;
    const updatedUrl = searchTerm
      ? `${urlForSearch}?search=${searchTerm}`
      : url;
    getPageDetails(updatedUrl);
  }
  useEffect(() => {
    fetchExpenseItemSetupData(url);
  }, []);

  useEffect(() => {
    if (expenseItemSetupSelector) {
      const expenseItemSetupList = expenseItemSetupSelector.results.map(
        (element, index) => {
          return {
            srno: index + 1,
            item_name: element.item_name,
            id: element.id,
            accounting_coding_type:
              element.accounting_coding_type?.accounting_code,
            expense_type: element.expense_type?.expense_type_name,
            account_code: element.account_code,
            item_category: element.item_category,
            merchant_category_code: element.merchant_category_code,
            account_coding_type: element.account_coding_type,
          };
        }
      );
      setAllItems(expenseItemSetupList);
      let pageObj = { ...paginationCount };
      pageObj.count = expenseItemSetupSelector.count;
      pageObj.page_size = expenseItemSetupSelector.page_size;
      setPaginationCount(pageObj);
    }
  }, [expenseItemSetupSelector]);

  const handleEdit = (record) => {
    setEditItemData(record);
    setIsAddFormVisible(true);
  };

  const updateExpenseItemResultSelector = useSelector(
    (state) => state.updateExpenseItemSetupResult
  );

  useEffect(() => {
    if (updateExpenseItemResultSelector) {
      setIsAddFormVisible(false);
      getPageDetails(url);
    }
  }, [updateExpenseItemResultSelector]);

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
    dispatch(deleteExpenseItemSetupAction({ id: deletedItemId }));
    setIsDeleteConfirmationVisible(false);
    setAllItems((prevItems) =>
      prevItems.filter((item) => item.id !== deletedItemId)
    );
  };

  const handleView = (record) => {
    setViewCompanyData(record);
    setIsAddFormVisible(false);
  };

  //export button functionality

  function downloadExlsFiles() {
    let exportUrl = URLS.GET_EXPENSE_ITEM_SETUP_PANEL_URL + "?export=csv";

    // Append search term to the export URL if a search term exists
    if (searchTerm) {
      exportUrl += `&search=${searchTerm}`;
    }

    dispatch(exportExpenseItemSetupAction({ URL: exportUrl }));
  }

  const csvUrlSelector = useSelector(
    (state) => state.exportExpenseItemSetupResult
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
        dataSource={allItems}
        pagination={false}
        columns={[
          {
            title: "Sr No",
            dataIndex: "srno",
            key: "srno",
          },
          {
            title: "Expense Type",
            dataIndex: "expense_type",
            key: "expense_type_name",
          },
          {
            title: "Item name",
            dataIndex: "item_name",
            key: "item_name",
          },
          {
            title: "Account Code",
            dataIndex: "account_code",
            key: "account_code",
          },
          {
            title: "Account Coding Type",
            dataIndex: "account_coding_type",
            key: "account_coding_type",
          },
          {
            title: "Item Category",
            dataIndex: "item_category",
            key: "item_category",
          },
          {
            title: "Merchant Category Code",
            dataIndex: "merchant_category_code",
            key: "merchant_category_code",
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
        showTotal={(total) => `Total ${allItems.length} items`}
        pageSize={paginationCount.page_size}
        onChange={changePage}
      />

      <Modal
        title={
          editItemData ? "Update Expense Item Setup" : "Add Expense Item Setup"
        }
        open={isAddFormVisible}
        onCancel={() => setIsAddFormVisible(false)}
        onOk={() => setIsAddFormVisible(false)}
        width={600}
        footer={null}
      >
        <ExpenseItemSetup
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
        title="Confirm Delete"
        open={isDeleteConfirmationVisible}
        onOk={handleDeleteConfirmation}
        onCancel={() => setIsDeleteConfirmationVisible(false)}
      >
        Are you sure you want to delete this item?
      </Modal>
      <Modal
        title={viewCompanyData ? "View Expense Item Setup" : "Update Expense Item Setup"}
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
            <p>Expense Type: {viewCompanyData.expense_type}</p>
            <p>Item Name: {viewCompanyData.item_name}</p>
            <p>Account Code: {viewCompanyData.account_code}</p>
            <p>Account Coding Type: {viewCompanyData.account_coding_type}</p>
            <p>Item Category: {viewCompanyData.item_category}</p>
            <p>Merchant Category Code: {viewCompanyData.merchant_category_code}</p>
          </div>
        ) : (
          <ExpenseItemSetup
            initialData={editItemData || null}
            url={url}
            setIsAddFormVisible={setIsAddFormVisible}
            isAddForm={editItemData}
          />
        )}
      </Modal>
    </div>
  );
}

export default ExpenseItemSetupPanel;
