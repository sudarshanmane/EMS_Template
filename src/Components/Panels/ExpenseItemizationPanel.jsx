import React, { useEffect, useRef, useState } from "react";
import { Table, Input, Button, Space, Switch, Modal, Pagination } from "antd";
import {
  DownloadOutlined,
  EyeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteExpenseitemizationAction,
  exportItemizationListAction,
  getPanelItemization,
} from "../../store/Actions/Actions";
import ExpenseItemizationField from "../Screens/Dashboard/SubMenu/ExpenseItemizationField";

import { URLS } from "../../Globals/URLS";

const ExpenseItemizationPanel = () => {
  const [allExpenseItemization, setAllExpenseItemization] = useState([]);
  const [setNameFilter] = useState("");
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [editItemData, setEditItemData] = useState(null);
  const [deleteItemData, setDeleteItemData] = useState(null);
  const [viewCompanyData, setViewCompanyData] = useState(null);

  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [paginationCount, setPaginationCount] = useState({
    count: 0,
    page_size: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [url, setUrl] = useState(URLS.GET_ITEMIZATION_PANEL_URL);

  const dispatch = useDispatch();

  const getitemeselector = useSelector((state) => state.panelitemizationResult);

  function getPageDetails(url) {
    dispatch(getPanelItemization({ payload: {}, URL: url }));
  }

  function changePage(page, pageSize) {
    const urlNew = URLS.GET_ITEMIZATION_PANEL_URL + "?page=" + page;
    setUrl(urlNew);
    getPageDetails(urlNew);
  }

  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchItemaizationdata(url) {
    dispatch(getPanelItemization({ payload: {}, URL: url }));
  }

  const inputSearchRef = useRef();

  function handleSearch() {
    let searchTearm = inputSearchRef.current.input.value;
    setSearchTerm(searchTearm);
    let urlForSearch = URLS.GET_ITEMIZATION_PANEL_URL;
    const updatedUrl = searchTearm
      ? `${urlForSearch}?search=${searchTearm}`
      : url;
    getPageDetails(updatedUrl);
  }
  useEffect(() => {
    fetchItemaizationdata(url);
  }, []);

  useEffect(() => {
    if (getitemeselector) {
      const allExpenseItemization = getitemeselector.results.map(
        (element, index) => {
          return {
            srno: index + 1,
            expense_item: element.expense_item.item_name,
            max_reimbursable_amount: element.max_reimbursable_amount,
            reimbursable: element.reimbursable,
            id: element.id,
          };
        }
      );
      setAllExpenseItemization(allExpenseItemization);
      let pageObj = { ...paginationCount };
      pageObj.count = getitemeselector.count;
      pageObj.page_size = getitemeselector.page_size;
      setPaginationCount(pageObj);
    }
  }, [getitemeselector]);

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
    dispatch(deleteExpenseitemizationAction({ id: deletedItemId }));
    setIsDeleteConfirmationVisible(false);
    setAllExpenseItemization((prevItems) =>
      prevItems.filter((item) => item.id !== deletedItemId)
    );
  };

  const updateExpenseItemizationSelector = useSelector(
    (state) => state.updateitemizationResult
  );
  useEffect(() => {
    if (updateExpenseItemizationSelector) {
      setIsAddFormVisible(false);
      getPageDetails(url);
    }
  }, [updateExpenseItemizationSelector]);

  useEffect(() => {
    if (isAddFormVisible) {
    }
  }, [isAddFormVisible]);

  // const rowSelection = {
  //   selectedRowKeys,
  //   onChange: (selectedKeys) => {
  //     setSelectedRowKeys(selectedKeys);
  //   },
  //   checkStrictly: true,
  // };
  const handleView = (record) => {
    setViewCompanyData(record);
    setIsAddFormVisible(false);
  };
  //export button functionality
  function downloadExlsFiles() {
    let exportUrl = URLS.GET_ITEMIZATION_PANEL_URL + "?export=csv";
    if (searchTerm) {
      exportUrl += `&search=${searchTerm}`;
    }

    // Dispatch the export action
    dispatch(exportItemizationListAction({ URL: exportUrl }));
  }

  const csvUrlSelector = useSelector((state) => state.exportitemizationResult);

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
        dataSource={allExpenseItemization}
        // rowSelection={rowSelection}
        pagination={false}
        columns={[
          {
            title: "Sr No",
            dataIndex: "srno",
            key: "srno",
          },
          {
            title: "Item Name",
            dataIndex: "expense_item",
            key: "item_name",
          },
          {
            title: "Max Reimbursable Amount",
            dataIndex: "max_reimbursable_amount",
            key: "max_reimbursable_amount",
          },
          {
            title: "Reimbursable ",
            dataIndex: "reimbursable",
            key: "reimbursable",
            render: (text, record) => <Switch checked={record.reimbursable} />,
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
        showTotal={(total) => `Total ${allExpenseItemization.length} items`}
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
        <ExpenseItemizationField
          initialData={editItemData || null}
          url={url}
          setIsAddFormVisible={setIsAddFormVisible}
          isAddForm={editItemData}
        />
      </Modal>

      <Modal
        title="Confirm Delete"
        visible={isDeleteConfirmationVisible}
        onOk={handleDeleteConfirmation}
        onCancel={() => setIsDeleteConfirmationVisible(false)}
      >
        Are you sure you want to delete this item?
      </Modal>
      <Modal
        title={
          viewCompanyData
            ? "View ExpenseItemizationField"
            : "Update ExpenseItemizationField Details"
        }
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
            <p>Item Name: {viewCompanyData.expense_item}</p>
            <p>
              Max Reimbursable Amount: {viewCompanyData.max_reimbursable_amount}
            </p>
            {/* <p>Reimbursable : {viewCompanyData.reimbursable}</p> */}
          </div>
        ) : (
          <ExpenseItemizationField
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

export default ExpenseItemizationPanel;
