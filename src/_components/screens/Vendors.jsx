/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { URLS } from "../../Globals/URLS";
import { useDispatch, useSelector } from "react-redux";
import { createVendor } from "../../store/Action/Actions";
import { useNavigate } from "react-router-dom";


const Vendors = () => {
  const [url, setUrl] = useState(URLS.GET_VENDOR_URL);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [submittedValues, setSubmittedValues] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (values) => {
    dispatch(createVendor(values));
    navigate("/home/VendorPannel");
  };

  const createVendorSelector = useSelector(
    (state) => state.createVendorSuccess
  );

  useEffect(() => {
    if (createVendorSelector && submittedValues) {
      dispatch(createVendor(submittedValues));
      setSubmittedValues(null);
      setIsAddFormVisible(false);
    }
  }, [createVendorSelector, submittedValues]);

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <div className="col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <h4 className="card-title mb-0">Vendor Form</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-block row">
                      <label className="col-lg-3 col-form-label">
                        <h4> Company Name</h4>
                      </label>
                      <div className="col-lg-9">
                        <input
                          type="text"
                          className="form-control"
                          {...register("company_name")}
                        />
                      </div>
                    </div>
                    <div className="input-block row">
                      <label className="col-lg-3 col-form-label">
                        <h4>Telephone</h4>
                      </label>
                      <div className="col-lg-9">
                        <input
                          type="tel"
                          className="form-control"
                          {...register("telephone")}
                        />
                      </div>
                    </div>
                    <div className="input-block row">
                      <label className="col-lg-3 col-form-label">
                        <h4>Email Address</h4>
                      </label>
                      <div className="col-lg-9">
                        <input
                          type="email"
                          className="form-control"
                          {...register("mail_id")}
                        />
                      </div>
                    </div>
                    <div className="input-block row">
                      <label className="col-lg-3 col-form-label">
                        <h4>Website</h4>
                      </label>
                      <div className="col-lg-9">
                        <input
                          type="text"
                          className="form-control"
                          {...register("website")}
                        />
                      </div>
                    </div>
                    <div className="input-block row">
                      <label className="col-lg-3 col-form-label">
                        <h4>FAX</h4>
                      </label>
                      <div className="col-lg-9">
                        <input
                          type="text"
                          className="form-control"
                          {...register("fax")}
                        />
                      </div>
                    </div>

                    <div className="text-end">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Vendors;
