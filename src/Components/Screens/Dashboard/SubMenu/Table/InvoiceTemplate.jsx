import React, { useState } from "react";
import { render } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { Col, Divider, Row, Button, Table } from "antd";
import TableExpense from "./TableExpense";
// import 'antd/dist/antd.css';
function InvoiceTemplate() {
  const [isInvoiceVisible, setIsInvoiceVisible] = useState(true);

  const hideInvoice = () => {
    setIsInvoiceVisible(false);
    // setViewingInvoice(false);
    const tablePageStyle = {
      display: isInvoiceVisible ? "block" : "none",
      minHeight: "100vh", // Set the minimum height to fill the viewport
    };
  };
  return (
    <div style={{ display: isInvoiceVisible ? "block" : "none" }}>
      <div style={{ padding: 50, backgroundColor: "#D9D9D6", margin: "30px" }}>
        <div
          style={{ padding: 50, backgroundColor: "#D9D9D6", margin: "30px" }}
        >
          <Row>
            <Col>
              <Divider>Invoice</Divider>
            </Col>
          </Row>

          <Row>
            <Col>
              <Link to="/home/table">
                <Button type="primary" onClick={hideInvoice}>
                  Back
                </Button>
              </Link>
            </Col>
          </Row>

          {/* 
      <Button type="primary" onClick={TableExpese}>
        Back
      </Button> */}

          <Row gutter={24} style={{ marginTop: 32 }}>
            <Col span={8}>
              <h3>Eco Haya</h3>
              <div>#944/945, 4th Cross, 9th Main,</div>
              <div>Vijaya Bank Layout,</div>
              <div>Bannerghatta Road,</div>
              <div>Bangalore - 560076</div>
            </Col>
            <Col span={8} offset={8}>
              <table>
                <tr>
                  <th>Invoice # :</th>
                  <td>1</td>
                </tr>
                <tr>
                  <th>Invoice Date :</th>
                  <td>10-01-2018</td>
                </tr>
                <tr>
                  <th>Due Date :</th>
                  <td>10-01-2018</td>
                </tr>
              </table>
            </Col>
          </Row>

          <Row style={{ marginTop: 48 }}>
            <div>
              Bill To: <strong>Strides Shasun Ltd</strong>
            </div>
            <div>Bannerghatt Road,</div>
            <div>Bangalore - 560076</div>
          </Row>

          {/* <Row style={{ marginTop: 48 }}>
        <Table dataSource={[{
            id: 1,
            name: 'Accommodation (Single Occupancy)',
            description: 'Accommodation',
            price: 1599,
            quantity: 1
        }]}
        pagination={false}
        >
          <Table.Column title="Items" dataIndex='name' />
          <Table.Column title="Description" dataIndex='description' />
          <Table.Column title="Quantity" dataIndex='quantity' />
          <Table.Column title="Price" dataIndex='price' />
          <Table.Column title="Line Total" />
        </Table>
      </Row> */}

          <Row style={{ marginTop: 48 }}>
            <Col span={8} offset={16}>
              <table>
                <tr>
                  <th>Gross Total :</th>
                  <td>Rs. 1599</td>
                </tr>
                <tr>
                  <th>IGST @6% :</th>
                  <td>Rs. 95.94</td>
                </tr>
                <tr>
                  <th>CGST @6% :</th>
                  <td>Rs. 95.94</td>
                </tr>
                <tr>
                  <th>Nett Total :</th>
                  <td>Rs. 1790.88</td>
                </tr>
              </table>
            </Col>
          </Row>

          <Row style={{ marginTop: 48, textAlign: "center" }}>notes</Row>

          <Row style={{ marginTop: 48, textAlign: "center" }}>Footer</Row>
        </div>
      </div>
    </div>
  );
}

// render(<App />, document.getElementById("root"));
export default InvoiceTemplate;
