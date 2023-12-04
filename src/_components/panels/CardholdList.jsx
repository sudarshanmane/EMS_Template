import React, { useEffect, useRef, useState } from "react";
import { Table, Input, Button, Space, Modal,Pagination, Form, Row, Col,Select } from "antd";
import { DownloadOutlined, EyeOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { deleteExpensepanelAction, expensetableTrueSubmit, exportExpenseListAction, getManagerListAction, getexpensePanelListAction, managercardHoldAction, managercardapprovelAction } from "../../store/Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import Addexpense from "../Screens/Dashboard/SubMenu/Addexpense";
import { SendOutlined } from "@ant-design/icons";

import { URLS } from "../../Globals/URLS";

import { Option } from "antd/es/mentions";


const CardHoldList = () => {
 
  const [allExpense, setAllExpense] = useState([]);
  
  
  
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
    const [url, setUrl] = useState(URLS.MANAGER_CARD_HOLD_LIST_URL);
    const dispatch = useDispatch();
    const [invoiceModalVisible, setInvoiceModalVisible] = useState(false);
    const [selectedInvoice, setSelectedInvoice] = useState(null);
    const [viewCompanyData, setViewCompanyData] = useState(null);
    const [isAddFormVisible, setIsAddFormVisible] = useState(false);
    const [editItemData, setEditItemData] = useState(null);
    const managercardholdSelector = useSelector((state) => state.managerholdResult);
   
  function getPageDetails(url) {
    dispatch(managercardHoldAction({ payload: {}, URL: url }));
  }
  
  function changePage(page, pageSize) {
    let urlNew = URLS.MANAGER_CARD_HOLD_LIST_URL + "?page=" + page;
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

  function fetchcardHoldpanel(url) {
    dispatch(managercardHoldAction({ payload: {}, URL: url }));
  }

  const inputSearchRef = useRef();
  
  function handleSearch() {
    let searchTerm = inputSearchRef.current.input.value;
    setSearchTerm(searchTerm);
    let urlForSearch = URLS.MANAGER_CARD_HOLD_LIST_URL;
    const updatedUrl = searchTerm ? `${urlForSearch}?search=${searchTerm}` : url;
    getPageDetails(updatedUrl);
  }
  
  useEffect(() => {
    fetchcardHoldpanel(url);
  }, []);
  
  useEffect(() => {
    if (managercardholdSelector) {
      const allExpense = managercardholdSelector.results.map((element,index) => ({
        srno:index+1,
        id: element.id,
        employee:element.employee?.username,
        // expense_name: element.expense_name.item_name,
        description:element.description,
        total_amt:element.total_amt,
        // paid_by:element.paid_by,
        expense_date:element.expense_date,
        // attachment:element.attachment,
        // approved_amt:element.approved_amt,
        status:element.status,
        
        // approved_by:element.approved_by
      }));

      setAllExpense(allExpense);
      let pageObj = { ...paginationCount };
      pageObj.count = managercardholdSelector.count;
      pageObj.page_size = managercardholdSelector.page_size;
      setPaginationCount(pageObj);
    }
  }, [managercardholdSelector]);


  
  return (
    <div>
      <Space>
   
    <Input
        placeholder="Search..."
        style={{ width: '100%' }}
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        ref={inputSearchRef} 
      />
      <Button
        type="primary"
        icon={<SearchOutlined />}
      >
        Search
      </Button>
      <Button
        type="primary"
        icon={<DownloadOutlined />}
        // onClick={() => downloadExlsFiles()}
      >
        Export
      </Button></Space><br /><br />
      <Table
        dataSource={allExpense}
        pagination={false} // Apply pagination configuration
        columns ={[
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
    // {
    //   title: "Expense Name",
    //   dataIndex: "expense_name", 
    //   key: "item_name",
    // },
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
    // {
    //   title: "Paid By",
    //   dataIndex: "paid_by",
    //   key: "paid_by",
    // },
    {
      title: "Expense Date",
      dataIndex: "expense_date",
      key: "expense_date",
    },
    
    {
      title: "Status ",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="small">
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
        title={viewCompanyData ? "View Expense" : "Update expense Details"}
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
            {/* <p>Expense Name: {viewCompanyData.expense_name}</p> */}
            <p>Description : {viewCompanyData.description}</p>
            <p>Total Amount : {viewCompanyData.total_amt}</p>
          
            <p>Expense Date : {viewCompanyData.expense_date}</p>
       
            <p>Status : {viewCompanyData.status}</p>
          
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

export default CardHoldList;
