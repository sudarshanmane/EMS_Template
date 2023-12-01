import { Badge, Card, Row, Space } from "antd";
import React, { useEffect } from "react";
import "./ExpenseReport.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { managercardHoldAction, managercardRejectAction, managercardapprovelAction } from "../../../../store/Actions/Actions";
import CardCount from "./CardCount";

const ExpenseReport = () => {
 
  const dispatch = useDispatch();

  // Hold record fetch
  const managercardholdSelector = useSelector((state) => state.managerholdResult);
  const loadingHold = useSelector((state) => state.loading);

  // Approved record fetch
  const managerapprovedSelector = useSelector((state) => state.managerapprovelResult);
  const loadingApproved = useSelector((state) => state.loading);
//card reject api fetch

const managerRejectSelector = useSelector((state) => state.managerrejectResult);

  const loadingreject = useSelector((state) => state.loading);


  useEffect(() => {
    // Fetch hold records
    dispatch(managercardHoldAction({}));

    // Fetch approved records
    dispatch(managercardapprovelAction({}));
     // Fetch reject records
    dispatch(managercardRejectAction({}))
  }, [dispatch]);

  // Check if the managercardholdSelector state is undefined or empty.
  if (!managercardholdSelector || managercardholdSelector.results.length === 0) {
    return null;
  }
  const count = managercardholdSelector.results.length;

  if (!managerapprovedSelector || managerapprovedSelector.results.length === 0) {
    return null;
  }
  const approvalcount = managerapprovedSelector.results.length;
  if (!managerRejectSelector || managerRejectSelector.results.length === 0) {
    return null;
  }
  const rejectcount = managerRejectSelector.results.length;

  return (
    <div className="expense_report">
      <div className="expense_report_header">
        {" "}
        <h2>Dashboard </h2>{" "}
      </div>
     
     
      <div className="chart_task_status_container">
        <Space className="antd_space" size={"large"}>
      
          <Card title="Status" bordered={false}>
            <Space direction="vertical" style={{ width: "100%" }}>
              <h3>Expense</h3>
             
              <div className="expense_approval">
                {/* <div>
                  <Badge count={approvalcount}  showZero color="#faad14" />
                  <Link to="approved-cardlist">Approved Expense</Link>
                </div> */}
              <div>
                    <Badge count={approvalcount} showZero color="#faad14" />
                    <a href="/home/approved-cardlist">Approved Expense</a>
                  </div>

              </div>{" "}
              <div className="expense_approval">
                <Badge count={rejectcount}  showZero color="#faad14" />
                <a href="/home/reject-cardlist">Rejected Expense</a>
              </div>
              <div className="expense_approval">
                <div>
                  <Badge count={count} showZero color="#faad14" />
                 
                  <a href="/home/hold-cardlist">hold Expense</a>
                </div>
              </div>
            </Space>
          </Card>
        </Space>
       
      </div>
      <CardCount showTitle={false} />
    </div>
    
  );
};

export default ExpenseReport;
