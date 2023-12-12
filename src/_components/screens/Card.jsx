import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { Button, Form, Input, Row, Col, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { applyCardAction } from "../../store/Action/Actions";

function Card() {
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);
  const [addressList, setAddressList] = useState([]);
  const [uploading, setUploading] = useState(false);
  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("files[]", file);
    });
    setUploading(true);
    // You can use any AJAX library you like
    fetch("https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        setFileList([]);
        message.success("upload successfully.");
      })
      .catch(() => {
        message.error("upload failed.");
      })
      .finally(() => {
        setUploading(false);
      });
  };
  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };
  const propss = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = addressList.slice();
      newFileList.splice(index, 1);
      setAddressList(newFileList);
    },
    beforeUpload: (file) => {
      setAddressList([...fileList, file]);
      return false;
    },
    addressList,
  };

  const selector = useSelector((state) => state.applyCardResult);

  const onFinish = (values) => {
    dispatch(applyCardAction(values));
  };

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title mb-0">Apply For Card</h5>
      </div>
      <div className="card-body">
        <form>
          <div className="form-row">
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="validationServer01">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationServer01"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationServer02">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationServer02"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="row">
              <div className="col-md-3 mb-3">
                <label htmlFor="validationServer04">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationServer04"
                  placeholder="Email"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid email.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationServer05">Mobile No</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationServer05"
                  placeholder="Mobile No"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid Mobile No.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationServer04">Occupation Type</label>
                <select
                  className="form-control"
                  id="validationServer04"
                  required
                >
                  <option value="" disabled>
                    Select Occupation Type
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
                <div className="invalid-feedback">
                  Please select an Occupation Type.
                </div>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="validationServer03">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationServer03"
                  placeholder="Address"
                  required
                />
                <div className="invalid-feedback">
                  Please provide your address.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationServer04">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationServer04"
                  placeholder="City"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationServer04">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationServer04"
                  placeholder="State"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>

              <div className="col-md-3 mb-3">
                <label htmlFor="validationServer05">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationServer05"
                  placeholder="Zip"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid zip.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationServer05">Pan No</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationServer05"
                  placeholder="Adhar Card"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid Pan No.
                </div>
                <input
                  type="file"
                  className="form-control"
                  id="panCardFile"
                  accept=".jpg, .jpeg, .png, .pdf"
                  //  onChange={handlePanCardChange}
                  required
                />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationServer05">Adhar No</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationServer05"
                  placeholder="Adhar Card"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid Adhar No.
                </div>
                <input
                  type="file"
                  className="form-control"
                  id="panCardFile"
                  accept=".jpg, .jpeg, .png, .pdf"
                  //  onChange={handlePanCardChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="input-block">
            <div className="form-check">
              <input
                className="form-check-input is-invalid"
                type="checkbox"
                defaultValue
                id="invalidCheck3"
                required
              />
              <label className="form-check-label" htmlFor="invalidCheck3">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </form>
      </div>
    </div>
  );
}

export default Card;
