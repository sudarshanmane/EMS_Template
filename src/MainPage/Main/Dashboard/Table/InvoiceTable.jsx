import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const InvoiceTable = () => {
    return (
        <div className="col-md-6 d-flex">
            <div className="card card-table flex-fill">
                <div className="card-header">
                    <h3 className="card-title mb-0">Invoices</h3>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-nowrap custom-table mb-0">
                            <thead>
                                <tr>
                                    <th>Invoice ID</th>
                                    <th>Client</th>
                                    <th>Due Date</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Link to="/app/sales/invoices-view">#INV-0001</Link></td>
                                    <td>
                                        <h2><Link to="#">Global Technologies</Link></h2>
                                    </td>
                                    <td>11 Mar 2019</td>
                                    <td>$380</td>
                                    <td>
                                        <span className="badge bg-inverse-warning">Partially Paid</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Link to="/app/sales/invoices-view">#INV-0002</Link></td>
                                    <td>
                                        <h2><Link to="#">Delta Infotech</Link></h2>
                                    </td>
                                    <td>8 Feb 2019</td>
                                    <td>$500</td>
                                    <td>
                                        <span className="badge bg-inverse-success">Paid</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Link to="/app/sales/invoices-view">#INV-0003</Link></td>
                                    <td>
                                        <h2><Link to="#">Cream Inc</Link></h2>
                                    </td>
                                    <td>23 Jan 2019</td>
                                    <td>$60</td>
                                    <td>
                                        <span className="badge bg-inverse-danger">Unpaid</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card-footer">
                    <Link to="/app/sales/invoices">View all invoices</Link>
                </div>
            </div>
        </div>
    )
}

export default InvoiceTable