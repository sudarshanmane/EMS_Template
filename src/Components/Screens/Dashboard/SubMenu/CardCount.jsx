import { Badge, Card, Space } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ownExpenseApproveAction,
  ownExpenseDraftAction,
  ownExpenseHoldAction,
  ownExpenseRejectAction,
} from "../../../../store/Actions/Actions";

const CardCount = ({ showTitle = true }) => {
  const dispatch = useDispatch();

  const expenseApproveCount = useSelector(
    (state) => state.ownExpenseApproveResult
  );
  console.log("approve status: ", expenseApproveCount);
  const expenseHoldCount = useSelector(
    (state) => state.ownExpenseHoldListResult
  );

  console.log("hold count is: ", expenseHoldCount);
  const expenserejectCount = useSelector(
    (state) => state.ownExpenseRejectListResult
  );
  console.log("reject status: ", expenserejectCount);
  const expensedraftCount = useSelector(
    (state) => state.ownExpenseDraftListResult
  );
  console.log("draft status: ", expensedraftCount);

  useEffect(() => {
    dispatch(ownExpenseApproveAction());
    dispatch(ownExpenseHoldAction());
    dispatch(ownExpenseRejectAction());
    dispatch(ownExpenseDraftAction());
  }, [dispatch]);

  // Check if any of the counts is undefined or empty.
  if (
    !expenseApproveCount || 
    !expenseHoldCount || 
    !expenserejectCount || 
    !expensedraftCount ||
    expenseApproveCount.results.length === 0 ||
    expenseHoldCount.results.length === 0 ||
    expenserejectCount.results.length === 0 ||
    expensedraftCount.results.length === 0
  ) {
    return null;
  }

  const approvalCount = expenseApproveCount.results.length;
  const holdCount = expenseHoldCount.results.length;
  const rejectCount = expenserejectCount.results.length;
  const draftCount = expensedraftCount.results.length;

  return (
    <div className="expense_report">
      {showTitle && (
        <div className="expense_report_header">
          {" "}
          <h2>Dashboard </h2>{" "}
        </div>
      )}

      <div className="chart_task_status_container">
        <Space className="antd_space" size={"large"}>
          <Card title={showTitle ? "Status" : null} bordered={false}>
            <Space direction="vertical" style={{ width: "100%" }}>
              <h3>Own Expense</h3>
              <div className="expense_approval">
                <div>
                  <Badge count={approvalCount} showZero color="#faad14" />
                  <a href="/home/ownexpenseapproved-cardlist">Approved Expense</a>
                </div>
              </div>{" "}
              <div className="expense_approval">
                <div>
                  <Badge count={rejectCount} showZero color="#faad14" />
                  <a href="/home/ownexpenserejected-cardlist">Rejected Expense</a>
                </div>
              </div>
              <div className="expense_approval">
                <div>
                  <Badge count={holdCount} showZero color="#faad14" />
                  <a href="/home/ownexpensehold-cardlist">Hold Expense</a>
                </div>{" "}
              </div>
              <div className="expense_approval">
                <div>
                  <Badge count={draftCount} showZero color="#faad14" />
                  <a href="/home/ownexpensedrafted-cardlist">Drafted Expense</a>
                </div>
              </div>
            </Space>
          </Card>
        </Space>
      </div>
    </div>
  );
};

export default CardCount;