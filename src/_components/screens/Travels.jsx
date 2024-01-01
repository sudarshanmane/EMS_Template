/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { createTravel } from "../../store/Action/Actions";
import { URLS } from "../../Globals/URLS";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";



const Travels = () => {
  const [url, setUrl] = useState(URLS.CREATE_TRAVEL_URL);  

  const dispatch = useDispatch();
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [submittedValues, setSubmittedValues] = useState(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (values) => {
    dispatch(createTravel(values));
   
  };

  const createTravelSelector = useSelector(
    (state) => state.createTravelSuccess
  );

  useEffect(() => {
    if (createTravelSelector && submittedValues) {
      dispatch(createTravel(submittedValues)); 
      setSubmittedValues(null);
      setIsAddFormVisible(false);
    }
  }, [createTravelSelector, submittedValues]);
 

  return (
    <>
      <div className="page-wrapper">
        <Helmet>
          <title>Horizontal Form - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        <div className="content container-fluid">
          {/* Page Header */}

          {/* /Page Header */}
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-0">
                <div className="card-header">
                  <h4 className="card-title mb-0">Travel Request</h4>
                </div>
                <div className="card-body">
                  <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-xl-12">
                       
                        <div className="input-block row">
                          <label className="col-lg-3 col-form-label">
                            <h4>Employee Name</h4>
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control"
                            {...register("title")} />
                          </div>
                        </div>
                        <div className="input-block row">
                          <label className="col-lg-3 col-form-label">
                            <h4>Title</h4>
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" 
                            {...register("title")}/>
                          </div>
                        </div>

                        <div className="row">
                          <label className="col-lg-3 col-form-label">
                           <h4> Travel Purposes</h4>
                          </label>
                          <div className="col-lg-9">
                            <div className="row">
                              <div className="input-block">
                                <textarea
                                  className="form-control"
                                  aria-label="With textarea"
                                  {...register("travel_purpose")}
                                  ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="input-block row">
                          <div className="col-md-6">
                            <div className="row">
                            <label className="col-lg-3 col-form-label">
                             <h4> From Date</h4>
                            </label>
                            <div className="col-lg-9">
                              <input type="date" className="form-control" 
                              {...register("from_date")}/>
                            </div>
                            </div>
                            
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                            <label className="col-sm-3 col-form-label">
                              <h4>To Date</h4>
                            </label>
                            <div className="col-sm-9">
                              <input type="date" className="form-control" 
                              {...register("to_date")}/>
                            </div>
                            </div>
                            
                          </div>

                          {/* <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div> */}
                        </div>

                        <div className="input-block row">
                          <label className="col-lg-3 col-form-label">
                            <h4>Estimated Budget</h4>
                          </label>
                          <div className="col-lg-9">
                            <input type="number" className="form-control"
                            {...register("estimated_budget")} />
                          </div>
                        </div>
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
export default Travels;
