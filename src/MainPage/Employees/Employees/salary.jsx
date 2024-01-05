import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { format } from "date-fns";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
import * as Yup from "yup";

const stepSchema = Yup.object().shape({
  new_gross_salary: Yup.string().required("Gross salary is required"),
  revision_date: Yup.string().required("Revision date is required"),
  revision_document: Yup.string().required("Revision document is Required"),
});

export default function salary({ nextcall, userId }) {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(stepSchema),
  });

  const dispatch = useDispatch();
  const [file2, setFile2] = useState();

  const imageFormDataConverter2 = (e) => {
    setFile2(e.target.files[0]);
  };

  const onSubmit = (data) => {
    console.log("salary data on submit", data);
    let formData = new FormData();

    formData.append("user_id", userId);
    formData.append("new_gross_salary", data.new_gross_salary);
    formData.append("revision_date", data.revision_date);
    formData.append("revision_document", file2);

    console.log("form data on submit", formData);
  };

  return (
    <>
      {" "}
      <div className="row mt-4">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">Salary Revision</h4>
            </div>
            <div className="card-body">
              <form
                onSubmit={handleSubmit(onSubmit)}
                encType="multipart/form-data"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Gross Salary <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          {...register("new_gross_salary")}
                        />
                        <div className="text-danger">
                          {errors.new_gross_salary?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Revision document <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <Controller
                          name="revision_document"
                          control={control}
                          rules={{
                            validate: (value) =>
                              Yup.mixed()
                                .test(
                                  "fileSize",
                                  "Face Match Image size is too large",
                                  (v) => v?.size <= 1024 * 1024 * 2
                                )
                                .required("Choose Face Match Image")
                                .isValidSync(value),
                          }}
                          render={({ field }) => (
                            <>
                              <input
                                type="file"
                                className="form-control"
                                onChange={(e) => {
                                  field.onChange(e.target.files[0]);
                                  imageFormDataConverter2(e);
                                }}
                              />
                              <div className="text-danger">
                                {errors.revision_document?.message}
                              </div>
                            </>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block row">
                      <label className="col-form-label col-md-3">
                        Revision Date <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-9">
                        <Controller
                          control={control}
                          name="revision_date"
                          render={({ field }) => (
                            <div className="date-picker-container">
                              <span
                                className="calendar-icon"
                                onClick={() =>
                                  console.log("Calendar icon clicked")
                                }
                              >
                                <i class="fa-regular fa-calendar"></i>
                              </span>
                              <DatePicker
                                selected={
                                  field.value ? new Date(field.value) : null
                                }
                                onChange={(date) =>
                                  field.onChange(
                                    date ? format(date, "yyyy-MM-dd") : ""
                                  )
                                }
                                className="form-control datetimepicker"
                                dateFormat="yyyy-MM-dd"
                              />
                            </div>
                          )}
                        />
                        <div className="text-danger">
                          {errors.revision_date?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  style={{ float: "right" }}
                >
                  Save
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
