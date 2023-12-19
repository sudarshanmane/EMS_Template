import React, { useState, useEffect} from "react";
import { message, Upload } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { applyCard } from "../../store/Action/Actions";
import { useForm } from "react-hook-form";

function Card() {
  const dispatch = useDispatch();
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
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

 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (values) => {
    dispatch(applyCard(values));
  };

  const applyCardSelector = useSelector((state) => state.applyCardresult);

  useEffect(() => {
    if (applyCardSelector) {
      dispatch(getCard({ payload: {}, URL: url }));
    }
    setIsAddFormVisible(false);
  }, [applyCardSelector]);

  const [file, setFile] = useState();
  const [imageFile, setImageFile] = useState();
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title mb-0">Apply For Card</h5>
      </div>
      <div className="card-body">
        <form  onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="validationServer01">Full Name</label>
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
              <div className="col-md-3 mb-3">
                <label htmlFor="validationServer04">Email</label>
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
              <div className="col-md-3 mb-3">
                <label htmlFor="validationServer05">Mobile No</label>
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
                </div>
              </div>
              {/* <div className="col-md-3 mb-3">
                <label htmlFor="validationServer04">Occupation Type</label>
                <select
                  className="form-control"
                  id="validationServer04"
                  required
                  {...register("category_name")}
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
              </div> */}
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
                  {...register("address")}
                />
                <div className="invalid-feedback">
                  Please provide your address.
                </div>
              </div>
              
            </div>
          </div>
          <div className="form-row">
            <div className="row">
            <div className="col-md-3 mb-3">
                <label htmlFor="validationServer04">City</label>
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
              <div className="col-md-3 mb-3">
                <label htmlFor="validationServer04">State</label>
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

              <div className="col-md-3 mb-3">
                <label htmlFor="validationServer05">Zip</label>
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
              <div className="col-md-3 mb-3">
                <label htmlFor="validationServer05">Pan No</label>
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
                {/* <input
                  type="file"
                  className="form-control"
                  id="panCardFile"
                  accept=".jpg, .jpeg, .png, .pdf"
                  //  onChange={handlePanCardChange}
                  required
                  {...register("pan_card")}
                  onChange={(e) => {
                    handleFileChange(e);
                  }}
                /> */}
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationServer05">Adhar No</label>
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
                {/* <input
                  type="file"
                  className="form-control"
                  id="adharCardFile"
                  accept=".jpg, .jpeg, .png, .pdf"
                  //  onChange={handlePanCardChange}
                  required
                  {...register("aadhar_card")}
                  onChange={(e) => {
                    handleFileChange(e);
                  }}
                /> */}
              </div>
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Card;
