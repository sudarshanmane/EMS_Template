import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyCard, getCard } from "../../store/Action/Actions";
import { useForm } from "react-hook-form";
import { URLS } from "../../Globals/URLS";
import { message } from "antd";

function Card() {
  const [url, setUrl] = useState(URLS.APPLY_CARD_URL);
  const dispatch = useDispatch();
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [aadharCardFile, setAadharCardFile] = useState();
  const [panCardFile, setPanCardFile] = useState();

  const handleFileChange = (e, cardType) => {
    if (cardType === "aadhar_card") {
      setAadharCardFile(e);
    } else if (cardType === "pan_card") {
      setPanCardFile(e);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const onSubmit = (values) => {
    let formData = new FormData();
    formData.append("aadhar_card", aadharCardFile);
    formData.append("pan_card", panCardFile);
    for (const key in values) {
      if (key == "aadhar_card" || key == "pan_card") {
      } else {
        formData.append(key, values[key]);
      }
    }
    dispatch(applyCard(formData));
    message.success(applyCardSelector?.Status)
  };

  const applyCardSelector = useSelector((state) => state.applyCardresult);

  useEffect(() => {
    if (applyCardSelector) {
      // alert(applyCardSelector?.Status);
      message.success(applyCardSelector?.Status)
      // dispatch(getCard({ payload: {}, URL: url }));
      reset();
    }
    setIsAddFormVisible(false);
  }, [applyCardSelector]);

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">Apply For Card</h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-row">
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="validationServer01">
                          Full Name<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationServer01"
                          placeholder="Full Name"
                          required
                          {...register("full_name")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="validationServer04">
                          Email<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationServer04"
                          placeholder="Email"
                          required
                          {...register("email")}
                        />
                        <div className="invalid-feedback">
                          Please provide a valid email.
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="validationServer05">
                          Mobile No<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationServer05"
                          placeholder="Mobile No"
                          required
                          {...register("mobile_no")}
                        />
                        <div className="invalid-feedback">
                          Please provide a valid Mobile No.
                          <span className="text-danger">*</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="validationServer03">
                          Address<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationServer03"
                          placeholder="Address"
                          required
                          {...register("address")}
                        />
                        <div className="invalid-feedback">
                          Please provide your address.
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="validationServer04">
                          City<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationServer04"
                          placeholder="City"
                          required
                          {...register("city")}
                        />
                        <div className="invalid-feedback">
                          Please provide a valid city.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="validationServer04">
                          State<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationServer04"
                          placeholder="State"
                          required
                          {...register("state")}
                        />
                        <div className="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>

                      <div className="col-md-6 mb-4">
                        <label htmlFor="validationServer05">
                          Zip<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationServer05"
                          placeholder="Zip"
                          required
                          {...register("pincode")}
                        />
                        <div className="invalid-feedback">
                          Please provide a valid zip.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="validationServer05">
                          Pan No<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationServer05"
                          placeholder="Pan Card"
                          required
                          {...register("pan_no")}
                        />
                        <div className="invalid-feedback">
                          Please provide a valid Pan No.
                        </div>
                        <input
                          type="file"
                          className="form-control"
                          id="panCardFile"
                          accept=".jpg, .jpeg, .png, .pdf"
                          required
                          {...register("pan_card")}
                          onChange={(e) =>
                            handleFileChange(e.target.files[0], "pan_card")
                          }
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="validationServer05">
                          Adhar No<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationServer05"
                          placeholder="Adhar Card"
                          required
                          {...register("aadhar_no")}
                        />
                        <div className="invalid-feedback">
                          Please provide a valid Adhar No.
                        </div>
                        <input
                          type="file"
                          className="form-control"
                          id="adharCardFile"
                          accept=".jpg, .jpeg, .png, .pdf"
                          required
                          {...register("aadhar_card")}
                          onChange={(e) =>
                            handleFileChange(e.target.files[0], "aadhar_card")
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
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
  );
}

export default Card;
