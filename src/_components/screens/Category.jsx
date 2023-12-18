import React from "react";

export default function Category() {
  return (
    <>
    <div className="page-wrapper">
     <div className="content container-fluid">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
            <h3 className="page-title">New Category</h3>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <h4 className="card-title">Category Name</h4>
        <div className="input-block">
          <input type="text" className="form-control" />
        </div>

        <div className="input-block row">
          <label className="col-lg-3 col-form-label">Expence policies</label>
          <div className="col-lg-9">
            <label>
              <input
                class="form-check-input"
                type="checkbox"
                value="True"
                // {...register("override_general_policy")}
              />{" "}
              Override general policies
            </label>
            <p>Expense amount limit: $500</p>
            <p>Recipt required limit: $500</p>
            <p>Description is not mandatory</p>
          </div>
        </div>

        <div className="input-block row">
          <label className="col-lg-3 col-form-label">Amount Code</label>
          <div className="col-lg-9">
            <input type="text" className="form-control" />
            <p>
              A unique reference code for this category that is limited to 10
              characters and can comprise of letters, digits, hyphen and
              underscore
            </p>
          </div>
          <div className="col-lg-9">
            <button type="button" className="btn btn-success me-1">
              Save
            </button>

            <button type="button" className="btn btn-secondary me-1">
              Cancel
            </button>
            <p>
              You have the same organization in Zoho Books, Zoho subscription.
              Alerting any information on this page will be alter it there.
            </p>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}
