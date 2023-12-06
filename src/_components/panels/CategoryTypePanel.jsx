import React, { useEffect, useRef, useState } from "react";
import { Table, Input, Button, Space, Modal, Pagination } from "antd";
import { DownloadOutlined, EyeOutlined, SearchOutlined } from "@ant-design/icons";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { deleteCategorypanelAction, exportCategorylistAction, getCategoryPanelAction } from "../../store/Action/Actions";
import { useDispatch, useSelector } from "react-redux";
import Addcategory from "../../_components/screens/Addcategory"
import { URLS } from "../../Globals/URLS";
import {
  onShowSizeChange,
  itemRender,
} from "../../MainPage/paginationfunction";
import Offcanvas from "../../Entryfile/offcanvance";




const CategoryTypePanel = () => {
  const [allCategoryType, setAllCategoryType] = useState([]);
  const [setNameFilter] = useState("");
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [editItemData, setEditItemData] = useState(null);
  const [deleteItemData, setDeleteItemData] = useState(null);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);
    const [viewCompanyData, setViewCompanyData] = useState(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [paginationCount, setPaginationCount] = useState({
    count: 0,
    page_size: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [url, setUrl] = useState(URLS.GET_CATEGORY_PANEL_URL);

  const dispatch = useDispatch();

  const categoryselector = useSelector((state) => state.panelCategoryResult);

  function getPageDetails(url) {
    dispatch(getCategoryPanelAction({ payload: {}, URL: url }));
  }

  function changePage(page, pageSize) {
    let urlNew = URLS.GET_CATEGORY_PANEL_URL + "?page=" + page;
    setUrl(urlNew);
    getPageDetails(urlNew);
  }

  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchcategorydata(url) {
    dispatch(getCategoryPanelAction({ payload: {}, URL: url }));
  }

  const inputSearchRef = useRef();
  
  function handleSearch() {
    let searchTearm = inputSearchRef.current.input.value;
    setSearchTerm(searchTearm);
    let urlForSearch = URLS.GET_CATEGORY_PANEL_URL;
    const updatedUrl = searchTearm
      ? `${urlForSearch}?search=${searchTearm}`
      : url;
    getPageDetails(updatedUrl);
  }
  useEffect(() => {
    fetchcategorydata(url);
  }, []);

  useEffect(() => {
    if (categoryselector) {
      const allCategoryType = categoryselector.results.map((element,index) => {
        return {
          srno:index+1,
          category_name: element.category_name,
          parent_catergory: element.parent_catergory ? element.parent_catergory.expense_type_name : null,
          accounting_code: element.accounting_code,
          id: element.id,
        };
      });
      setAllCategoryType(allCategoryType);
      let pageObj = { ...paginationCount };
      pageObj.count = categoryselector.count;
      pageObj.page_size = categoryselector.page_size;
      setPaginationCount(pageObj);
    }
  }, [categoryselector]);

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
    dispatch(deleteCategorypanelAction({ id: deletedItemId }));
    setIsDeleteConfirmationVisible(false);
    setAllCategoryType((prevItems) =>
    prevItems.filter((item) => item.id !== deletedItemId)
  );
  };


  const updatecategorySelector = useSelector(
    (state) => state.updatecategortyResult
  );

  useEffect(() => {
    if (updatecategorySelector) {
      setIsAddFormVisible(false);
      getPageDetails(url);
    }
  }, [updatecategorySelector]);

  useEffect(() => {
    fetchcategorydata(url);
  }, [allCategoryType, url]); 
  
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
  let exportUrl = URLS.GET_CATEGORY_PANEL_URL + "?export=csv";
  if (searchTerm) {
    exportUrl += `&search=${searchTerm}`;
  }

  // Dispatch the export action
  dispatch(
    exportCategorylistAction({ URL: exportUrl })
  );
}
const csvUrlSelector = useSelector(
  (state) => state.exportcategoryResult
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
    <>
    <Offcanvas />
    <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Expense Category</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card mb-0">
                <div className="card-header">
                  <h4 className="card-title mb-0">Expense Category</h4>
                </div>
                <div className="card-body">
    <div className="table-responsive">
      <Space>
      <button
        type="button"
        className="btn btn-primary me-1"
        onClick={() => {
          setEditItemData(null);
          setIsAddFormVisible(true);
        }}
      >
        Add
      </button>

      <Input
        placeholder="Search..."
        style={{ width: "100%", height:"100%" }}
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
         ref={inputSearchRef} 
      />

      <button type="primary"  className="btn btn-secondary me-1" icon={<SearchOutlined />}    onClick={handleSearch}>
        Search
      </button>
      <button
        type="button"
        className="btn btn-success me-1"
        icon={<DownloadOutlined />}
        onClick={() => downloadExlsFiles()}
      >
        Export
      </button>
      </Space><br /><br />
      <Table
       dataSource={allCategoryType}
       pagination={{
         total: allCategoryType.length,
         showTotal: (total, range) =>
           `Showing ${range[0]} to ${range[1]} of ${total} entries`,
         showSizeChanger: true,
         onShowSizeChange: onShowSizeChange,
         itemRender: itemRender,
       }}
       style={{ overflowX: "auto" }}
       // columns={columns}
       bordered
       rowKey={(record) => record.id}
       
        columns={[
          {
            title: "Sr No",
            dataIndex: "srno",
            key: "srno",
          },
          {
            title: "Expense Type Name",
            dataIndex: "parent_catergory",
            key: "parent_catergory",
          
          },
          {
            title: "Category Name",
            dataIndex: "category_name",
            key: "category_name",
          },
          {
            title: "Accounting Code",
            dataIndex: "accounting_code",
            key: "accounting_code",
            category_name: "gwregwt",
            accounting_code: "wgw",
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
     
      <Modal
        title={editItemData ? "Edit Accounting Code" : "Add Accounting Code"}
        visible={isAddFormVisible} // Use "visible" instead of "open"
        onCancel={() => setIsAddFormVisible(false)}
        onOk={() => setIsAddFormVisible(false)}
        footer={null}
        width={600}
      >
        <Addcategory
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
        title={viewCompanyData ? "View category" : "Update category Details"}
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
            <p>Expense Type Name: {viewCompanyData.parent_catergory}</p>
            <p>Category Name: {viewCompanyData.category_name}</p>
            <p>Accounting code: {viewCompanyData.accounting_code}</p>
           
          </div>
        ) : (
          <Addcategory
            initialData={editItemData || null}
            url={url}
            setIsAddFormVisible={setIsAddFormVisible}
            isAddForm={editItemData}
          />
        )}
      </Modal>
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

export default CategoryTypePanel;
