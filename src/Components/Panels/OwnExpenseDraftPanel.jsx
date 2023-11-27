import React, { useEffect, useRef, useState } from "react";
import { Table, Input, Button, Space, Pagination, Modal } from "antd";
import { DownloadOutlined, EyeOutlined, SearchOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";

import { URLS } from "../../Globals/URLS";
import { ownExpenseDraftAction } from "../../store/Actions/Actions";
import Addexpense from "../Screens/Dashboard/SubMenu/Addexpense";

function OwnExpenseDraftPanel() {
  const [allExpense, setAllExpense] = useState([]);

  const [paginationCount, setPaginationCount] = useState({
    count: 0,
    page_size: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [viewCompanyData, setViewCompanyData] = useState(null);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [editItemData, setEditItemData] = useState(null);
  const [url, setUrl] = useState(URLS.OWN_EXPENSE_DRAFT_URL);
  const dispatch = useDispatch();
  const ownExpenseDraftSelector = useSelector(
    (state) => state.ownExpenseDraftListResult
  );

  function getPageDetails(url) {
    dispatch(ownExpenseDraftAction({ payload: {}, URL: url }));
  }

  function changePage(page, pageSize) {
    let urlNew = URLS.OWN_EXPENSE_DRAFT_URL + "?page=" + page;
    setUrl(urlNew);
    getPageDetails(urlNew);
  }
  useEffect(() => {
    getPageDetails(url);
  }, []);

  function fetchcardapprovelpanel(url) {
    dispatch(ownExpenseDraftAction({ payload: {}, URL: url }));
  }

  const inputSearchRef = useRef();
  function handleSearch() {
    let searchTerm = inputSearchRef.current.input.value;
    setSearchTerm(searchTerm);
    let urlForSearch = URLS.OWN_EXPENSE_DRAFT_URL;
    const updatedUrl = searchTerm
      ? `${urlForSearch}?search=${searchTerm}`
      : url;
    getPageDetails(updatedUrl);
  }

  useEffect(() => {
    fetchcardapprovelpanel(url);
  }, []);

  useEffect(() => {
    if (ownExpenseDraftSelector) {
      const allExpense = ownExpenseDraftSelector.results.map(
        (element, index) => ({
          srno: index + 1,
          id: element.id,
          expense_name: element.expense_name?.item_name,
          // expense_name: element.expense_name.item_name,
          expense_date: element.expense_date,
          description: element.description,
          total_amt: element.total_amt,
          // paid_by:element.paid_by,

          // attachment:element.attachment,
          approved_amt: element.approved_amt,
          status: element.status,

          // approved_by:element.approved_by
        })
      );

      setAllExpense(allExpense);
      let pageObj = { ...paginationCount };
      pageObj.count = ownExpenseDraftSelector.count;
      pageObj.page_size = ownExpenseDraftSelector.page_size;
      setPaginationCount(pageObj);
    }
  }, [ownExpenseDraftSelector]);

  const handleView = (record) => {
    setViewCompanyData(record);
    setIsAddFormVisible(false);
  };

  return (
    <div>
      <Space>
        <Input
          placeholder="Search..."
          style={{ width: "100%" }}
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          ref={inputSearchRef}
        />
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          // onClick={() => downloadExlsFiles()}
        >
          Export
        </Button>
      </Space>
      <br />
      <br />
      <Table
        dataSource={allExpense}
        pagination={false} // Apply pagination configuration
        columns={[
          {
            title: "Sr No",
            dataIndex: "srno",
            key: "srno",
          },

          {
            title: "Expense Category",
            dataIndex: "expense_name",
            key: "item_name",
          },
          {
            title: "Description",
            dataIndex: "description",
            key: "description",
          },
          {
            title: "Date",
            dataIndex: "expense_date",
            key: "expense_date",
          },
          {
            title: "Amount",
            dataIndex: "total_amt",
            key: "total_amt",
          },
          {
            title: "Approved Amount",
            dataIndex: "approved_amt",
            key: "approved_amt",
          },

          {
            title: "Status ",
            dataIndex: "status",
            key: "status",
          },
          {
            title: "Actions",
            key: "actions",
            render: (record) => (
             
                
                <Button
                  type="success"
                  icon={<EyeOutlined />}
                  onClick={() => handleView(record)}
                />
              
            ),
          },
        ]}
      />

<Modal
        title={viewCompanyData ? "Drafted Expenses" : "Update"}
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
            <p>Expense Category: {viewCompanyData.expense_name}</p>
            <p>Description: {viewCompanyData.description}</p>
            <p>Date: {viewCompanyData.expense_date}</p>
            <p>Amount: {viewCompanyData.total_amt}</p>
            <p>Approved Amount: {viewCompanyData.approved_amt}</p>
            <p>Status: {viewCompanyData.status}</p>
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
      <Pagination
        total={paginationCount.count}
        showTotal={(total) => `Total ${allExpense.length} items`}
        pageSize={paginationCount.page_size}
        onChange={changePage}
      />
    </div>
  );
}

export default OwnExpenseDraftPanel;
