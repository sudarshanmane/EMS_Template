import React, { useEffect, useRef, useState } from "react";
import { Table, Input, Button, Space, Switch, Modal, Pagination } from "antd";
import { DownloadOutlined, EyeOutlined, SearchOutlined } from "@ant-design/icons";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAccountingcodeAction,
  exportaccountingcode,
  getaccountingcodePanelAction,
} from "../../store/Actions/Actions";
import AddAccountCode from "../Screens/Dashboard/SubMenu/AddAccountCode";
import { URLS } from "../../Globals/URLS";

const AccountCodePanel = () => {
  const [allAccountCode, setAllAccountCode] = useState([]);
  const [setNameFilter] = useState("");
  const [viewCompanyData, setViewCompanyData] = useState(null);
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

  const [url, setNewUrl] = useState(URLS.GET_ACCOUNTINGCODE_PANEL_URL);

  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  // const url = URLS.GET_ACCOUNTINGCODE_PANEL_URL;

  const accountingcodeselector = useSelector(
    (state) => state.panelaccountingcodeResult
  );

  function getPageDetails(url) {
    dispatch(getaccountingcodePanelAction({ payload: {}, URL: url }));
  }

  function changePage(page, pageSize) {
    let urlNew = URLS.GET_ACCOUNTINGCODE_PANEL_URL + "?page=" + page;
    setNewUrl(urlNew);
    getPageDetails(urlNew);
  }
  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchAccountingcodedata(url) {
    dispatch(getaccountingcodePanelAction({ payload: {}, URL: url }));
  }

  const inputSearchRef = useRef();

  
  function handleSearch() {
    let searchTearm = inputSearchRef.current.input.value;
    setSearchTerm(searchTearm);
    let urlForSearch = URLS.GET_ACCOUNTINGCODE_PANEL_URL;
    const updatedUrl = searchTearm ? `${urlForSearch}?search=${searchTearm}` : url;
    getPageDetails(updatedUrl);
  }
  useEffect(() => {
    fetchAccountingcodedata(url);
  }, []);

  useEffect(() => {
    if (accountingcodeselector) {
    
      const allAccountCode = accountingcodeselector.results.map((element,index) => {
        return {
          srno:index+1,
          accounting_code: element.accounting_code,
          account_type: element.account_type,
          reference_id: element.reference_id,
          enabled: element.enabled,
          description: element.description,
          id: element.id,
        };
      });
      setAllAccountCode(allAccountCode);
      let pageObj = { ...paginationCount };
      pageObj.count = accountingcodeselector.count;
      pageObj.page_size = accountingcodeselector.page_size;
      setPaginationCount(pageObj);
    }
  }, [accountingcodeselector]);

  const handleEdit = (record) => {
    console.log("Edit clicked for record:", record);
    setEditItemData(record);
    setIsAddFormVisible(true);
  };

  //delete functionality
  const handleDelete = (record) => {
    setDeleteItemData(record);
    setIsDeleteConfirmationVisible(true);
  };

  const handleDeleteConfirmation = () => {
    const deletedItemId = deleteItemData.id;
    dispatch(deleteAccountingcodeAction({ id: deletedItemId }));
    setIsDeleteConfirmationVisible(false);
    setAllAccountCode((prevItems) =>
    prevItems.filter((item) => item.id !== deletedItemId)
  );
  };
  const updateaccountingcodeselector = useSelector(
    (state) => state.updateAccountingResult
  );

  useEffect(() => {
    if (updateaccountingcodeselector) {
      setIsAddFormVisible(false);
      getPageDetails(url);
    }
  }, [updateaccountingcodeselector]);

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
  // export button functionality
  // const exprtselector= useSelector((state) => state.exportaccountingcodeResult);
  const handleView = (record) => {
    setViewCompanyData(record);
    setIsAddFormVisible(false);
  };
//export button functionality
function downloadExlsFiles() {
  let exportUrl = URLS.GET_ACCOUNTINGCODE_PANEL_URL + "?export=csv";
  if (searchTerm) {
    exportUrl += `&search=${searchTerm}`;
  }

  // Dispatch the export action
  dispatch(
    exportaccountingcode({ URL: exportUrl })
  );
}

  const csvUrlSelector = useSelector(
    (state) => state.exportaccountingcodeResult
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
        style={{ width: "100%", height:"100%" }}
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
         ref={inputSearchRef} 
      />

      <Button type="primary" icon={<SearchOutlined />}    onClick={handleSearch}>
        Search
      </Button>
      <Button
        type="primary"
        icon={<DownloadOutlined />}
        onClick={() => downloadExlsFiles()}
      >
        Export
      </Button>
      </Space><br /><br />
      <Table
        dataSource={allAccountCode}
      
        pagination={false}

         columns ={ [
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
      dataIndex: "account_type",
      key: "account_type",
    },
    {
      title: "Refrence Id",
      dataIndex: "reference_id",
      key: "reference_id",
    },
    {
      title: "Enabled",
      dataIndex: "enabled",
      key: "enabled",
      render: (text, record) => (
        <Switch checked={record.enabled} />
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (record) => (
        <Space size="small">
          <Button
            type="primary"
            icon={<EditOutlined />}
            value={searchTerm}
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
        showTotal={(total) => `Total ${allAccountCode.length} items`}
        pageSize={paginationCount.page_size}
        onChange={changePage}
      />
      <Modal
        title={editItemData ? "Edit Accounting Code" : "Add Accounting Code"}
        visible={isAddFormVisible} // Use "visible" instead of "open"
        onCancel={() => setIsAddFormVisible(false)}
        onOk={() => setIsAddFormVisible(false)}
        footer={null}
        width={600}
      >
        <AddAccountCode  initialData={editItemData || null}
          url={url}
          setIsAddFormVisible={setIsAddFormVisible}
          isAddForm={editItemData} />
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
        title={viewCompanyData ? "View accountcode" : "Update accounting Details"}
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
            <p>Account Type: {viewCompanyData.account_type}</p>
            <p>Reference Id: {viewCompanyData.reference_id}</p>
           
          </div>
        ) : (
          <AddAccountCode
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

export default AccountCodePanel;
