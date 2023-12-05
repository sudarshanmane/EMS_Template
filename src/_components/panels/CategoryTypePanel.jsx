import React, { useEffect, useRef, useState } from "react";
import { Table, Input, Button, Space, Modal, Pagination } from "antd";
import { DownloadOutlined, EyeOutlined, SearchOutlined } from "@ant-design/icons";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { deleteCategorypanelAction, exportCategorylistAction, getCategoryPanelAction } from "../../store/Action/Actions";
import { useDispatch, useSelector } from "react-redux";
import Addcategory from "../../_components/screens/Addcategory"
import { URLS } from "../../Globals/URLS";



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
        dataSource={allCategoryType}
        // rowSelection={rowSelection}
        pagination={false}
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
      <Pagination
        total={paginationCount.count}
        showTotal={(total) => `Total ${allCategoryType.length} items`}
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
  );
};

export default CategoryTypePanel;
