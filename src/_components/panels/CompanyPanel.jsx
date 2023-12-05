import React, { useEffect, useState } from "react";
import { Table, Input, Button, Space, Modal } from "antd";
import {
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  EyeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.min.css";
import "../../MainPage/antdstyle.css";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyList } from "../../store/Action/Actions";
import { URLS } from "../../Globals/URLS";
import Company from "../../_components/screens/Company";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  onShowSizeChange,
  itemRender,
} from "../../MainPage/paginationfunction";
import Offcanvas from "../../Entryfile/offcanvance";


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
  const updateUrl = URLS.UPDATE_COMPANY_LIST_URL;

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
const data = [
  { id: 1, company_name: "Tiger Nixon", state: "System Architect", country: "Edinburgh", postal_code: "61"},
]
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
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
      sorter: (a, b) => a.position.length - b.position.length,
    },

    {
      title: "Country",
      dataIndex: "country",
      key: "country",
      sorter: (a, b) => a.office.length - b.office.length,
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
    dispatch(exportCompanyPanelAction({ URL: exportUrl }));
  }

  const csvUrlSelector = useSelector((state) => state.exportcompanyResult);

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
    <>
      <Offcanvas />
      <div className="page-wrapper">
        <Helmet>
          <title>Data Tables - HRMS Admin Template</title>
          <meta name="description" content="Data Tables" />
        </Helmet>

        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Company Table</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Company List</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="card mb-0">
              <div className="card-header">
									<h4 className="card-title mb-0">Company List</h4>
									{/* <p className="card-text">
										This is the most basic example of the datatables with zero configuration. Use the <code>.datatable</code> class to initialize datatables.
									</p> */}
								</div>
                <div className="card-body">
                  <div className="table-responsive">
                    <Table
                      pagination={{
                        // total: allCompanyList.length,
                        total: data.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                      }}
                      style={{ overflowX: "auto" }}
                      columns={columns}
                      bordered
                      // dataSource={allCompanyList}
                      dataSource={data}

                      rowKey={(record) => record.id}
                      // onChange={this.handleTableChange}
                    />
                    {/* <Modal
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
      </Modal> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CompanyPanel;
