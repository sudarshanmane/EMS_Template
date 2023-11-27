import React, { useEffect, useRef, useState } from "react";
import { Table, Input, Button, Space, Switch, Modal, Pagination } from "antd";
import {
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
  DownloadOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteExternalAccountCodeAction,
  exportExternalAccountCodeAction,
  getExternalAccountCodePanelAction,
} from "../../store/Actions/Actions";
import AddExternalAccountCode from "../Screens/Dashboard/SubMenu/AddExternalAccountCode";
import { URLS } from "../../Globals/URLS";

function ExternalAccountPanel() {
  const dispatch = useDispatch();

  const [allItems, setAllItems] = useState([]);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [editItemData, setEditItemData] = useState(null);
  const [deleteItemData, setDeleteItemData] = useState(null);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewCompanyData, setViewCompanyData] = useState(null);

  const [paginationCount, setPaginationCount] = useState({
    count: 0,
    page_size: 0,
  });
  const [url, setUrl] = useState(
    URLS.EXTERNAL_ACCOUNT_CODE_PANEL_URL + "?page=1"
  );

  const externalAccountCodeSelector = useSelector(
    (state) => state.getExternalAccountCodeResult
  );
  console.log(externalAccountCodeSelector);

  function getPageDetails(url) {
    dispatch(getExternalAccountCodePanelAction({ payload: {}, URL: url }));
  }

  function changePage(page, pageSize) {
    let urlNew = URLS.EXTERNAL_ACCOUNT_CODE_PANEL_URL + "?page=" + page;
    setUrl(urlNew);
    getPageDetails(urlNew);
  }

  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchExternalCodeAccountData(url) {
    dispatch(getExternalAccountCodePanelAction({ payload: {}, URL: url }));
  }
  const inputSearchRef = useRef();
  function handleSearch() {
    let searchTerm = inputSearchRef.current.input.value;
    setSearchTerm(searchTerm);
    let urlForSearch = URLS.EXTERNAL_ACCOUNT_CODE_PANEL_URL;
    const updatedUrl = searchTerm ? `${urlForSearch}?search=${searchTerm}` : url;
    getPageDetails(updatedUrl);
  }
  useEffect(() => {
    fetchExternalCodeAccountData(url);
  }, []);

  useEffect(() => {
    if (externalAccountCodeSelector) {
      const externalAccountCodeList = externalAccountCodeSelector.results.map(
        (element, index) => {
          return {
            srno: index + 1,
            id: element.id,
            accounting_code: element.table.accounting_code,
            account_code: element.account_code,
            account_type: element.table.account_type,
            enabled: element.enabled,
          };
        }
      );
      setAllItems(externalAccountCodeList);
      let pageObj = { ...paginationCount };
      pageObj.count = externalAccountCodeSelector.count;
      pageObj.page_size = externalAccountCodeSelector.page_size;
      setPaginationCount(pageObj);
    }
  }, [externalAccountCodeSelector]);

  const handleEdit = (record) => {
    setEditItemData(record);
    setIsAddFormVisible(true);
  };

  // const handleDeleteConfirmation = () => {
  //   const deletedItemId = deleteItemData.id;
  //   setAllItems((prevItems) =>
  //     prevItems.filter((item) => item.id !== deletedItemId)
  //   );
  //   setIsDeleteConfirmationVisible(false);
  // };

  const updateExternalAccountSelector = useSelector(
    (state) => state.updateExternalAccountCodeResult
  );

  useEffect(() => {
    if (updateExternalAccountSelector) {
      setIsAddFormVisible(false);
      getPageDetails(url);
    }
  }, [updateExternalAccountSelector]);

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
    dispatch(deleteExternalAccountCodeAction({ id: deletedItemId }));
    setIsDeleteConfirmationVisible(false);
    setAllItems((prevItems) =>
      prevItems.filter((item) => item.id !== deletedItemId)
    );
  };

  //export button functionality
  function downloadExlsFiles() {
    let exportUrl = URLS.EXTERNAL_ACCOUNT_CODE_PANEL_URL + "?export=csv";
    
    // Append search term to the export URL if a search term exists
    if (searchTerm) {
      exportUrl += `&search=${searchTerm}`;
    }
  
    dispatch(exportExternalAccountCodeAction({ URL: exportUrl }));
  }
  
  const csvUrlSelector = useSelector(
    (state) => state.exportExternalAccountResult
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
        dataSource={allItems}
        pagination={false}
        columns={[
          {
            title: "Sr No",
            dataIndex: "srno",
            key: "srno",
          },
          {
            title: "Accounting Code",
            dataIndex: "accounting_code",
            key: "accounting_code",
          },
          {
            title: "Account Type",
            dataIndex: "account_code",
            key: "account_type",
          },
          {
            title: "Enabled",
            dataIndex: "enabled",
            key: "enabled",
            render: (text, record) => <Switch checked={record.enabled} />,
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
          editItemData
            ? "Update External Account Code"
            : "Add External Account Code"
        }
        open={isAddFormVisible}
        onCancel={() => setIsAddFormVisible(false)}
        onOk={() => setIsAddFormVisible(false)}
        width={600}
        footer={null}
      >
        <AddExternalAccountCode
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
        title={viewCompanyData ? "View External Account Code" : "Update External Account Code"}
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
            <p>Accounting Code: {viewCompanyData.accounting_code}</p>
            <p>Account Type: {viewCompanyData.account_code}</p>
           
          
          </div>
        ) : (
          <AddExternalAccountCode
            initialData={editItemData || null}
            url={url}
            setIsAddFormVisible={setIsAddFormVisible}
            isAddForm={editItemData}
          />
        )
        }
      </Modal>
    </div>
  );
}

export default ExternalAccountPanel;
