import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

export default function CompanyPolicies() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (values) => {
    dispatch(addCategoryAction(values));
  };

  return (
    <div className="page-wrapper">
       <div className="content container-fluid">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title">Company Policies</h1>
          
          <h3>Zylkar Global.'s Travel Policy</h3>
          <h5>
            Your company's travel policies will be displayed on the dashboard
            for all your employees to view.
          </h5>
          <h3>Genral Policies</h3>
          <p>
            General policies will apply to all expene categories by default. To
            change settings for an individual category. use the 'Override genral
            policies' option while creating/editing a category.
          </p>
          <button
            type="button"
            className="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
         
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-sm-1">
                <div className="input-block">
                  <div
                    style={{
                      display: "flex",
                      border: "1px solid #ccc",
                      height: "40px",
                    }}
                  >
                    <div
                      style={{
                        borderRight: "1px solid #ccc",
                        padding: "5px",
                        minWidth: "30px",
                      }}
                    >
                      USD
                    </div>
                    <input
                      placeholder="500"
                      className="form-control"
                      type="number"
                      style={{
                        flex: "1",
                        padding: "5px",
                        height: "40px",
                        width: "100%",

                        border: "1px 1px 1px 1px", // Remove border
                        backgroundColor: "transparent",
                      }}
                      {...register("receipt_require_limit")}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-1">
                <div className="input-block">
                  <div
                    style={{
                      display: "flex",
                      border: "1px solid #ccc",
                      height: "40px",
                    }}
                  >
                    <div
                      style={{
                        borderRight: "1px solid #ccc",
                        padding: "5px",
                        minWidth: "30px",
                      }}
                    >
                      USD
                    </div>
                    <input
                      placeholder="500"
                      className="form-control"
                      type="number"
                      style={{
                        flex: "1",
                        padding: "5px",
                        height: "40px",
                        width: "100%",

                        border: "1px 1px 1px 1px", // Remove border
                        backgroundColor: "transparent",
                      }}
                      {...register("receipt_require_limit")}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-10">
              <div className="checkbox">
                <label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="True"
                    {...register("override_general_policy")}
                  />{" "}
                  Expense amount limit
                </label>
              </div>
            </div>
            <div className="col-md-10">
              <div className="checkbox">
                <label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="True"
                    {...register("override_general_policy")}
                  />{" "}
                  Receipt require limit?
                </label>
              </div>
            </div>
            <div className="col-md-10">
              <div className="checkbox">
                <label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="True"
                    {...register("override_general_policy")}
                  />{" "}
                  Make description mandatory
                </label>
              </div>
            </div>
            <div className="col-md-10">
              <div className="checkbox">
                <label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="True"
                    {...register("override_general_policy")}
                  />{" "}
                  Allow uncategorized expense to be part of expene reports?
                </label>
              </div>
            </div>

            <div className="submit-section">
              <button className="btn btn-primary submit-btn">Save</button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}
