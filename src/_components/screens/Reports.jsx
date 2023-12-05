import React, { useState } from "react";
import { Layout, DatePicker, Button } from "antd";
// import ReportPanel from "../../../Panels/ReportPanel";
import { Link, useNavigate } from "react-router-dom";

const { Content } = Layout;

function Reports() {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const handleFromDateChange = (date) => {
    setFromDate(date);
  };

  const handleToDateChange = (date) => {
    setToDate(date);
  };
  const navigate = useNavigate();

  const handleSeeReport = () => {
    if (fromDate === null || toDate === null) {
      alert("please select the date");
    } else {
      navigate("/home/reportpanel");
    }
  };

  return (
    <Content>
      <div>
        <h1>Reports</h1>

        <br />
        <DatePicker
          style={{ marginBottom: "16px" }}
          format="YYYY-MM-DD"
          placeholder="Select 'from' date"
          value={fromDate}
          onChange={handleFromDateChange}
        />
        <DatePicker
          style={{ marginBottom: "16px" }}
          format="YYYY-MM-DD"
          placeholder="Select 'to' date"
          value={toDate}
          onChange={handleToDateChange}
        />
        <br />
        <Button type="primary" onClick={handleSeeReport}>
          See Reports
        </Button>
        {/* <Link to ="/home/reportpanel">
    <Button type ="primary">See Reports</Button>
    </Link> */}
      </div>
    </Content>
  );
}

export default Reports;
