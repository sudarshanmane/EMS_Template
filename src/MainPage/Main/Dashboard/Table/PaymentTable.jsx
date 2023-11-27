import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const PaymentTable = () => {
    return (
        <div className="col-md-6 d-flex">
            <div className="card card-table flex-fill">
                <div className="card-header">
                    <h3 className="card-title mb-0">Payments</h3>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table custom-table table-nowrap mb-0">
                            <thead>
                                <tr>
                                    <th>Invoice ID</th>
                                    <th>Client</th>
                                    <th>Payment Type</th>
                                    <th>Paid Date</th>
                                    <th>Paid Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Link to="/app/sales/invoices-view">#INV-0001</Link></td>
                                    <td>
                                        <h2><Link to="#">Global Technologies</Link></h2>
                                    </td>
                                    <td>Paypal</td>
                                    <td>11 Mar 2019</td>
                                    <td>$380</td>
                                </tr>
                                <tr>
                                    <td><Link to="/app/sales/invoices-view">#INV-0002</Link></td>
                                    <td>
                                        <h2><Link to="#">Delta Infotech</Link></h2>
                                    </td>
                                    <td>Paypal</td>
                                    <td>8 Feb 2019</td>
                                    <td>$500</td>
                                </tr>
                                <tr>
                                    <td><Link to="/app/sales/invoices-view">#INV-0003</Link></td>
                                    <td>
                                        <h2><Link to="#">Cream Inc</Link></h2>
                                    </td>
                                    <td>Paypal</td>
                                    <td>23 Jan 2019</td>
                                    <td>$60</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card-footer">
                    <Link to="/app/sales/payments">View all payments</Link>
                </div>
            </div>
        </div>
    )
}

export default PaymentTable