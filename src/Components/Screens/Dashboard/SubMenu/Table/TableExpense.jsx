import { Button, Table } from "antd";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import InvoiceTemplate from "./InvoiceTemplate";
import { useEffect } from "react";

const TableExpense = () => {
  const [tableWidth, setTableWidth] = useState({ display: "flex" });
  const [viewingInvoice, setViewingInvoice] = useState(false);
  const [allMainUsers, setAllMainUsers] = useState();
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "UserName",
      dataIndex: "username",
    },
    {
      title: "Full Name",
      dataIndex: "first_name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    // { title: "marks", dataIndex: "marks" },
  ];

  // useEffect(() => {
  //   getAllMainUsers().then((result) => {
  //     console.log("result: ",result)
  //     setAllMainUsers(result)
  //   })
  // }, [])

  const [tableContainerWidth, setTableCotainerWidth] = useState({
    width: "50%",
  });

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <div className="table-container" style={tableWidth}>
        <div style={viewingInvoice ? tableContainerWidth : { width: "100%" }}>
          {" "}
          <Table
            columns={columns}
            dataSource={allMainUsers}
            onChange={onChange}
          />
        </div>
        <div style={{ display: viewingInvoice ? "block" : "none" }}>
          <div className="container">
            <table>
              <thead>
                <tr>
                  <th>
                    <div className="container">
                      <InvoiceTemplate />
                    </div>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
          {/* <img style={{width:"100%"}}
    src="https://th.bing.com/th/id/OIG.lVXjWwlHyIo4QdjnC1YE"
    alt=""
  /> */}
        </div>
      </div>
    </div>
  );
};

export default TableExpense;
