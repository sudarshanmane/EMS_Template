import React, { useEffect, useState } from "react";
import { Table, Input, Button, Space, Modal, Pagination } from "antd";
import {
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  EyeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
// import {
//   getCompanyList,
//   deleteCompanyListAction,
//   exportCompanyPanelAction,
// } from "../../store/Actions/Actions";
import { getCompanyList } from "../../store/Action/Actions";
import { URLS } from "../../Globals/URLS";
import Company from "../../_components/screens/Company";

const CompanyPanel = () => {
  const dispatch = useDispatch();
  const [viewCompanyData, setViewCompanyData] = useState(null);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [editItemData, setEditItemData] = useState(null);
  const [deleteItemData, setDeleteItemData] = useState(null);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);
  const [allCompanyList, setAllCompanyList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [paginationCount, setPaginationCount] = useState({
    count: 0,
    page_size: 0,
  });
  const url = URLS.GET_COMPANY_LIST_URL;
  const updateUrl = URLS.UPDATE_COMPANY_LIST_URL

  const companyPanelSelector = useSelector((state) => state.getcompanylist);

  function getPageDetails(url) {
    dispatch(getCompanyList({ payload: {}, URL: url }));
  }

  function changePage(page, pageSize) {
    getPageDetails(url + "?page=" + page);
  }
  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchCompanyData(url) {
    dispatch(getCompanyList({ payload: {}, URL: url }));
  }

  function handleSearch(searchTerm) {
    setSearchTerm(searchTerm);
    const updatedUrl = searchTerm ? `${url}?search=${searchTerm}` : url;
    getPageDetails(updatedUrl);
  }
  useEffect(() => {
    fetchCompanyData(url);
  }, []);

  useEffect(() => {
    if (companyPanelSelector) {
      const companyList = companyPanelSelector.results;
      setAllCompanyList(companyList);
      let pageObj = { ...paginationCount };
      pageObj.count = companyPanelSelector.count;
      pageObj.page_size = companyPanelSelector.page_size;
      setPaginationCount(pageObj);
    }
  }, [companyPanelSelector]);

  const columns = [
    {
      title: "Sr No",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Company Name",
      dataIndex: "company_name",
      key: "company_name",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Postal Code",
      dataIndex: "postal_code",
      key: "postal_code",
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
  ];

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
    dispatch(deleteCompanyListAction({ id: deletedItemId }));
    setIsDeleteConfirmationVisible(false);
    setAllCompanyList((prevItems) =>
      prevItems.filter((item) => item.id !== deletedItemId)
    );
  };

  const handleView = (record) => {
    setViewCompanyData(record);
    setIsAddFormVisible(false);
  };
//export button functionality
function downloadExlsFiles() {
  let exportUrl = URLS.GET_COMPANY_LIST_URL + "?export=csv";
  if (searchTerm) {
    exportUrl += `&search=${searchTerm}`;
  }

  // Dispatch the export action
  dispatch(
    exportCompanyPanelAction({ URL: exportUrl })
  );
}

const csvUrlSelector = useSelector(
  (state) => state.exportcompanyResult
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
      <h1>Company List</h1>
      <form className="d-flex input-group w-auto">
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
        >
          Search
        </Button>
        <Button
        type="primary"
        icon={<DownloadOutlined />}
        onClick={() => downloadExlsFiles()}
      >
        Export
      </Button>
      </form>

      <Table dataSource={allCompanyList} columns={columns} pagination={false} />
      <Pagination
        total={paginationCount.count}
        showTotal={(total) => `Total ${allCompanyList.length} items`}
        pageSize={paginationCount.page_size}
        onChange={changePage}
      />
      <Modal
        title={editItemData ? "Update Company Details" : "Add Company Details"}
        open={isAddFormVisible}
        onCancel={() => setIsAddFormVisible(false)}
        onOk={() => setIsAddFormVisible(false)}
        width={600}
      >
        <Company
          initialData={editItemData || null}
          setIsAddFormVisible={setIsAddFormVisible}
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
        title={viewCompanyData ? "View Company" : "Update Company Details"}
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
            <p>Company Name: {viewCompanyData.company_name}</p>
            <p>State: {viewCompanyData.state}</p>
            <p>Country: {viewCompanyData.country}</p>
            <p>Postal Code: {viewCompanyData.postal_code}</p>
          </div>
        ) : (
          <Company
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
export default CompanyPanel;

